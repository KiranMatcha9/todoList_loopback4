const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const todoListService = require('../../services/todoList-service');
const todoListadapter = require('../../adapters/external/todoList-service-adapter')


describe.skip("TodoList service",() => {
    describe('Create Todolist',() => {
        it('it creates TodoList',async () => {
        let req = {
            body: {
                title:"nodejs",
                status:"completed"
            }
         }
         let reqObj = req.body;
         const stubValue = {
            title:"nodejs",
            status:"completed"
         }
         const stub = sinon.stub(todoListadapter,"createTodoList").returns(stubValue);
         let data = await todoListService.createTodoList(reqObj);
         expect(data).to.eql(stubValue);

        })
    });

    describe('getTodoListbyid',() => {
        it('should return todoList that matches the id params',async ()=>{
            const stubValue = {
                title:"nodejs",
                status:"completed"
            }
            
            req = {params:
                {id:'62b2f80b9e7548726cb118f0'}
            }

            let listId = req.params.id;
            const stub = sinon.stub(todoListadapter,"getTodoListbyId").returns(stubValue);
            let data = await todoListService.getTodoListbyId(listId);
            expect(data).to.eql(stubValue);
        })
    })


    describe('getTodoList',() => {
        it("it should return entire Todolist",async () => {
            const stubValue = [
                {title:"nodejs",status:"completed"},{title:"loopback",status:"pending"}
            ]
            const stub = sinon.stub(todoListadapter,"getTodoList").returns(stubValue);
            let data = await todoListadapter.getTodoList();
            expect(data).to.eql(stubValue);
        })
    })

    describe('updateTodoListbyId',() => {
        it('it should update the list for which id params matches',async () => {
            let req = {
                body: {
                    title:"nodejs",
                    status:"completed"
                },
                params:
                    {id:'62b2f80b9e7548726cb118f0'}
                
             }
          
            let listId = req.params.id;
            let reqObj = req.body;
            const empty = "";
            const stub = sinon.stub(todoListadapter,"updateTodoListbyId").returns();
            const data = await todoListService.updateTodoListbyId(listId,reqObj);
            expect(data).to.eql(empty);
        })

    })
    describe('deleteTodoListbyId',() => {
        it('it should delete the todolist that matches id params',async()=>{
            req = {params:
                {id:'62b2f80b9e7548726cb118f0'}
            }
            let empty = "";
            let listId = req.params.id;
            const stub = sinon.stub(todoListadapter,"deleteTodoListbyId").returns();
            const data = await todoListService.deleteTodoListbyId(listId);
            expect(data).to.eql(empty);
        })
    })
 })
