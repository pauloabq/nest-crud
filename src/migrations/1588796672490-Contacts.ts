import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Contacts1588796672490 implements MigrationInterface {
    
    private contactTable = new Table({
        name: 'contacts',
        columns: [
            {
                name: 'id',
                type: 'INTEGER',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'firstname',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'lastname',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'email',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'phone',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'city',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'country',
                type: 'varchar',
                length: '255',
                isNullable: false,
            }],
        });
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(this.contactTable);        
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(this.contactTable); 
    }

}
