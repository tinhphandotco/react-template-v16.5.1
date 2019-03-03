import request from "api/request";

export const getCountries = () => {
  return dispatch => {
    return request().get('https://importwise.app/api/information/countries')
      .then(res => {
        dispatch({
          type: 'GET_COUNTIES',
          payload: Object.values(res.data.data)
        })
      })
  }
}