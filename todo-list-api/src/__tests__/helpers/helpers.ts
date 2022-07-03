import {TodoList} from '../../models';
import {TodoListRepository} from '../../repositories';
import {testdb} from '../fixtures/testdb.datasource';
export function givenTodoList(todoList?: Partial<TodoList>) {
  const data = Object.assign(
    {
      title: "do a thing",
      status: "Yet to start"
    },
    todoList,
  );
  // console.log('data assigned>> ', data);
  return new TodoList(data)
}

export async function givenEmptyDatabase() {
  await new TodoListRepository(testdb).deleteAll()
}
