// const { response } = require("express");
const User = require("../models/User");
const Game = require("../models/Game");
const Store = require("../models/Store");

//Função para criar uma instancia na tabela de Usuário
const create = async(request, response) =>
{
    try
    {
        const user = await User.create(request.body);
        return response.status(201).json({message:"Usuário Cadastrado com sucesso", user:user});
    }
    catch(error)
    {
        return response.status(500).json({Error:error});
    }
}

//Função para pegar todos os usuários da tabela
const index = async(request, response) =>
{
    try
    {
        const users = await User.findAll();
        return response.status(200).json({users});
    }
    catch(error)
    {
        return response.status(500).json({Error:error});
    }
}

//Função para pegar um usuário especifico pelo seu id
const show =  async(request, response) =>
{
    const { id } = request.params;
    try
    {
        const user = await User.findByPk(id);
        return response.status(200).json({user});
    }
    catch(error)
    {
        return response.status(500).json({Error:error});
    }
}

//Função para editar um usuário especifico
const update = async(request, response) =>
{
    const {id} = request.params;
    try
    {
        const [updated] = await User.update(request.body, {where: {id:id}});
        if(updated)
        {
            const user = await User.findByPk(id);
            return response.status(200).send(user);
        }
        throw new Error();
    }
    catch(error)
    {
        return response.status(500).json("Usuário não encontrado")
    }
}

//Função para deletar usuário
const destroy = async(request, response) =>
{
    const {id} = request.params;
    try
    {
        const deleted = await User.destroy({where : {id:id}})
        if(deleted)
            return response.status(200).json("Usuário deletado com sucesso")
        throw new Error();
    }
    catch(error)
    {
        return response.status(500).json("Usuário não encontrado")
    }
}

//Função para construir relação de usuario com os jogos
const addRelationGame = async(request, response) =>
{
    const {id} = request.params;
    try
    {
        const user = await User.findByPk(id);
        const game = await Game.findByPk(request.body.GameId);
        await user.setGame(game);
        return response.status(200).json(user);
    }
    catch(error)
    {
        return response.status(500).json({error})
    }
}

//Função para destruir a relação de usuario com jogos
const removeRelationGame = async(request, response) =>
{
    const {id} = request.params;
    try
    {
        const user = await User.findByPk(id);
        await user.setGame(null);
        return response.status(200).json(user);
    }
    catch(error)
    {
        return response.status(500).json({error})
    }
}

//Função para construir relação de usuario com as lojas
const addRelationStore = async(request, response) =>
{
    const {id} = request.params;
    try
    {
        const user = await User.findByPk(id);
        const store = await Store.findByPk(request.body.StoreId);
        await user.setStore(store);
        return response.status(200).json(user);
    }
    catch(error)
    {
        return response.status(500).json({error})
    }
}

//Função para destruir a relação de usuario com as lojas
const removeRelationStore = async(request, response) =>
{
    const {id} = request.params;
    try
    {
        const user = await User.findByPk(id);
        await user.setStore(null);
        return response.status(200).json(user);
    }
    catch(error)
    {
        return response.status(500).json({error})
    }
}

//Exportando modulos
module.exports = 
{
    index,
    show,
    create,
    update,
    destroy,
    addRelationGame,
    removeRelationGame,
    addRelationStore,
    removeRelationStore
}