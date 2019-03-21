import {Constant} from '../../Constant/Constant';

export const GET_TODOS_SUCCESS = '[Todo] GET_TODOS_SUCCESS' 


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