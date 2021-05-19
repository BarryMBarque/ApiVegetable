import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class productsCategory1619836000635 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'categoryProducts',
          columns:[
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: "uuid",
              default: 'uuid_generate_v4()',
            },
            {
              name: 'name',
              type: 'varchar'
            },
            {
              name: 'createdAt',
              type: 'timestamp',
              default: 'now()'
             
            },
            {
              name: 'updatedAt',
              type: 'timestamp',
              default: 'now()'
            }
            
          ]
        }));
        await queryRunner.createForeignKey('products', new TableForeignKey({
          name: 'ProductsCategoryProduct',
          columnNames: ['categoryProduct_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'categoryProducts',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE'
       }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('products', 'ProductsCategoryProduct');
      await queryRunner.dropTable('categoryProducts');
    }

}
