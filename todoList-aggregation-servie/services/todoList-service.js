const todoListService = require("../adapters/external/todoList-service-adapter");

const customError= require('../errors');

const createTodoList = async (reqObj) => {
    return await todoListService.createTodoList(reqObj);
}

const getTodoList = async () => {
    return await todoListService.getTodoList();
}

const getTodoListbyId = async (listId) => {
    return await todoListService.getTodoListbyId(listId);
}

const updateTodoListbyId = async (listId,reqObj) => {
    return await todoListService.updateTodoListbyId(listId,reqObj);
}
const deleteTodoListbyId = async (listId) => {
    return await todoListService.deleteTodoListbyId(listId);
}

module.exports = {createTodoList,getTodoList,getTodoListbyId,deleteTodoListbyId,updateTodoListbyId};