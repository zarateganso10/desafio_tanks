import { InputType } from '@nestjs/graphql';
import { IsNumber, IsInt, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateProdutoInput {
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  nome_do_produto: string;

  @IsString()
  fabricante: string;

  @IsInt()
  quantidade_em_estoque: number;

  @IsNumber()
  valor: number;
}
