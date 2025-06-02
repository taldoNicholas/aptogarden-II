import { IsEmail, IsNotEmpty, IsOptional, Length } from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  nome: string;

  @IsEmail({}, { message: 'Email inválido.' })
  email: string;

  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  senha: string;

  @IsNotEmpty({ message: 'O CPF é obrigatório.' })
  @Length(11, 11, { message: 'O CPF deve conter exatamente 11 dígitos.' })
  cpf: string;

  @IsOptional()
  role?: string;
}
