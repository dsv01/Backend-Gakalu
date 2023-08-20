// const { response } = require("express");
const Game = require("../models/Game");

//Função para criar uma instancia na tabela de jogos
const create = async(request, response) =>
{
    try
    {
        const game = await Game.create(request.body);
        return response.status(201).json({message:"Jogo Cadastrado com sucesso", game:game});
    }
    catch(error)
    {
        return response.status(500).json({Error:error});
    }
}

//Função para pegar todos os jogos da tabela
const index = async(request, response) =>
{
    try
    {
        const games = await Game.findAll();
        return response.status(200).json({games});
    }
    catch(error)
    {
        return response.status(500).json({Error:error});
    }
}

//Função para pegar um jogo especifico pelo seu id
const show =  async(request, response) =>
{
    const { id } = request.params;
    try
    {
        const game = await Game.findByPk(id);
        return response.status(200).json({game});
    }
    catch(error)
    {
        return response.status(500).json({Error:error});
    }
}

//Função para editar um jogo especifico
const update = async(request, response) =>
{
    const { id } = request.params;
    try
    {
        const [updated] = await Game.update(request.body, {where: {id:id}});
        if(updated)
        {
            const game = await Game.findByPk(id);
            return response.status(200).send(game);
        }
        throw new Error();
    }
    catch(error)
    {
        return response.status(500).json("Jogo não encontrado")
    }
}

//Função para deletar jogo
const destroy = async(request, response) =>
{
    const {id} = request.params;
    try
    {
        const deleted = await Game.destroy({where : {id:id}})
        if(deleted)
            return response.status(200).json("Jogo deletado com sucesso")
        throw new Error();
    }
    catch(error)
    {
        return response.status(500).json("Jogo não encontrado")
    }
}

//Exportando modulos
module.exports = 
{
    index,
    show,
    create,
    update,
    destroy
}