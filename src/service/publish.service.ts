import { publishRepository } from "../repository/publish.repository";

interface Data {
  message: string;
}

export class PublishService {
  static async publish(data: Data) {
    try {
      const { message } = data;

      const teste = await publishRepository.post(message);

      return teste;
    } catch (err) {
      return err;
    }
  }
}
