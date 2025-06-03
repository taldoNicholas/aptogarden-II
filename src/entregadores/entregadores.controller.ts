import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntregadoresService } from './entregadores.service';
import { CreateEntregadoreDto } from './dto/create-entregadore.dto';
import { UpdateEntregadoreDto } from './dto/update-entregadore.dto';

@Controller('entregadores')
export class EntregadoresController {
  constructor(private readonly service: EntregadoresService) {}

  @Post()
  create(@Body() dto: CreateEntregadoreDto) {
    console.log('REQ BODY:', dto);
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateEntregadoreDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
