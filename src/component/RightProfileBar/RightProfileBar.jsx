import React from "react";
import "./RightProfileBar.css"
import {connect} from "react-redux"

class RightProfileBar extends React.Component{
    render(){
        return(

            <div className="rightbar">
      <div className="rightbarWrapper">
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoValue">{this.props.userGlobal.city}</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>
                <span className="rightbarInfoValue">{this.props.userGlobal.from}</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Relationship:</span>
                <span className="rightbarInfoValue">{this.props.userGlobal.relationship}</span>
              </div>
            </div>
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
  
export default connect(mapStateToProps)(RightProfileBar)