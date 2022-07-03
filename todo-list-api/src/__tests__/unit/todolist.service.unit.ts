import {createStubInstance, expect, StubbedInstanceWithSinonAccessor} from '@loopback/testlab';
import {TodoList} from '../../models';
import {TodolistService} from '../../services';
import {givenTodoList} from '../helpers/helpers';



describe('TodoListservice', () => {

  let todoListService: StubbedInstanceWithSinonAccessor<TodolistService>;
  let aTodoList: TodoList;
  let aTodoListwithId: TodoList;
  let achangedTodoList: TodoList;
  let aListofTodos: TodoList[];

  beforeEach(resetServices);

  describe('createTodoList', () => {
    it('create a TodoList', async () => {
      todoListService.stubs.create.resolves(aTodoListwithId);
      const result = await todoListService.create(aTodoList)
      expect(result).to.eql(aTodoListwithId);
    })
  })

  describe('findTodoListById', () => {
    it('it return todolist if it exits', async () => {
      todoListService.stubs.findById.resolves(aTodoListwithId);
      expect(await todoListService.findById(aTodoListwithId.id as string)).to.eql(aTodoListwithId);
    })
  })



  describe('findTodolist', () => {
    it('return mutliple Todos if they exits', async () => {
      todoListService.stubs.find.resolves(aListofTodos);
      expect(await todoListService.find()).to.eql(aListofTodos);
    })
  })

  describe('updateTodoList', () => {
    it('successfully update the existing todo', async () => {
      todoListService.stubs.updateById.resolves();
      const data = await todoListService.updateById(aTodoList.id as string, achangedTodoList);
      let empty: void;
      expect(data).to.eql(empty);
    })
  })

  describe('deleteTodoList', () => {
    it('sucessfully delete the existing id', async () => {
      todoListService.stubs.deleteById.resolves();
      const data = await todoListService.deleteById(aTodoList.id as string);
      let empty: void;
      expect(data).to.eql(empty);
    })
  })
  function resetServices() {
    todoListService = createStubInstance(TodolistService);
    aTodoList = givenTodoList();
    aTodoListwithId = givenTodoList({
      id: '1',
    })
    achangedTodoList = givenTodoList({
      id: aTodoListwithId.id,
      title: 'so many things to do'
    })
    // console.log('achangedtodolist', achangedTodoList);
    aListofTodos = [
      aTodoListwithId,
      givenTodoList({
        id: '2',
        title: 'Do some important things'
      })]
  }
})
