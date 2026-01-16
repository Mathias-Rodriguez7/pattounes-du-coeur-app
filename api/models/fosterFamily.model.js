const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

export class FosterFamily extends Model {}

FosterFamily.init(
    {
        firstname: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        lastname: { 
            type: DataTypes.STRING, 
            allowNull: false
        },
        email: { 
            type: DataTypes.STRING, 
            allowNull: false, 
            unique: true 
        },
        phone: { 
            type: DataTypes.NUMBERIC, 
            allowNull: false 
        },
        address: { 
            type: DataTypes.TEXT 
        },
        decription: {
            type: DataTypes.TEXT
        },
        animals: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        convey: {
            type: DataTypes.ENUM('YES', 'NO', 'autonomous'),
            allowNull: false,
            defaultValue: 'autonomous'
        },
        isActive: { 
            type: DataTypes.BOOLEAN, 
            defaultValue: true 
        },
    },
    {
        sequelize,
        modelName: 'FosterFamily',
        tableName: 'FosterFamily'
    },
);