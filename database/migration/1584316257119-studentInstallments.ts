import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class studentInstallments1584316257119 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.addColumn('student', {
            name: "installments",
            type: "int",
            isNullable: false,
            isGenerated: false
        } as TableColumn)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropColumn('student', 'installments')
    }

}
