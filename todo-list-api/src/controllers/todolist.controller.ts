import {inject} from '@loopback/core';
import {Count, CountSchema, Filter, FilterExcludingWhere, Where} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef, param, patch, post, requestBody,
  response
} from '@loopback/rest';
import {TodoList} from '../models';
import {TodolistService} from '../services';
import {ServiceBindings} from '../services/service.bindings';

export class TodolistController {
  constructor(
    // @repository(TodoListRepository)
    // public todoListRepository: TodoListRepository,
    @inject(ServiceBindings.TODO_SERVICE)
    public todolistService: TodolistService
  ) { }

  @post('/todolist')
  @response(200, {
    description: 'TodoList model instance',
    content: {'application/json': {schema: getModelSchemaRef(TodoList)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TodoList, {
            title: 'NewTodoList',
            exclude: ['id'],
          }),
        },
      },
    })
    todoList: Omit<TodoList, 'id'>,
  ): Promise<TodoList> {
    return this.todolistService.create(todoList);
  }

  @get('/todolist/count')
  @response(200, {
    description: 'TodoList model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TodoList) where?: Where<TodoList>,
  ): Promise<Count> {
    return this.todolistService.count(where);
  }

  @get('/todolist')
  @response(200, {
    description: 'Array of TodoList model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TodoList, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TodoList) filter?: Filter<TodoList>,
  ): Promise<TodoList[]> {
    return this.todolistService.find(filter);
  }

  // // @patch('/todolist')
  // // @response(200, {
  // //   description: 'TodoList PATCH success count',
  // //   content: {'application/json': {schema: CountSchema}},
  // // })
  // // async updateAll(
  // //   @requestBody({
  // //     content: {
  // //       'application/json': {
  // //         schema: getModelSchemaRef(TodoList, {partial: true}),
  // //       },
  // //     },
  // //   })
  // //   todoList: TodoList,
  // //   @param.where(TodoList) where?: Where<TodoList>,
  // // ): Promise<Count> {
  // //   return this.todoListRepository.updateAll(todoList, where);
  // // }

  @get('/todolist/{id}')
  @response(200, {
    description: 'TodoList model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TodoList, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(TodoList, {exclude: 'where'}) filter?: FilterExcludingWhere<TodoList>
  ): Promise<TodoList> {
    return this.todolistService.findById(id, filter);
  }

  @patch('/todolist/{id}')
  @response(204, {
    description: 'TodoList PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TodoList, {partial: true}),
        },
      },
    })
    todoList: TodoList,
  ): Promise<void> {
    await this.todolistService.updateById(id, todoList);
  }

  // // @put('/todolist/{id}')
  // // @response(204, {
  // //   description: 'TodoList PUT success',
  // // })
  // // async replaceById(
  // //   @param.path.string('id') id: string,
  // //   @requestBody() todoList: TodoList,
  // // ): Promise<void> {
  // //   await this.todoListRepository.replaceById(id, todoList);
  // // }

  @del('/todolist/{id}')
  @response(204, {
    description: 'TodoList DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.todolistService.deleteById(id);
  }
}
