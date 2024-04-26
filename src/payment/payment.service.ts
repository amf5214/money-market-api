import { Injectable } from '@nestjs/common';
import { Stripe } from 'stripe';
import { LocalConfigService } from 'src/localconfig/localconfig.service';

@Injectable()
export class PaymentService {
  private priceId: string;

  constructor(private config: LocalConfigService) {
    this.priceId = process.env.STRIPE_PRICE_ID;
  }

  async createCheckoutSession() {
    const stripe: Stripe = new Stripe(this.config.getStripeApi());

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: this.priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });
    return session.url;
  }
}
