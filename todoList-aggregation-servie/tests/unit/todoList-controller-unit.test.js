const chai = require("chai");
const expect = chai.expect;
const sinon = require('sinon');
const todoListController = require('../../controller/todoList-controller');
const todoListService = require('../../services/todoList-service');

describe('TodoList controller',() => {

    let status,json,res,req;
    beforeEach(() => {
        // status = sinon.stub();
        // json = sinon.spy();
        // res = {status,json};
        // console.log("status:",status,"json:",json)
        // // res = {json}
        // status.returns(res);
    });

    describe('Create TodoList',() => {
        // let status,json,res;
        // beforeEach(() => {
        //     status = sinon.stub();
        //     json = sinon.spy();
        //     res = {status,json};
        //     status.returns(res);
        // })
        let req,res;
        it('it creates Todo List',async () => {

             req ={
                body: {title:"nodejs",status:"completed"}
            };
            const stubValue = {
                title:"nodejs",
                status:"completed"
             };
             res = {json:function(){}};
             const mock = sinon.mock(res);
             mock.expects("json").once().withArgs({response:stubValue});

             const stub = sinon.stub(todoListService, "createTodoList").returns(stubValue);
             await todoListController.createTodoListController(req,res);
            //  console.log("res.json.args>>>>",res.json.args);
            //  console.log("res.status.args>>>",res.status.args);
            //  expect(status.args[0][0]).to.equal(201);
            //  let data = json.args[0][0].response;
            //     //  console.log(data);
            //  expect(stub.calledOnce).to.be.true;
            //  expect(status.calledOnce).to.be.true;
            //  expect(json.calledOnce).to.be.true;
            //  expect(data).to.eql(stubValue);
            mock.verify();
        })
    })


    describe.skip("getTodoListbyid",() => {
        // let req,res,status,json;
        // // let status,json;
        // beforeEach(() => {
        //     req = {params:{id:'62b2f80b9e7548726cb118f0'}};
        //     // res = {json:()=>{}}
        //     status = sinon.stub();
        //     json = sinon.spy();
        //     res={status,json};
        //     status.returns(res);
        //     // status = sinon.stub();
        //     // res= {status,json};
        //     // status.returns(res);
        //     // const todoListService = sinon.spy();
        // })

        it('should return todoList that matches the id params',async ()=>{
            const stubValue = {
                title:"nodejs",
                status:"completed"
            }
            
        req = {params:
            {id:'62b2f80b9e7548726cb118f0'}
        };
            // const mock = sinon.mock(res);
            // mock.expects("json").once().withExactArgs({response:stubValue});
            // mock.expects("status").once().value(200);
            const stub = sinon.stub(todoListService,"getTodoListbyId").returns(stubValue);
            await todoListController.getTodoListbyIdController(req,res);
            // console.log("res",res)
            expect(stub.calledOnce).to.be.true;
            let data = json.args[0][0].response
            expect(status.args[0][0]).to.equal(200)
            expect(data).to.equal(stubValue);
            // mock.verify();
        })
    })


    describe.skip("getTodoList",()=>{
        // let res,req,json,status;
        // beforeEach(()=>{
        //     status = sinon.stub();
        //     json = sinon.spy()
        //     res={status,json};
        //     status.returns(res);
        // })

        it('should return entire todoList', async()=>{
        const stubValue = [
            {title:"epxress",status:"completed"},
            {title:"loopback",status:"completed"}    
        ]
        // const mock = sinon.mock(res);
        // mock.expects("json").once().withArgs({response:stubValue});
        const stub = sinon.stub(todoListService,"getTodoList").returns(stubValue);
        await todoListController.getTodoListController(req,res);
        expect(stub.calledOnce).to.be.true;
        let data = json.args[0][0].response
        expect(status.args[0][0]).to.equal(200)
        expect(data).to.equal(stubValue);
        // mock.verify();

        })
    })

    describe.skip("updateTodoList",() => {
        // let res,req,json,status;
        let empty =""
        // beforeEach(()=>{
        //     status = sinon.stub();
        //     json = sinon.spy();
        //     res={status,json};
        //     status.returns(res);
        // });
        it('should return entire todoList', async()=>{
            req = { body: {title:"loopback",status:"pending"},
                    params:{id:'62b2f80b9e7548726cb118f0'}
                };
            const stub = sinon.stub(todoListService,"updateTodoListbyId").returns(empty);
            await todoListController.updateTodoListbyIdController(req,res);
            expect(stub.calledOnce).to.be.true;
            let data = json.args[0][0].response;
            // console.log("data",data);
            expect(status.args[0][0]).to.equal(200)
            expect(data).to.equal(empty);
        })
    });

    describe.skip("deleteTodoList",() => {
        // let res,req,json,status;
        let empty =""
        // beforeEach(()=>{
        //     status = sinon.stub();
        //     json = sinon.spy();
        //     res={status,json};
        //     status.returns(res);
        // });
        it('should return entire todoList', async()=>{
            req = {params:{id:'62b2f80b9e7548726cb118f0'}};
            const stub = sinon.stub(todoListService,"deleteTodoListbyId").returns(empty);
            await todoListController.deleteTodoListbyIdController(req,res);
            expect(stub.calledOnce).to.be.true;
            let data = json.args[0][0].response;
            // console.log("data",data);
            expect(status.args[0][0]).to.equal(200)
            expect(data).to.equal(empty);
        })

    });
})