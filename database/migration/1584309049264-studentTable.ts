import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class studentTable1584309049264 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "student",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "email",
                    type: "varchar",
                },
                {
                    name: "career",
                    type: "int",
                },
                {
                    name: "birth_date",
                    type: "date",
                },
                {
                    name: "phone_number",
                    type: "varchar",
                },
                {
                    name: "country",
                    type: "int",
                },
                {
                    name: "city",
                    type: "varchar",
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("student");
    }

}
