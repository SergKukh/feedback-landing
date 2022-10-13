import $api from "./http";

export class FeedbackService {
    static async sendFeedback(name: string, email: string, message: string) {
        return $api.post('/feedback', { name, email, message });
    }
}