import React from 'react'
import "./Topbar.css"
import {Search} from "@mui/icons-material"
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import { logoutUser } from "../../redux/actions/user"

class Topbar extends React.Component {
  render(){
    return(
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Podium</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">
            <Link className='kataLink' to="/Home" >Home</Link>
          </span>
          <span className="topbarLink">
          <Link className='kataLink' to="/Profile" >Profile</Link>
          </span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
          <Link className='kataLink' to="/Profile" />
          {this.props.userGlobal.fullname}
          </div>
        </div>
        <img src={this.props.userGlobal.profilepic} alt="" className="topbarImg"/>
        <button onClick={this.props.logoutUser} className="logoutButton">
          <Link to="/Login" className='kataLink'>Logout</Link>
        </button>
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

const mapDispatchToProps = {
  logoutUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Topbar)

