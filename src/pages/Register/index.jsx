import React from "react";
import {Link} from "react-router-dom"
import Axios from "axios"
import {API_URL} from "../../constant/API"
import {registerUser} from "../../redux/actions/user"
import {connect} from "react-redux"
import { useFormik } from "formik"
import * as Yup from "yup"
import yupPassword from "yup-password"
import { useSelector, useDispatch } from "react-redux";



export default function Index() {

    const {id} = useSelector((state) => state.user)
    const dispatch = useDispatch()
    inputHandler = (event) => {
        const value = event.target.value
        const name = event.target.name
    
        this.setState({ [name]: value})
      }
    
      registerHandler = () => {
        const {fullname, username, email, password} = this.state
        Axios.post(`${API_URL}/users`, {
          fullname,
          username,
          email,
          password,
        })
        .then(()=>{
          alert("Register Success, please login")
        })
        .catch(()=>{
          alert("Register Error")
        })
      }
    const formik = useFormik({
        initialValues : {
            fullname : "",
            username : "",
            email : "",
            password : "",
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().required("harap masukan email").email("format yang dimasukan bukan email"),
            password: Yup.string().required("harap isi password").min(8).minUppercase(1).minNumbers(1).minSymbols(1),
        }),
        validateOnChange : false,
        onSubmit: (values) => {
            // diisi oleh dispatch jika menggunakan global state
            dispatch(registerUser(values, formik.setSubmitting))
        }
    })
    return (
        <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Podium</h3>
            <span className="loginDesc">
              Connect with friends and the world around you on Podium.
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input name="fullname" onChange={(event) => formik.setFieldValue("fullname", event.target.value)} type="text" placeholder="Fullname"  className="loginInput" />
              <input name="username" onChange={(event) => formik.setFieldValue("username", event.target.value)} type="text" placeholder="Username" className="loginInput" />
              <input name="email" onChange={(event) => formik.setFieldValue("email", event.target.value)} type="text" placeholder="Email" className="loginInput" />
              <input name="password" onChange={(event) => formik.setFieldValue("password", event.target.value)} type="password" placeholder="Password" className="loginInput" />
              <button onClick={formik.handleSubmit} className="loginButton">
              <Link className="RegisterWord" to="/Login">Sign Up</Link>
                </button>
              <button className="loginRegisterButton">
                <Link className="loginRegisterWord" to="/Login">Or Login</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }