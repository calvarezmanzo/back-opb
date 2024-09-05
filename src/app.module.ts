import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { ReportModule } from './modules/report/report.module';
import { TypeOrmConfigService } from './config/TypeOrmConfigService';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, //Para no tener que importar siempre el ConfigModule en otros módulos de Nest
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    AuthModule, 
    UserModule, 
    ReportModule,
    DatabaseModule
      
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
