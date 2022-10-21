import Post from "../Post/Post"
import Share from "../Share/Share";
import "./Feed.css";
import React from "react"
import Axios from "axios"
import {API_URL} from "../../constant/API"


class Feed extends React.Component {
  state = {
    content: [],
  }

  fetchContent = () => {
    Axios.get(`${API_URL}/content`)
    .then((result)=>{
      this.setState({content: result.data})
    })
    .catch(()=>{
      alert("Server Error")
    })
  }
 
  renderContent = () => {
    return this.state.content.reverse().map((val)=>{
      return <Post contentData={val}  />
    })
  }

  componentDidMount(){
    this.fetchContent()
  }

  componentDidUpdate(){
    this.fetchContent()
  }

  render() {
    return(
    <div className="feed">
      <div className="feedWrapper">
        <Share />
       {this.renderContent()}
      </div>
    </div>
    )
  }

}


export default Feed