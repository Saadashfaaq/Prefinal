import React from "react";
import "./profile.css";
import Topbar from "../../component/Topbar/Topbar";
import Sidebar from "../../component/Sidebar/Sidebar";
import ProfileFeed from "../../component/ProfileFeed/ProfileFeed";
import { connect } from "react-redux"
import RightProfileBar from "../../component/RightProfileBar/RightProfileBar";

class Profile extends React.Component {
  render(){
    return(
      <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={this.props.userGlobal.backgroundpic}
                alt=""
              />
              <img
                className="profileUserImg"
                src={this.props.userGlobal.profilepic}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{this.props.userGlobal.username}</h4>
                <span className="profileInfoDesc">{this.props.userGlobal.bio}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <ProfileFeed />
            <RightProfileBar/>
          </div>
        </div>
      </div>
    </>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    userGlobal: state.user
  }
}

export default connect(mapStateToProps)(Profile)
