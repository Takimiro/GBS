export interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
  token?: string;
}

class User implements IUser {
  token?: string;
  constructor(user: IUser) {
    this.email = user.email;
    this.name = user.name;
    this.password = user.password;
  }
  name: string;
  email: string;
  password: string;
}

export { User };
