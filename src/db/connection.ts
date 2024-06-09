import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Replace this approach with a typesafe .config file
const db: string = process.env.DB ?? "moodtracker_development";
const db_user: string = process.env.DB_USER ?? "user";
const db_password: string = process.env.DB_PASSWORD ?? "";
const db_port: number = Number(process.env.DB_PORT) ?? 5432;


const sequelizeConnection: Sequelize = new Sequelize(db, db_user, db_password, {
  host: process.env.HOST,
  dialect: "postgres",
  port: db_port 
});

export default sequelizeConnection;



