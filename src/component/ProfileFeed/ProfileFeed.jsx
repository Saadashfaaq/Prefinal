import ProfilePost from "../ProfilePost/ProfilePost"
import "./ProfileFeed.css";
import React from "react"
import Axios from "axios"
import {API_URL} from "../../constant/API"
import {connect} from "react-redux"



class ProfileFeed extends React.Component {
  state = {
    content: [],
    filterContent: [],
    username: this.props.userGlobal.username
  }

  fetchContent = () => {
    Axios.get(`${API_URL}/content/`)
    .then((result)=>{
      this.setState({content: result.data})
    })
    .catch(()=>{
      alert("Server Error")
    })
  }
 
  renderContent = () => {
  
    return this.state.content.reverse().map((val)=>{
      return <ProfilePost contentData={val}  />
    })
  }

  componentDidMount(){
    this.fetchContent()
  }

  render() {
    return(
    <div className="feed">
      <div className="feedWrapper">
       {this.renderContent()}
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

export default connect(mapStateToProps)(ProfileFeed)