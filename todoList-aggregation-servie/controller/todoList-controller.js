// const customError= require('../errors');
const ResourceNotFound = require('../errors/resourceNotFound');
const validationError = require('../errors/validationError');
const todoListService = require('../services/todoList-service.js');


const createTodoListController = async (req,res,next) => {
    let reqObj = req.body;

    // try {
        if(!reqObj.title){
            throw new validationError({ title: 'required' });
        }
           
        if(!reqObj.status){
            throw new validationError({status:"provide status"});
        }
    // } catch (error) {
    //   return next(error);
    // };
    
    let response = await todoListService.createTodoList(reqObj);
    console.log("res in controller",res);
    // return res.status(201).json({response:response});
    return res.json({response:response});
}

const getTodoListController = async (req,res) => {
    let response = await todoListService.getTodoList();
    return res.status(200).json({response:response})
}

const getTodoListbyIdController = async (req,res,next) => {
    let listId = req.params.id;
    let response = await todoListService.getTodoListbyId(listId);
    // try {
        if(!response){
            throw new ResourceNotFound(`There is no data with id ${listId}`);
        }
    // } catch (error) {
    //     return next(error);
    // }

    return res.status(200).json({response:response});
}

const updateTodoListbyIdController = async (req,res) => {
    const listId = req.params.id;
    const reqObj = req.body;
    if(!reqObj.title){
        throw new validationError({ title: 'required' });
    }
       
    if(!reqObj.status){
        throw new validationError("provide status");
    }
    let response = await todoListService.updateTodoListbyId(listId,reqObj);
    // if(!response){
    //     throw new ResourceNotFound(`There is no data with id ${listId}`);
    // }
    return res.status(200).json({response:response});
}

const deleteTodoListbyIdController = async (req,res) => {
    const  listId = req.params.id;
    let response = await todoListService.deleteTodoListbyId(listId);
    
    // if(!response){
    //     throw new ResourceNotFound(`There is no data with id ${listId}`);
    // }
    return res.status(200).json({response:response});

}

module.exports = {
    createTodoListController,
    getTodoListController,
    getTodoListbyIdController,
    updateTodoListbyIdController,
    deleteTodoListbyIdController
}