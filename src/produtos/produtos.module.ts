import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { Produto, ProdutoSchema } from './entities/produto.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Produto.name, schema: ProdutoSchema }, // <-- Isso registra o schema
    ]),
  ],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutosModule {}
