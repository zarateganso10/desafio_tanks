import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoResolver } from './produto.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from '../models/produto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  providers: [ProdutoService, ProdutoResolver],
})
export class ProdutoModule {}
