import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class orders1619835924938 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'orders',
          columns:[
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
               name: "discount_coupon",
               type: "decimal",
               isNullable: true,
            },
            {
              name: 'status',
              type: 'integer',
              default: 0
            },
            {
              name: 'user_id',
              type: 'uuid'
            },
            {
              name: 'name',
              type: 'varchar',
              

            },
            {
              name: 'description',
              type: 'varchar',
              

            },
            {
              name: 'picture_url',
              type: 'varchar',
              isNullable: true

            },
            {
              name: 'quantity',
              type: 'numeric',
              isNullable: true

            },
            {
              name: 'val_unit',
              type: 'decimal',
              isNullable: true
            },
            {
              name: 'total_price',
              type: 'decimal',
              default: 0.0,
            },
            {
              name: 'state',
              type: 'varchar',
            },
            {
              name: 'city',
              type: 'varchar',
            },
            {
              name: 'CEP',
              type: 'numeric',
            },
            {
              name: 'district',
              type: ' varchar'
            },
            {
              name: 'road',
              type: ' varchar'
            },
            {
              name: 'number',
              type: 'numeric'
            },
            {
              name: 'complement',
              type: 'varchar',
              isNullable: true,
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
        })
      );
          
      await queryRunner.createForeignKey('orders', new TableForeignKey({
        name: 'OrdersUser',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
     }));


    }

    public async down(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.dropForeignKey('orders', 'OrdersUser');
      await queryRunner.dropTable('orders');
    }

}
