import Axios from 'axios';
import { GET_CUSTOMERS, IS_LOGIN } from './actionType';
import { URL } from "../common/API";

const header =   { headers: { 'Content-Type' : 'application/json; charset=utf-8', 'Accept': 'application/json'} };

export const getCustomer = () => {
    return dispatch => {
        Axios.get(URL.customerLists)
        .then(res => {
            dispatch({
              type: GET_CUSTOMERS,
              payload: res.data
            });
          })
          .catch(err => {
              dispatch({
                type: GET_CUSTOMERS,
                payload: {"error":"Error Connection"}
              });
          });
    }
}

export const login = (e) => {
  return dispatch => {
      Axios.post(URL.login, e, header )
      .then(res => {
          dispatch({
            type: IS_LOGIN,
            payload: res.data
          });
        })
        .catch(err => {
            dispatch({
              type: IS_LOGIN,
              payload: {"error":"Error Connection"}
            });
        });
  }
}