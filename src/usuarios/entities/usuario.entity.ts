import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsuarioDocument = Usuario & Document;

@Schema()
export class Usuario {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  senha: string;

  @Prop({ required: true, unique: true })
  cpf: string;

  @Prop({ default: 'usuario' }) // ou 'admin'
  role: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
