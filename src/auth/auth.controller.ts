import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login') // <-- Define o POST /auth/login
  async login(@Body() body: { nome: string; senha: string }) {
    return this.authService.login(body.nome, body.senha);
  }
}
