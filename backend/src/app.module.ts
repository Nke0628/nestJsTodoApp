import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './data-source';

@Module({
  imports: [ItemsModule, TypeOrmModule.forRoot(AppDataSource.options)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
