import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize.client.js";

export class News extends Model {}

News.init(
  {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    authorId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    publishedAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
  },
  {
    sequelize,
    modelName: 'News',
    tableName: 'News'
  }
);