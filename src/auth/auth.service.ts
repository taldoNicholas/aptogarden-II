import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UsuariosService } from '../usuarios/usuarios.service';

@Injectable()
export class AuthService {
  constructor(
    private usuariosService: UsuariosService,
    private jwtService: JwtService,
  ) {}

    async login(nome: string, senha: string) {
    const usuario = await this.usuariosService.findOneByUsername(nome);
    if (!usuario) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    const isPasswordValid = await bcrypt.compare(senha, usuario.senha);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Senha incorreta');
    }

    const payload = { nome: usuario.nome, sub: usuario._id };
    const accessToken = this.jwtService.sign(payload);

    return {
      accessToken,
      role: usuario.role,
      nome: usuario.nome,
      email: usuario.email,
    };
  }
}
