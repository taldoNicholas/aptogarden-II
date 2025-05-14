import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  @Get('header')
  getHeader(@Res() res: Response) {
    return res.sendFile(join(__dirname, '..', 'public', 'header.html'));
  }

  @Get('footer')
  getFooter(@Res() res: Response) {
    return res.sendFile(join(__dirname, '..', 'public', 'footer.html'));
  }
  
  @Get('index')
  getHome(@Res() res: Response) {
    return res.sendFile(join(__dirname, '..', 'public', 'index.html'));
  }

  @Get('sobre')
  getSobre(@Res() res: Response) {
    return res.sendFile(join(__dirname, '..', 'public', 'sobre-nos.html'));
  }

  @Get('perfilCliente')
  getperfilCliente(@Res() res: Response) {
    return res.sendFile(join(__dirname, '..', 'public', 'perfilCliente.html'));
  }

  @Get('perfilAdministrador')
  getperfilAdministrador(@Res() res: Response) {
    return res.sendFile(join(__dirname, '..', 'public', 'perfilAdministrador.html'));
  }

  @Get('delivery')
  getDelivery(@Res() res: Response) {
    return res.sendFile(join(__dirname, '..', 'public', 'delivery.html'));
  }

  @Get('controleestoque')
  getControleestoque(@Res() res: Response) {
    return res.sendFile(join(__dirname, '..', 'public', 'controleestoque.html'));
  }

}