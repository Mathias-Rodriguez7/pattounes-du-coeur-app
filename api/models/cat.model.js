import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize.client.js";

export class Cats extends Model {}

Cats.init(
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false, // le nom du chat est obligatoire
    },
    sex: {
      type: DataTypes.ENUM(["male", "female"]),
      allowNull: false, // un chat doit avoir un genre
      defaultValue: "male",
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false, // la date de naissance du chat est obligatoire
    },
    status: {
      type: DataTypes.ENUM([
        "disponible",
        "adopté",
        "réservé",
        "en soins",
        "décédé",
        "en socialisation",
      ]),
      allowNull: false, // le statut du chat est obligatoire
      defaultValue: "en socialisation",
    },
    sterilized: {
      type: DataTypes.BOOLEAN,
      allowNull: false, // le statut de stérilisation est obligatoire
      defaultValue: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true, // la description du chat est optionnelle
    },
    entryDate: {
      type: DataTypes.DATE,
      allowNull: false, // la date d'entrée du chat est obligatoire
    },
    okDogs: {
  type: DataTypes.ENUM('YES', 'NO', 'UNKNOWN'),
  allowNull: false,
  defaultValue: 'UNKNOWN'
    },

    okChildren: {
      type: DataTypes.ENUM('YES', 'NO', 'UNKNOWN'),
      allowNull: false,
      defaultValue: 'UNKNOWN'
    },

    okCats: {
      type: DataTypes.ENUM('YES', 'NO', 'UNKNOWN'),
      allowNull: false,
      defaultValue: 'UNKNOWN'
    },

      // Besoins spécifiques
    needsGarden: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },

    housingType: {
      type: DataTypes.ENUM('APARTMENT', 'HOUSE', 'BOTH'),
      allowNull: false,
      defaultValue: 'BOTH'
    },

    requiredSpace: {
      type: DataTypes.ENUM('SMALL', 'MEDIUM', 'LARGE'),
      allowNull: false,
      defaultValue: 'MEDIUM'
    },

    presenceNeed: {
      type: DataTypes.ENUM('LOW', 'MEDIUM', 'HIGH'),
      allowNull: false,
      defaultValue: 'MEDIUM'
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Cats", // We need to choose the model name
    tableName: "cats"
  },
);