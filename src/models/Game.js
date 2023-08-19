//Imports das estruturas para User
const DataType = require("sequelize");
const sequelize = require("../config/sequelize");

//Definição da tabela de Jogos do banco de dados
const Game = sequelize.define("Game",
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

    author: 
    {
        type: DataType.STRING,
        allowNull: false
    },

    size: 
    {
        type: DataType.INTEGER,
        allowNull: false
    },

    //Campo para a data de lançamento do jogo
    releaseDate: 
    {
        type: DataType.DATE,
        allowNull: false
    },

    //Campo para a descrição do jogo
    description: 
    {
        type: DataType.STRING,
        allowNull: false
    },

    //Campo para o gênero do jogo
    genre: 
    {
        type: DataType.STRING,
        allowNull: false
    },

    //Campo para a versão do jogo
    version: 
    {
        type: DataType.STRING,
        allowNull: false
    }
},
{
    timestamps: false
})

Game.belongsTo(models.User);

module.exports = Game