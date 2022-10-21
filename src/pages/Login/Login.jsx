import React from "react";
import "./Login.css";
import { Link, Navigate } from "react-router-dom"
import { loginUser } from "../../redux/actions/user"
import {connect} from "react-redux"

class Login extends React.Component {

  state={
    username: "",
    password: "",
  }

  inputHandler = (event) => {
    const value = event.target.value
    const name = event.target.name

    this.setState({[name]: value})
  }
  

  render(){

    if (this.props.userGlobal.id) {
      return <Navigate to="/Home" />
    }

    return(
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
          {
              this.props.userGlobal.errMsg ? 
              <div className="errAlert">{this.props.userGlobal.errMsg}</div>
              : null
            }
            <input type="text" name="username" onChange={this.inputHandler} placeholder="username" className="loginInput" />
            <input type="password" name="password" onChange={this.inputHandler} placeholder="Password" className="loginInput" />
            <button onClick={()=> this.props.loginUser(this.state)} className="loginButton">Log In</button>
            <button className="loginRegisterButton">
              <Link to="/" className="loginRegisterWord"> Create Account </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    userGlobal: state.user,
  }
}

const mapDispatchToProps = {
  loginUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)