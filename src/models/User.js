//Imports das estruturas para User
const DataType = require("sequelize");
const sequelize = require("../config/sequelize");

//Definição da tabela de Usuário do banco de dados
const User = sequelize.define("User",
{
    id:
    {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name:
    {
        type: DataType.STRING,
        allowNull: false
    },

    email: 
    {
        type: DataType.STRING,
        allowNull: false
    },

    password: 
    {
        type: DataType.STRING,
        allowNull: false
    },

    //Campo para os pontos de fidelidade do Usuário 
    loyaltyPoints: 
    {
        type: DataType.INTEGER,
        allowNull: false
    },

    //Campo para o dia de registro do Usuário
    registrationDate: 
    {
        type: DataType.DATE,
        allowNull: false
    },

    //Campo para os jogos preferidos do Usuário
    favoriteGames: 
    {
        type: DataType.DATE
    }
},
{
    timestamps: false
});


User.associate = function(models)
{
    User.hasMany(models.Game);
    User.hasMany(models.Store);
}

module.exports = User
