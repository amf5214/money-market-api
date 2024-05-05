import { Injectable } from '@nestjs/common';
import { Stripe } from 'stripe';
import { LocalConfigService } from 'src/localconfig/localconfig.service';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from '../user/user.service';
import { User, AuthAccount, Customer } from '@prisma/client';
import { GetAuthAccount } from 'src/auth/decorator';

@Injectable()
export class PaymentService {
  private priceId: string;
  private stripe: Stripe;

  constructor(
    private config: LocalConfigService,
    private userService: UserService,
    private prismaService: PrismaService,
  ) {
    this.priceId = this.config.getStripePriceId();
    this.stripe = new Stripe(this.config.getStripeApi());
  }

  async createCheckoutSession(authAccountId: number, email: string) {
    const user: User = await this.userService.getownuser(authAccountId);
    const userIdString = user.id.toString();
    let existingCustomerId = null;
    let stripeCustomerId;

    for await (const customer of this.stripe.customers.list({ limit: 40 })) {
      if (customer.metadata.prismaUserId === userIdString) {
        existingCustomerId = customer.id;
        break;
      }
    }

    let customer = null;
    if (!existingCustomerId) {
      const newCustomer = await this.stripe.customers.create({
        email: email,
        name: user.firstName + ' ' + user.lastName,
        metadata: { prismaUserId: userIdString },
      });
      stripeCustomerId = newCustomer.id;

      const existingCustomer = await this.prismaService.customer.findUnique({
        where: { userId: user.id },
      });

      if (!existingCustomer) {
        const createdCustomer = await this.prismaService.customer.create({
          data: {
            userId: user.id,
            customerId: stripeCustomerId,
          },
        });
        console.log('created a new guy in DB: ', createdCustomer);
      }
    } else {
      customer = await this.stripe.customers.retrieve(existingCustomerId);
      stripeCustomerId = customer.id;
    }

    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: this.priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      customer: stripeCustomerId,
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });

    return session.url;
  }
  async verifyUserSubscription(authAccountId: number): Promise<boolean> {
    const user = await this.userService.getownuser(authAccountId);
    const customerId = await this.getCustomerIdForUser(user.id);

    if (!customerId) {
      console.log("No customer ID found for user.");
      return false;
    }

    const subscriptions = await this.stripe.subscriptions.list({
      customer: customerId,
      status: 'active', 
      limit: 1 
    });

    const hasActiveSubscription = subscriptions.data.length > 0;
   

    return hasActiveSubscription;
  }

  private async getCustomerIdForUser(userId: number): Promise<string | null> {
    const customer = await this.prismaService.customer.findUnique({
      where: { userId: userId },
    });

    return customer?.customerId ?? null;
  }
}

