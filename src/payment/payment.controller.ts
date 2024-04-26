import { Controller, Post, Redirect, HttpStatus } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @Post('create-checkout-session')
  @Redirect()
  async createCheckoutSession() {
    const checkoutSessionUrl =
      await this.paymentService.createCheckoutSession();
    console.log(checkoutSessionUrl);
    return { url: checkoutSessionUrl, statusCode: HttpStatus.FOUND };
  }
}
