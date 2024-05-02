import { Get, HttpException,Controller, Post, Redirect, HttpStatus } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { JwtGuard } from 'src/auth/guard';
import { UseGuards } from '@nestjs/common/decorators';
import { AuthAccount } from '@prisma/client';
import { GetAuthAccount } from 'src/auth/decorator';

@UseGuards(JwtGuard)
@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @Post('create-checkout-session')
  @Redirect()
  async createCheckoutSession(@GetAuthAccount() authAccount: AuthAccount) {
    const checkoutSessionUrl = await this.paymentService.createCheckoutSession(
      authAccount.id,
      authAccount.email,
    );
 
    return { url: checkoutSessionUrl, statusCode: HttpStatus.FOUND };
  }
  @Get('verify-subscription')
  async verifySubscription(@GetAuthAccount() authAccount: AuthAccount) {
    try {
      const isValidSubscription = await this.paymentService.verifyUserSubscription(authAccount.id);

      if (!isValidSubscription) {
        throw new HttpException('No active subscription found', HttpStatus.FORBIDDEN);
      }

      return { message: 'Active subscription confirmed', statusCode: HttpStatus.OK };
    } catch (error) {
      throw new HttpException('Error verifying subscription: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
