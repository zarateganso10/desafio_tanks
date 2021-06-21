import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'produtos' })
export class Produto {
  @PrimaryGeneratedColumn('increment')
  @Field(() => ID)
  id: number;

  @Column()
  nome_do_produto: string;

  @Column()
  fabricante: string;

  @Column('integer')
  quantidade_em_estoque: number;

  @Column('decimal')
  valor: number;
}
