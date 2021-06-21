import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateProdutoInput } from './dto/create-produto.input';
import { Produto } from '../models/produto.entity';
import { ProdutoService } from './produto.service';
import { UpdateProdutoInput } from './dto/update-produto.input';

@Resolver()
export class ProdutoResolver {
  constructor(private produtoService: ProdutoService) {}

  @Query(() => [Produto])
  async buscarProdutos(): Promise<Produto[]> {
    const produtos = await this.produtoService.buscarProdutos();

    return produtos;
  }

  @Query(() => Produto)
  async buscarProdutoPorId(@Args('id') id: number): Promise<Produto> {
    const produto = await this.produtoService.buscarProdutoPorId(id);

    return produto;
  }

  @Query(() => Number)
  async quantidadeProdutos(): Promise<number> {
    const quantidade = await this.produtoService.quantidadeProdutos();

    return quantidade;
  }

  @Query(() => Produto)
  async produtoMenorEstoque(): Promise<Produto> {
    const produto = await this.produtoService.produtoMenorEstoque();

    return produto;
  }

  @Query(() => Produto)
  async produtoMaiorEstoque(): Promise<Produto> {
    const produto = await this.produtoService.produtoMaiorEstoque();

    return produto;
  }

  @Query(() => [Produto])
  async produtosSemEstoque(): Promise<Produto[]> {
    const produto = await this.produtoService.produtosSemEstoque();

    return produto;
  }

  @Mutation(() => Produto)
  async adicionarProduto(
    @Args('data') data: CreateProdutoInput,
  ): Promise<Produto> {
    const produto = await this.produtoService.adicionarProduto(data);
    return produto;
  }

  @Mutation(() => Produto)
  async alterarProduto(
    @Args('id') id: number,
    @Args('data') data: UpdateProdutoInput
  ):Promise<Produto> {
    const produto = this.produtoService.alterarProduto(id, data);

    return produto;
  }

  @Mutation(() => Boolean)
  async deletarProduto(
    @Args('id') id: number
  ){
    const deleted = await this.produtoService.deletarProduto(id);
    return deleted;
  }
}
