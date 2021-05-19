import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class carts1620065115523 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.createTable(
        new Table({
          name: 'carts',
          columns:[
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
           
            {
              name: 'user_id',
              type: 'uuid',
             
            },
            {
              name: 'product_id',
              type: 'uuid',
              
            },
            {
              name: 'order_id',
              type: 'uuid',
              isNullable: true
              
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
              isNullable: true
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
          
      await queryRunner.createForeignKey('carts', new TableForeignKey({
        name: 'CartsUser',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
     }));
     await queryRunner.createForeignKey('carts', new TableForeignKey({
      name: 'cartProducts',
      columnNames: ['product_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'products',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
   }));
   await queryRunner.createForeignKey('carts', new TableForeignKey({
    name: 'CartsOrder',
    columnNames: ['order_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'orders',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
 }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('carts', 'CartsOrder');
      await queryRunner.dropForeignKey('carts', 'cartProducts');
      await queryRunner.dropForeignKey('carts', 'cartsUser');
      await queryRunner.dropTable('carts');
    }

}
