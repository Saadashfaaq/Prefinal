import "./ProfilePost.css";
import { MoreVert } from "@mui/icons-material";
import React from "react"




class ProfilePost extends React.Component{

  render(){
    return(
      <div className="post">
       <div className="postWrapper">
         <div className="postTop">
           <div className="postTopLeft">
             <img
               className="postProfileImg"
               src={this.props.contentData.profilepic}
               alt=""
             />
             <span className="postUsername">
             {this.props.contentData.username}
             </span>
           </div>
           <div className="postTopRight">
             <MoreVert />
           </div>
         </div>
         <div className="postCenter">
           <span className="postText">{this.props.contentData.quote}</span>
           <img className="postImg" src={this.props.contentData.picture} alt="" />
         </div>
         <div className="postBottom">
           <div className="postBottomLeft">
             <img className="likeIcon" src="assets/like.png"  alt="" />
             <span className="postLikeCounter"> {this.props.contentData.like}people like it</span>
           </div>
           <div className="postBottomRight">
             <span className="postCommentText"> comments </span>
           </div>
         </div>
       </div>
     </div>
    )
  }
}

export default ProfilePost

