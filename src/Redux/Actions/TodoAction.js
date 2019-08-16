import { Constant } from '../../Constant/Constant';


export const GET_TODOS_SUCCESS = '[Todo] GET_TODOS_SUCCESS'
export const CREATE_TODO_SUCCESS = '[Todo] CREATE_TODO_SUCCESS';
export const DELETE_TODO_SUCCESS = '[Todo] DELETE_TODO_SUCCESS';


const axios = require('axios');


export const GetTodos = () => (dispatch) => {
  axios({
    url: Constant.url,
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    let resData = response.data
    dispatch({ type: GET_TODOS_SUCCESS, resData });
  }).catch((error) => {
    return error;
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
      dispatch({ type: CREATE_TODO_SUCCESS, todo: response.data });
    })
    .catch(error => {
     return error;
    });
};
export const DeleteTodo = (todoId) => dispatch => {
  console.log(todoId);
  axios({
    method: 'DELETE',
    url: Constant.url + todoId,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(() => {
      dispatch({ type: DELETE_TODO_SUCCESS });
      window.location = "/TODOLIST";
    })
    .catch(error => {
     return error;
    });
};