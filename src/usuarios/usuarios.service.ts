import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario, UsuarioDocument } from './entities/usuario.entity';
import { MongoServerError } from 'mongodb';

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

  try {
    return await this.usuarioModel.create(createUsuarioDto);
  } catch (error) {
    if (error instanceof MongoServerError && error.code === 11000) {
      const campoDuplicado = Object.keys(error.keyPattern)[0];

      // Mapa de nomes personalizados
      const nomesCampos: Record<string, string> = {
        email: 'E-mail',
        cpf: 'CPF',
        nome: 'Nome',
        username: 'Nome de usuário',
        // adicione mais conforme seus campos únicos
      };

      const nomeAmigavel = nomesCampos[campoDuplicado] || campoDuplicado;
      throw new Error(`${nomeAmigavel} já cadastrado`);
    }
    throw error;
  }
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
