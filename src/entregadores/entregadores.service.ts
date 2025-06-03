import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEntregadoreDto } from './dto/create-entregadore.dto';
import { UpdateEntregadoreDto } from './dto/update-entregadore.dto';
import { Entregador, EntregadorDocument } from './entities/entregadore.entity';

@Injectable()
export class EntregadoresService {
  constructor(
    @InjectModel(Entregador.name)
    private entregadorModel: Model<EntregadorDocument>,
  ) {}

  create(dto: CreateEntregadoreDto) {
    return this.entregadorModel.create(dto);
  }

  findAll() {
    return this.entregadorModel.find().exec();
  }

  findOne(id: string) {
    return this.entregadorModel.findById(id).exec();
  }

  update(id: string, dto: UpdateEntregadoreDto) {
    return this.entregadorModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  remove(id: string) {
    return this.entregadorModel.findByIdAndDelete(id).exec();
  }
}
