import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CreateUsers1619475604763 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query( `CREATE extension IF NOT EXISTS "uuid-ossp"`);
      await queryRunner.createTable(
        new Table({
          name:  'users',
          columns:[
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default:'uuid_generate_v4()',
              
            },
            {
              name: 'name',
              type: 'varchar',

            },
            {
              name: 'cpf',
              type: 'numeric',
              isUnique: true,
              
            },
            {
              name: 'phoneNumber',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'email',
              type: 'varchar',
              isUnique: true
              
            },
            {
              name: 'password',
              type: 'varchar',
              
            },
            {
              name: 'avatar',
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
     
      
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
      
      await queryRunner.dropTable('users');
    }

}
