import {createStubInstance, expect, StubbedInstanceWithSinonAccessor} from '@loopback/testlab';
import {TodolistController} from '../../controllers';
import {TodoList} from '../../models';
import {TodolistService} from '../../services';
import {givenTodoList} from '../helpers/helpers';

describe('TodoList controller', () => {
  let todoListServ: StubbedInstanceWithSinonAccessor<TodolistService>;
  let controller: TodolistController;
  let aTodoList: TodoList;
  let aTodoListWithId: TodoList;
  let achangedTodoList: TodoList;
  let aListofTodos: TodoList[];

  beforeEach(resetRepositories);

  describe('createTodoList', () => {
    it('create a TodoList ', async () => {
      const create = todoListServ.stubs.create;
      create.resolves(aTodoListWithId)
      const result = await controller.create(aTodoList);
      expect(result).to.eql(aTodoListWithId);
      // sinon.assert.calledWith(create, aTodoList);
    })
  });


  describe('findTodoListById', () => {
    it('return a todoList if it exists', async () => {
      const findById = todoListServ.stubs.findById;
      findById.resolves(aTodoListWithId);
      expect(await controller.findById(aTodoListWithId.id as string)).to.eql(aTodoListWithId);
      // sinon.assert.calledWith(findById, aTodoListWithId.id)
    })
  })


  describe('findTodoList', () => {
    it('return multiple todos if they exist', async () => {
      const find = todoListServ.stubs.find;
      find.resolves(aListofTodos);
      expect(await controller.find()).to.eql(aListofTodos);
      // sinon.assert.called(find);

    })
  })


  describe('updateTodo', () => {
    it('successfully updated existing items', async () => {
      const updatebyId = todoListServ.stubs.updateById;
      updatebyId.resolves();
      await controller.updateById(aTodoListWithId.id as string, achangedTodoList)
      // sinon.assert.calledWith(updatebyId, aTodoListWithId.id, achangedTodoList);
    })
  })

  describe('DeleteTodolistById', () => {
    it('delete a todoList if it exists', async () => {
      const deleteById = todoListServ.stubs.deleteById;
      deleteById.resolves();
      await controller.deleteById(aTodoListWithId.id as string);
      // sinon.assert.calledWith(deleteById, aTodoListWithId.id);
    })
  })


  function resetRepositories() {
    todoListServ = createStubInstance(TodolistService);
    aTodoList = givenTodoList();
    aTodoListWithId = givenTodoList({
      id: '1',
    });
    aListofTodos = [
      aTodoListWithId,
      givenTodoList({
        id: '2',
        title: 'so many things to do'
      }),
    ] as TodoList[];
    // console.log('aListofTodos', aListofTodos)
    achangedTodoList = givenTodoList({
      id: aTodoListWithId.id,
      title: 'Do some important things'
    });
    controller = new TodolistController(todoListServ);
  }
})
