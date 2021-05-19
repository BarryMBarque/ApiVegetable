import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class products1619835968330 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'products',
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
              type: 'varchar',
            },
            {
              name: "picture",
              type: "varchar",
            },
            {
              name: "quantity",
              type: "numeric" 

            },
            {
              name: 'description',
              type: 'varchar'
            },
            {
              name: 'price',
              type: 'decimal',
            },
            {
              name: 'discount_coupon',
              type: 'decimal',
              isNullable: true,
            },
            {
              name: "final_price",
              type: "decimal",

            },
            {
              name: 'categoryProduct_id',
              type: 'uuid'
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
     
     


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('products');
    }

}
