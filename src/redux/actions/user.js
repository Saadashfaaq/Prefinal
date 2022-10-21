import Axios from "axios"
import {API_URL} from "../../constant/API"

export const registerUser = (values, setSubmiting ) => {
    return(dispatch) => {
        Axios.post(`${API_URL}/users`, {
          fullname: values.fullname,
          username: values.username,
          email : values.email,
          password : values.password,

        })
        .then((result)=>{
            delete result.data.password
            dispatch({
                type: "USER_LOGIN",
                payload: result.data
            })
          alert("Register Success")
        })

        setSubmiting(false)
        .catch(()=>{
          alert("Register Error")
          setSubmiting(false)
        })
    }
}

export const loginUser = ({ username, password }) => {
  return (dispatch) => {
    Axios.get(`${API_URL}/users`, {
      params: {
        username,
      }
    })
    .then((result) => {
      console.log(result.data)
      if (result.data.length) {
        if (password === result.data[0].password) {
          delete result.data[0].password

          localStorage.setItem("userDataPodium", JSON.stringify(result.data[0]))

          dispatch({
            type: "USER_LOGIN",
            payload: result.data[0]
          })
        } else {
          // Handle error wrong password
          dispatch({
            type: "USER_ERROR",
            payload: "Wrong password!"
          })
        }
      } else {
        // Handle error username not found
        dispatch({
          type: "USER_ERROR",
          payload: "User not found",
        })
      }
    })
    .catch((err) => {
      alert("Terjadi kesalahn di server")
    })
  }
}

export const logoutUser = () => {
  localStorage.removeItem("userDataPodium")

  return {
    type: "USER_LOGOUT"
  }
}

export const userKeepLogin = (userData) => {
  return(dispatch) => {
    Axios.get(`${API_URL}/users`, {
      params: {
        id: userData.id 
      }
    })
    .then((result)=>{
      delete result.data[0].password

      localStorage.setItem("userDataPodium", JSON.stringify(result.data[0]))

      dispatch({
        type: "USER_LOGIN",
        payload: result.data[0]
      })
    })
    .catch(()=> {
      alert("SERVER ERROR")
    })
  }
}

export const checkStorage = () => {
  return {
    type: "CHECK_STORAGE"
  }
}