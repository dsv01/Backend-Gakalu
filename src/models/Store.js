//Imports das estruturas para User
const DataType = require("sequelize");
const sequelize = require("../config/sequelize");

//Definição da tabela de Lojas do banco de dados
const Store = sequelize.define("Store",
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

    owner: 
    {
        type: DataType.STRING,
        allowNull: false
    },

    site: 
    {
        type: DataType.STRING
    },

    //Campo para o estilo da loja, isto é, roupas, brinquedos, etc.
    style: 
    {
        type: DataType.STRING
    },

    //Campo para o dia de registro do Usuário
    registrationDate: 
    {
        type: DataType.DATE,
        allowNull: false
    },

    //Campo para itens vendidos pela loja
    paymentMethods: 
    {
        type: DataType.STRING,
        allowNull: false
    }
},
{
    timestamps: false
})

Store.belongsTo(models.User);

module.exports = Store;