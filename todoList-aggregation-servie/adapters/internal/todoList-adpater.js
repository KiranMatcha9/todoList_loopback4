const express = require("express");
const router = express.Router();
const {createTodoListController,getTodoListController,getTodoListbyIdController,updateTodoListbyIdController,deleteTodoListbyIdController} = require('../../controller/todoList-controller');

router.route("/todolist")
      .post(createTodoListController)
      .get(getTodoListController);

router.route("/todolist/:id")
      .get(getTodoListbyIdController)
      .patch(updateTodoListbyIdController)
      .delete(deleteTodoListbyIdController);

module.exports = router;