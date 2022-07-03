import {expect} from '@loopback/testlab';
import {TodolistController} from '../../controllers';
import {TodoList} from '../../models';
import {TodoListRepository} from '../../repositories';
import {TodolistService} from '../../services';
import {testdb} from '../fixtures/testdb.datasource';
import {givenEmptyDatabase, givenTodoList} from '../helpers/helpers';

describe('todoList (integration)', () => {
  before(givenEmptyDatabase);
  let todoListServ: TodolistService;
  before(givenTodoListService);

  const aTodoList: TodoList = givenTodoList();
  const aTodoListwithId: TodoList = givenTodoList({id: '1'})
  const achangedTodoList: TodoList = givenTodoList({
    id: aTodoListwithId.id,
    title: 'so many things to do'
  })

  describe(('Todolist'), () => {
    it('get all todoList', async () => {
      const controller: TodolistController = new TodolistController(todoListServ);
      // console.log('AtodoList', JSON.stringify(aTodoList));
      const data = await controller.create(aTodoList);
      delete data['id'];
      // console.log('aData>>', data);
      expect(data).to.eql(aTodoList);
    })
  })


  describe('findTodoListById', () => {
    it('it return todolist if it exits', async () => {
      const controller = new TodolistController(todoListServ);
      const data = await controller.findById(aTodoListwithId.id as string)
      // console.log(data)
      expect(data).to.eql(aTodoListwithId);

    })
  })


  describe('findTodos', () => {
    it('it return all todos if they exists', async () => {
      const controller = new TodolistController(todoListServ);
      // await controller.create()
      const data = await controller.find();
      expect(data).to.eql([aTodoListwithId])
    })
  })


  describe('updateTodobyId', () => {
    it('it update the todo with id', async () => {
      const controller = new TodolistController(todoListServ);
      const data = await controller.updateById(aTodoListwithId.id as string, achangedTodoList);
      // console.log("updatebyId>>", data);
      let empty: void;
      expect(data).to.eql(empty);
    })
  })


  describe('deleteTodolistbyId', () => {
    it('it delete the todolist with id', async () => {
      const controller = new TodolistController(todoListServ);
      const data = await controller.deleteById(aTodoListwithId.id as string);
      let empty: void;
      expect(data).to.eql(empty);
    })
  })

  function givenTodoListService() {
    todoListServ = new TodolistService(
      new TodoListRepository(testdb)
    )
  }
})
