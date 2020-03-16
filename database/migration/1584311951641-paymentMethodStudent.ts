import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class paymentMethodStudent1584311951641 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.addColumn('student', {
            name: "payment_method",
            type: "int",
            isNullable: false,
            isGenerated: false
        } as TableColumn)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropColumn('student', 'payment_method')
    }

}
