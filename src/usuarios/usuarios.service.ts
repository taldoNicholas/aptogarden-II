import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario, UsuarioDocument } from './entities/usuario.entity';
import { MongoServerError } from 'mongodb';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario.name)
    private usuarioModel: Model<UsuarioDocument>,
  ) {}

 async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
  // Checa se já existe um usuário com o mesmo nome
  const usuarioExistente = await this.usuarioModel.findOne({ nome: createUsuarioDto.nome });

  if (usuarioExistente) {
    throw new Error('Usuário já existe');
  }

  // Faz o hash da senha aqui
  const hashedPassword = await bcrypt.hash(createUsuarioDto.senha, 10);

  try {
    // Cria o usuário com a senha criptografada
    return await this.usuarioModel.create({
      ...createUsuarioDto,
      senha: hashedPassword,
    });
  } catch (error) {
    if (error instanceof MongoServerError && error.code === 11000) {
      const campoDuplicado = Object.keys(error.keyPattern)[0];

      const nomesCampos: Record<string, string> = {
        email: 'E-mail',
        cpf: 'CPF',
        nome: 'Nome',
        username: 'Nome de usuário',
      };

      const nomeAmigavel = nomesCampos[campoDuplicado] || campoDuplicado;
      throw new Error(`${nomeAmigavel} já cadastrado`);
    }
    throw error;
  }
}

 async findOneByUsername(nome: string) {
  return this.usuarioModel.findOne({ nome }).exec();
}

  findAll() {
    return this.usuarioModel.find().exec();
  }

  findOne(id: string) {
    return this.usuarioModel.findById(id).exec();
  }

  update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioModel.findByIdAndUpdate(id, updateUsuarioDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.usuarioModel.findByIdAndDelete(id);
  }
}
