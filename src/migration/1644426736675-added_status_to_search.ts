import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";
import SearchStates from "../enums/searchStates.enum";
import Search from "../entity/Search";

export class addedStatusToSearch1644426736675 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns("search", [
            new TableColumn({
                name: "status",
                type: 'enum',
                enum: Object.values(SearchStates),
                default: `'${SearchStates.active}'`,
                isNullable: false
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns("search", ["status"]);
    }

}
