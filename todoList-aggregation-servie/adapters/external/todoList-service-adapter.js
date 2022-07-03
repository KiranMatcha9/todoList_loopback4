const { default: axios } = require("axios");

const createTodoList = async (data) => {
// const url = "http://localhost:3000/todolist";
// const method ="post";
const options = {
    url:"http://127.0.0.1:3000/todolist",
    method:"post",
    data:data
} 
// console.log('options',options)
return axios(options).then((response) => {
    // console.log("createTodoList response",response)
    return response.data
}).catch((error) => {
    console.log(error);
})
}

const getTodoList = async () => {
    const options = {
        url:"http://127.0.0.1:3000/todolist",
        method:"get",
    } 
    return axios(options).then((response) => {
        console.log('getTodoList response',response);
        return response.data
    }).catch((error) => {
        console.log(error);
    })
}


const getTodoListbyId = async (listId) => {
    const options = {
        url:`http://127.0.0.1:3000/todolist/${listId}`,
        method:"get",
    }   
    return axios(options).then((response) => {
        // console.log(response)
        return response.data
    }).catch((error) => {
        console.log(error);
    })
}

const updateTodoListbyId = async (listId,reqObj) => {
    const options = {
        url:`http://127.0.0.1:3000/todolist/${listId}`,
        method:"patch",
        data:reqObj
    }
    return axios(options).then((response) => {
        // console.log(response)
        return response.data
    }).catch((error) => {
        console.log(error);
    })

}

const deleteTodoListbyId = async (listId) => {
    const options = {
        url:`http://127.0.0.1:3000/todolist/${listId}`,
        method:"delete"
    }
        return axios(options).then((response) => {
            // console.log(response)
            return response.data
        }).catch((error) => {
            console.log(error);
        })
    }  


module.exports = {
    createTodoList,
    getTodoList,
    getTodoListbyId,
    deleteTodoListbyId,
    updateTodoListbyId
}