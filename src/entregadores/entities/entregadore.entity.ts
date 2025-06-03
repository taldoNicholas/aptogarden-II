import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EntregadorDocument = Entregador & Document;

@Schema()
export class Entregador {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  celular: string;

  @Prop({ required: true, unique: true })
  cpf: string;

  @Prop({ required: true })
  placa: string;

  @Prop({ required: true })
  modelo: string;
}

export const EntregadorSchema = SchemaFactory.createForClass(Entregador);
