import { DataTypes } from "sequelize";
import { sequelize } from "../db";

export const Service = sequelize.define(
  "service",
  {
    serviceID: {
      type: DataTypes.INTEGER,
    },
    serviceName: {
      type: DataTypes.STRING,
    },
    serviceDescription: {
      type: DataTypes.STRING,
    }
  },
  {
    tableName: 'service',
    timestamps: false,
  }
);

console.log(Service === sequelize.models.Service); // true
