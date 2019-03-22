import {Constant} from '../../Constant/Constant';


export const GET_TODOS_SUCCESS = '[Todo] GET_TODOS_SUCCESS' 
export const CREATE_TODO_SUCCESS = '[Todo] CREATE_TODO_SUCCESS';


const axios = require('axios');


export const GetTodos = () => (dispatch) => {
  axios({
    url:Constant.url,
    method: 'GET',
    headers: {
      'Accept':'application/json',
      'Content-Type': 'application/json'
  }
  }).then((response) => {
    let resData = response.data
    dispatch({ type: GET_TODOS_SUCCESS,resData});
  }).catch((error)=>{
        console.log(error);
  }) 
}
export const CreateTodo = todo => dispatch => {
  console.log(todo)
  axios({
    method: 'POST',
    url: Constant.url,
    data: JSON.stringify(todo),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      console.log(response.data)
      dispatch({ type: CREATE_TODO_SUCCESS, todo: response.data });
    })
    .catch(error => {
      console.log(error);
    });
};