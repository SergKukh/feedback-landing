import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './data/dto';
import { InjectModel } from '@nestjs/sequelize';
import { Feedback } from './models/feedback.model';

@Injectable()
export class AppService {
  constructor(@InjectModel(Feedback) private feedbackRepository: typeof Feedback) { }

  async sendFeedback(dto: CreateFeedbackDto) {
    const data = await this.feedbackRepository.create(dto);
    return data;
  }
}
