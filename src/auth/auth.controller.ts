
import { Controller, Post, Req, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Req() req, @Body() body) {
    const { username, password } = body;
    return this.authService.login(req, username, password);
  }

  @Post('logout')
  logout(@Req() req) {
    return this.authService.logout(req);
  }

  @Get('profile')
  getProfile(@Req() req) {
    return this.authService.getProfile(req);
  }
}
