import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(userName: string, pass: string) {
    const user = await this.userService.findUser(userName);
    if (user?.password !== pass) {
      throw new UnauthorizedException('No user with those credentials');
    }

    const payload = { userName: user?.userName, role: user?.role };
    return {
      userInfo: user,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
