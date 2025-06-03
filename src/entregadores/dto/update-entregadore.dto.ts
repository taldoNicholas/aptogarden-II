import { PartialType } from '@nestjs/mapped-types';
import { CreateEntregadoreDto } from './create-entregadore.dto';

export class UpdateEntregadoreDto extends PartialType(CreateEntregadoreDto) {}
