// const { response } = require("express");
const Store = require("../models/Store");

//Função para criar uma instancia na tabela de Loja
const create = async(request, response) =>
{
    try
    {
        const store = await Store.create(request.body);
        return response.status(201).json({message:"Loja Cadastrada com sucesso", store:store});
    }
    catch(error)
    {
        return response.status(500).json({Error:error});
    }
}

//Função para pegar todos as lojas da tabela
const index = async(request, response) =>
{
    try
    {
        const stores = await Store.findAll();
        return response.status(200).json({stores});
    }
    catch(error)
    {
        return response.status(500).json({Error:error});
    }
}

//Função para pegar umaLojas especifica pelo seu id
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

//Função para editar uma loja especifica
const update = async(request, response) =>
{
    const { id } = request.params;
    try
    {
        const [updated] = await Store.update(request.body, {where: {id:id}});
        if(updated)
        {
            const store = await Store.findByPk(id);
            return response.status(200).send(store);
        }
        throw new Error();
    }
    catch(error)
    {
        return response.status(500).json("Loja não encontrado")
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

//Exportando modulos
module.exports = 
{
    index,
    show,
    create,
    update,
    destroy
}