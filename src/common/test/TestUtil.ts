import { User } from '../../user/user.entity';

export default class TestUtil {
  static giveMeAValidUser(): User {
    const user = new User();
    user.email = 'valid@email.com';
    user.name = 'John Doe';
    user.id = '1';

    return user;
  }
}
