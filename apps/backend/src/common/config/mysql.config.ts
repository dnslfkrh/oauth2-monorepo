import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from "./env.config";
import { User } from "src/entity/user.entity";

export const mysqlConfig: TypeOrmModuleOptions = {
    type: "mysql",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: true,
    dropSchema: true,
    entities: [User]
}
