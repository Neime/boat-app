import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { Auth, AuthResponse } from 'src/authorization/use-case/auth';
import { Public } from 'src/infrastructure/authorization/auth.gard';

@Controller('auth/login')
export class AuthController {
  constructor(private authUseCase: Auth) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  @Public()
  async signIn(@Body() authDto: Record<string, string>): Promise<AuthResponse> {
    return await this.authUseCase.execute(authDto.email, authDto.password);
  }
}
