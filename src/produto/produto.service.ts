import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProdutoInput } from './dto/create-produto.input';
import { Produto } from '../models/produto.entity';
import { UpdateProdutoInput } from './dto/update-produto.input';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
  ) {}

  async adicionarProduto(data: CreateProdutoInput): Promise<Produto> {
    const produto = this.produtoRepository.create(data);
    const produtoSaved = await this.produtoRepository.save(produto);

    if (!produtoSaved) {
      throw new InternalServerErrorException('Problema para criar um usuário');
    }

    return produtoSaved;
  }

  async buscarProdutos(): Promise<Produto[]> {
    const produtos = await this.produtoRepository.find();

    return produtos;
  }

  async buscarProdutoPorId(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOne(id);

    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }

    return produto;
  }

  async alterarProduto(id: number, data: UpdateProdutoInput): Promise<Produto> {
    const produto = await this.buscarProdutoPorId(id);

    await this.produtoRepository.update(produto, {...data});

    const produtoUpdated = this.produtoRepository.create({...produto, ...data});

    return  produtoUpdated;
  }

  async deletarProduto(id: number): Promise<boolean> {
    const produto = await this.buscarProdutoPorId(id);

    const deleted = await this.produtoRepository.delete(produto);

    if(deleted){
      return true;
    }else{
      return false;
    }
  }

  async quantidadeProdutos(): Promise<number> {
    const quantidade = await this.produtoRepository.count();
    return quantidade;
  }

  async produtoMenorEstoque(): Promise<Produto> {
    const produto = await this.produtoRepository.createQueryBuilder("produtos")
      .select([
        "produtos.id", 
        "produtos.nome_do_produto", 
        "produtos.fabricante",
        "MIN(produtos.quantidade_em_estoque)",
        "produtos.quantidade_em_estoque",
        "produtos.valor"
      ])
      .getOne();

    return produto;
  }

  async produtoMaiorEstoque(): Promise<Produto> {
    const produto = await this.produtoRepository.createQueryBuilder("produtos")
      .select([
        "produtos.id", 
        "produtos.nome_do_produto", 
        "produtos.fabricante",
        "MAX(produtos.quantidade_em_estoque)",
        "produtos.quantidade_em_estoque",
        "produtos.valor"
      ])
      .getOne();

    return produto;
  }

  async produtosSemEstoque(): Promise<Produto[]> {
    const produto = await this.produtoRepository.createQueryBuilder("produtos")
      .where("produtos.quantidade_em_estoque < 5")
      .getMany();

    return produto;
  }
}
