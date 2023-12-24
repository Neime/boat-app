import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UserRepository } from 'src/infrastructure/repository/userRepository';

export type AuthResponse = {
  access_token: string;
};

@Injectable()
export class Auth {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async execute(email: string, password: string): Promise<AuthResponse> {
    const user: User = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid email');
    }

    if (user.password !== password) {
      throw new UnauthorizedException('Invalid password');
    }

    return {
      access_token: await this.jwtService.signAsync({
        suv: user.id,
        username: user.email,
      }),
    };
  }
}
