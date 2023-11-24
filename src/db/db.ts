import { Sequelize } from "sequelize";
import { DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } from "../utils/constants";


// Option 1: Passing a connection URI
// export const sequelize = new Sequelize(
//   "mysql://root:hola123$@101.44.1.199:3306/rds-salud"
// );

export const sequelize = new Sequelize("hackaton", "root", "hola123$", {
  host: "101.44.1.199",
  dialect: "mysql",
  port: 3306,
});

//export const sequelize = new Sequelize("hackaton", DB_USERNAME, DB_PASSWORD, {
//  host: DB_HOST,
//  dialect: "mysql",
//  port: DB_PORT,
//});


try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
