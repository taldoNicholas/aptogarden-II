import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProdutoDocument = Produto & Document;

@Schema()
export class Produto {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true, unique: true })
  codigo: string;

  @Prop({ required: true })
  tipo: string;

  @Prop({ required: true })
  preco: number;

  @Prop({ required: true })
  quantidade: number;

  @Prop({ default: true })
  ativo: boolean;
}

export const ProdutoSchema = SchemaFactory.createForClass(Produto);
