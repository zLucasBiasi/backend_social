export class createUserDTO {
  email: string;
  first_name: string;
  password: string;
  last_name: string;
  age: string;
  constructor(
    email: string,
    password: string,
    first_name: string,
    last_name: string,
    age: string
  ) {
    this.email = email;
    this.password = password;
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
  }
}
