import { IsString, IsNotEmpty, IsNumber, IsOptional, IsBoolean } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  codigo: string;

  @IsString()
  @IsNotEmpty()
  tipo: string;

  @IsNumber()
  preco: number;

  @IsNumber()
  quantidade: number;

  @IsBoolean()
  @IsOptional()
  ativo?: boolean;
}
