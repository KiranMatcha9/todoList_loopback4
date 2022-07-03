import {DbDataSource} from '../../datasources';

export const testdb = new DbDataSource({
  // name: 'test_db',
  // connector: 'mongodb',
  // url: '',
  // host: 'localhost',
  // port: 27017,
  // user: '',
  // password: '',
  // database: 'todoList_test',
  // useNewUrlParser: true
  name: 'test_db',
  connector: 'memory',
  localStorage: '',
  file: './data/db.json',
})
