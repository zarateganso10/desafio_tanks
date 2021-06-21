import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableProduto1624029919469 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'produtos',
        columns: [
          {
            isPrimary: true,
            name: 'id',
            type: 'integer',
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'nome_do_produto',
            type: 'varchar',
          },
          {
            name: 'fabricante',
            type: 'varchar',
          },
          {
            name: 'quantidade_em_estoque',
            type: 'int',
          },
          {
            name: 'valor',
            type: 'decimal(6,2)',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('produtos');
  }
}
