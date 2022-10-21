import React from "react";
import {Link} from "react-router-dom"
import {registerUser} from "../../redux/actions/user"
import { useFormik } from "formik"
import * as Yup from "yup"
import YupPassword from "yup-password"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Register.css"



export default function Register() {

  const nav = useNavigate()

    const {id} = useSelector((state) => state.user)
    const dispatch = useDispatch()
    // inputHandler = (event) => {
    //     const value = event.target.value
    //     const name = event.target.name
    
    //     this.setState({ [name]: value})
    //   }
    

      YupPassword(Yup)

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
    if (id) {
      nav("/Login")
    }
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
              {formik.errors.email ? <div className="alert alert-danger">{formik.errors.email}</div> : null}
              <input name="email" onChange={(event) => formik.setFieldValue("email", event.target.value)} type="text" placeholder="Email" className="loginInput" />
              {formik.errors.email ? <div className="alert alert-danger">{formik.errors.password}</div> : null}
              <input name="password" onChange={(event) => formik.setFieldValue("password", event.target.value)} type="password" placeholder="Password" className="loginInput" />
              <button onClick={formik.handleSubmit} className="loginButton">
              Sign Up
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