import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize.client.js";

export class Role extends Model {}

Role.init(
  {
    name: {
        type: DataTypes.ENUM('admin', 'volunteer', 'fosterFamily', 'visitor'),
        allowNull: false,
        defaultValue: 'visitor'
    },
  },
  {
    sequelize,
    modelName: 'Role',
    tableName: 'Role'
  }
);