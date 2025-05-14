import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  @Get()
  getHome(@Res() res: Response) {
    return res.sendFile(join(__dirname, '..', 'public', 'index.html'));
  }

  @Get('sobre')
  getSobre(@Res() res: Response) {
    return res.sendFile(join(__dirname, '..', 'public', 'sobre.html'));
  }

  @Get('contato')
  getContato(@Res() res: Response) {
    return res.sendFile(join(__dirname, '..', 'public', 'contato.html'));
  }
}