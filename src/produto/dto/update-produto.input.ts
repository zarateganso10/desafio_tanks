import { InputType } from '@nestjs/graphql';
import { IsNumber, IsInt, IsString, IsOptional } from 'class-validator';

@InputType()
export class UpdateProdutoInput {
  @IsString()
  @IsOptional()
  nome_do_produto?: string;

  @IsString()
  @IsOptional()
  fabricante?: string;

  @IsInt()
  @IsOptional()
  quantidade_em_estoque?: number;

  @IsNumber()
  @IsOptional()
  valor?: number;
}
