const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

export class User extends Model {}

User.init(
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
    isActive: { 
        type: DataTypes.BOOLEAN, 
        defaultValue: true 
    }
    }, 
    {
        sequelize,
        modelName: 'User',
        tableName: 'USER'
    }
);


