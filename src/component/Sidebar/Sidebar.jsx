import "./Sidebar.css";
import PersonIcon from '@mui/icons-material/Person';
import Person4Icon from '@mui/icons-material/Person4';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocatiLonCityIcon from '@mui/icons-material/LocationCity';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom";


class Sidebar extends React.Component {

  
  render(){
    return(
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <PersonIcon className="sidebarIcon" />
            <span className="sidebarListItemText">{this.props.userGlobal.fullname}</span>
          </li>
          <li className="sidebarListItem">
            <Person4Icon className="sidebarIcon" />
            <span className="sidebarListItemText">{this.props.userGlobal.username}</span>
          </li>
          <li className="sidebarListItem">
            <LocationOnIcon className="sidebarIcon" />
            <span className="sidebarListItemText">{this.props.userGlobal.city}</span>
          </li>
          <li className="sidebarListItem">
            <LocatiLonCityIcon className="sidebarIcon" />
            <span className="sidebarListItemText">{this.props.userGlobal.from}</span>
          </li>
          <li className="sidebarListItem">
            <FavoriteIcon className="sidebarIcon" />
            <span className="sidebarListItemText">{this.props.userGlobal.relationship}</span>
          </li>
        </ul>
        <button className="sidebarButton">
          <Link className="sidebarButtonLink" to="/Edit">
            Edit Profile
          </Link>
        </button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
        </ul>
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

export default connect(mapStateToProps)(Sidebar)
