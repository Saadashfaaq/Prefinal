import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Profile from "./pages/Profile/Profile"
import Edit from "./pages/Edit/Edit"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import React from "react"
import {connect} from "react-redux"
import { userKeepLogin, checkStorage } from "./redux/actions/user"


class App extends React.Component {

  componentDidMount() {
    const userLocalStorage = localStorage.getItem("userDataPodium")

    if (userLocalStorage) {
      const userData = JSON.parse(userLocalStorage);
      this.props.userKeepLogin(userData);
    } else {
      this.props.checkStorage();
    }
  }

  render() {
    if (this.props.userGlobal.storageIsChecked) {
      return (
        <BrowserRouter>
          <Routes>
           <Route element={<Login/>} path="/Login"/>
           <Route element={<Profile/>} path="/Profile"/>
           <Route element={<Home/>} path="/Home"/>
           <Route element={<Edit/>} path="/Edit"/>
           <Route element={<Register/>} path="/"/>
          </Routes>
      </BrowserRouter>
      )
    }

    return (
      <div>
        Loading...
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
  userKeepLogin,
  checkStorage,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

