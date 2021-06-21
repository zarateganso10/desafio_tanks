import { Test, TestingModule } from '@nestjs/testing';
import { ProdutoResolver } from '../../src/produto/produto.resolver';

describe('ProdutoResolver', () => {
  let resolver: ProdutoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdutoResolver],
    }).compile();

    resolver = module.get<ProdutoResolver>(ProdutoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
