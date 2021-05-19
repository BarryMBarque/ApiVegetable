import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class adresses1619835882125 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query( `CREATE extension IF NOT EXISTS "uuid-ossp"`);
      await queryRunner.createTable(
        new Table({
          name: 'adresses',
          columns:[
            {
              name: 'id',
               type: 'uuid',
               isPrimary: true,
               generationStrategy: "uuid",
               default:'uuid_generate_v4()',
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
              name: 'user_id',
              type: 'uuid',
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
      await queryRunner.createForeignKey('adresses', new TableForeignKey({
        name: 'AdressesUser',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
     }));
  //    await queryRunner.createForeignKey('adresses', new TableForeignKey({
  //     name: 'AdressesOrder',
  //     columnNames: ['order_id'],
  //     referencedColumnNames: ['id'],
  //     referencedTableName: 'orders',
  //     onDelete: 'SET NULL',
  //     onUpdate: 'CASCADE'
  //  }));
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      //await queryRunner.dropForeignKey('adresses', 'AdressesOrder');
      await queryRunner.dropForeignKey('adresses', 'AdressesUser');
      await queryRunner.dropTable('adresses');
    }

}
