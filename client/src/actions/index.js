import axios from 'axios';
import Axios from 'axios'
import {FETCH_USER} from './type'

export const fetchUser = ()=> async (dispatch)=>{
   const res = await Axios.get('/api/user')
   dispatch({type: FETCH_USER, payload: res.data});
};

export const handleToken = (token)=> async dispatch => {
const res = await axios.post('/api/stripe',token);
 dispatch({type:FETCH_USER, payload:res.data})
};