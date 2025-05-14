import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, password: string){
    const user = await this.userService.findByUsername(username);
    if (user && (await bcrypt.compare(password, user.password))){
      return user;
    }
      return null;
  }

  async login(req: any, username: string, password: string) {
    const user = await this.validateUser(username, password);
    if (user) {
      req.session.userId = user._id;
      return { message: 'Login realizado com sucesso' };
    }
    return { message: 'Credenciais inválidas' };
  }

  logout(req: any) {
    req.session.destroy();
    return { message: 'Logout realizado com sucesso' };
  }

  getProfile(req: any) {
    if (req.session.userId) {
      return { userId: req.session.userId };
    }
    return { message: 'Não autenticado' };
  }
}