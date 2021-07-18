import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createProduct1626581793684 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'products',
      columns: [
        {
          name: 'id',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
          type: 'integer'
        },

        {
          name: 'name',
          type: 'varchar',
          isNullable: false
        },
        
        {
          name: 'material',
          type: 'varchar',
          isNullable: false
        },

        {
          name: 'classification',
          type: 'varchar',
          isNullable: false
        },

        {
          name: 'description',
          type: 'varchar',
          isNullable: false
        },

        {
          name: 'url',
          type: 'varchar',
          isNullable: false
        },

        {
          name: 'weight',
          type: 'varchar',
          isNullable: false,
        },


        {
          name: 'storeId',
          type: 'integer',
          isNullable: false,
        },


        {
          name: 'category',
          type: 'varchar',
          isNullable: false,
        },

        {
          name: 'price',
          type: 'integer',
          isNullable: false,
        }
      
      ],

      foreignKeys: [
        {
          name: 'storeid',
          columnNames: ['storeId'],
          referencedTableName: 'stores',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]
    }))
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
