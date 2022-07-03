import {BindingKey} from '@loopback/core';
import {TodolistService} from './todolist.service';

export namespace ServiceBindings {
  export const TODO_SERVICE = BindingKey.create<TodolistService>('todolist.service');
}
