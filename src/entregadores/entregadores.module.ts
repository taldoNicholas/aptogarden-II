import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EntregadoresService } from './entregadores.service';
import { EntregadoresController } from './entregadores.controller';
import { Entregador, EntregadorSchema } from './entities/entregadore.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Entregador.name, schema: EntregadorSchema }])
  ],
  controllers: [EntregadoresController],
  providers: [EntregadoresService]
})
export class EntregadoresModule {}
