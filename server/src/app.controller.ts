import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateFeedbackDto } from './data/dto';
import { ValidationPipe } from './pipes/validation.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @UsePipes(ValidationPipe)
  @Post('feedback')
  sendFeedback(@Body() dto: CreateFeedbackDto) {
    return this.appService.sendFeedback(dto);
  }
}
