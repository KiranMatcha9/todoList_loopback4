import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {Filter, FilterExcludingWhere, repository, Where} from '@loopback/repository';
import {TodoList} from '../models';
import {TodoListRepository} from '../repositories';


@injectable({scope: BindingScope.TRANSIENT})
export class TodolistService {
  constructor(
    /* Add @inject to inject parameters */
    @repository(TodoListRepository)
    public todoListRepository: TodoListRepository,
  ) { }

  /*
   * Add service methods here
   */

  create(todoList: TodoList) {
    return this.todoListRepository.create(todoList)
  }

  count(where?: Where<TodoList>) {
    return this.todoListRepository.count(where)
  }

  find(filter?: Filter<TodoList>) {
    return this.todoListRepository.find(filter)
  }

  findById(id: string, filter?: FilterExcludingWhere<TodoList>) {
    return this.todoListRepository.findById(id, filter)
  }

  updateById(id: string, todoList: TodoList) {
    return this.todoListRepository.updateById(id, todoList)
  }

  deleteById(id: string) {
    return this.todoListRepository.deleteById(id)
  }
}
