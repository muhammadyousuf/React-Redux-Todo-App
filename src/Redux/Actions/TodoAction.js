import {Constant} from '../../Constant/Constant';

export const GET_TODOS_SUCCESS = '[Todo] GET_TODOS_SUCCESS' 


const axios = require('axios');






export const GetTodos = () => (dispatch) => {
  axios({
    url: Constant.url,
    method: 'GET',
    headers: {
      'Accept':'application/json',
      'Content-Type': 'application/json'
  }
  }).then((response) => {
    let res = response.data
    console.log(res)
    let todo = [];
    for(var i =0; i<res.length; i++){
        let tempTodo ={
                id:res[i].id,
                title:res[i].title,
                order:res[i].order
        }//id title order

         todo.push(tempTodo)
    }
    console.log(todo);
    console.log(typeof(todo) )
   
    dispatch({ type: GET_TODOS_SUCCESS,todo});
  }).catch((error)=>{
        console.log(error);
  }) 
}
