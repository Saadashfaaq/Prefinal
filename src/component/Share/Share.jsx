import "./Share.css";
import {PermMedia} from "@mui/icons-material"
import React from "react";
import {connect} from "react-redux"
import Axios from "axios"
import {API_URL} from "../../constant/API"

class Share extends React.Component{
  
  state = {
      username: `${this.props.userGlobal.username}`,
      profilepic: `${this.props.userGlobal.profilepic}`,
      picture: "",
      quote: "",
      like: 0,
      comment: "",
      isUpload : false
  }

  inputHandler = (event) => {
    const value = event.target.value
    const name = event.target.name

    this.setState({ [name]: value})
  }

  postingHandler = () => {
    const {username, profilepic, picture, quote, like, comment} = this.state
    Axios.post(`${API_URL}/content`, {
      username,
      profilepic, 
      picture, 
      quote, 
      like, 
      comment
    })
    .then(()=>{
      alert("Posted!")
      this.setState({
        isUpload : false,
        picture : ""
      })
    })
    .catch(()=>{
      alert("Register Error")
    })
  }

  uploadFile = () => {
    this.setState({
      isUpload : true
    })
  }
  
  render(){
    return(
      <div className="share">
       <div className="shareWrapper">
         <div className="shareTop">
           <img className="shareProfileImg" src={this.props.userGlobal.profilepic} alt="" />
           <input
           name="quote" onChange={this.inputHandler}
            placeholder="What's in your mind?"
            className="shareInput"
            defaultValue={this.state.quote}
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon" />
                    <span className="shareOptionText" onClick={this.uploadFile}>Photo or Video</span>
                    {
                      this.state.isUpload ? 
                      <input onChange={this.inputHandler} name="picture" type="text" className="form-control"></input>
                      :
                      null
                    }
                </div>
            </div>
            <button onClick={this.postingHandler} className="shareButton">Share</button>
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

export default connect(mapStateToProps)(Share)

