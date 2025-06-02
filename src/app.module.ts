import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdutosModule } from './produtos/produtos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const uri = configService.get<string>('MONGO_URI');
        if (!uri) {
          throw new Error('MONGO_URI não está definida no .env');
        }
        return {
          uri,
        };
      },
    }),
    ProdutosModule,
    UsuariosModule,
    AuthModule,
  ],
})
export class AppModule {}
