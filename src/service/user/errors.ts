import { DomainError } from "../../@shared/domainError";

export class EmailAlreadyInUseError extends DomainError {
  status = 409;
  constructor() {
    super("o email já está em uso no momento");
  }
}
