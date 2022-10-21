import React from "react";
import "./RightHomeBar.css"
import {connect} from "react-redux"

class RightHomeBar extends React.Component{
    render(){
        return(

    <div className="rightbar">
      <div className="rightbarWrapper">
      </div>
    </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
      userGlobal: state.user
    }
  }
  
export default connect(mapStateToProps)(RightHomeBar)