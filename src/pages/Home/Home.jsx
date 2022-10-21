import React from "react";
import Topbar from "../../component/Topbar/Topbar"
import Sidebar from "../../component/Sidebar/Sidebar";
import Feed from "../../component/Feed/Feed";
import RightHomeBar from "../../component/RightHomeBar/RightHomeBar";
import "./Home.css"

class Home extends React.Component {
  render(){
    return(
      <>
        <Topbar />
        <div className="homeContainer">
        <Sidebar />
        <Feed/>
        <RightHomeBar/>
      </div>
    </>
    )
  }

}

export default Home
