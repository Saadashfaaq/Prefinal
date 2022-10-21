import 'bootstrap/dist/css/bootstrap.css'
import React from "react"
import "./EditBio.css"
import Axios from 'axios'
import {API_URL} from "../../constant/API"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
 
class EditBio extends React.Component{

  state = {
    id: this.props.userGlobal.id,

    fullname: this.props.userGlobal.fullname,
    username: this.props.userGlobal.username,
    profilepic: this.props.userGlobal.profilepic,
    backgroundpic: this.props.userGlobal.backgroundpic,
    bio: this.props.userGlobal.bio,
    city: this.props.userGlobal.city,
    from: this.props.userGlobal.from,
    relationship:this.props.userGlobal.relationship
  }

  inputHandler = (event) => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  saveBtnHandler = () => {
    Axios.patch(`${API_URL}/users/${this.state.id}`, {
      fullname: this.state.fullname,
      username: this.state.username,
      profilepic:this.state.profilepic,
      backgroundpic: this.state.backgroundpic,
      bio: this.state.bio,
      city:this.state.city,
      from: this.state.from,
      relationship: this.state.relationship,
    })
    .then((res) => {
      console.log(res.data);
      console.log(this.state.profilepic);
     alert("Saved!")
    })
    .catch(() => {
      alert("Server Error")
    })
  }

  cancelEdit = () => {
    this.setState({ id: 0 })
  }

  render(){
    return(
          
       <div className="edit p-2">
        <div class="mb-3">
        <label class="form-label">Background Picture</label>
        <input className="form-control" onChange={this.inputHandler} name="backgroundpic" type="text" defaultValue={this.state.backgroundpic} />
        </div>
        <div class="mb-3">
        <label class="form-label">Profile Picture</label>
        <input  className="form-control" onChange={this.inputHandler} name="profilepic" type="text" defaultValue={this.state.profilepic}/>
        </div>
        <div className='mb-3'>
        <label  className="mx-2 form-label">Full Name</label>
        <input onChange={this.inputHandler} name="fullname" type="text" className="form-control"  defaultValue={this.state.fullname}></input>
        </div>
        <div className='mb-3'>
        <label  className="mx-2 form-label">Username</label>
        <input onChange={this.inputHandler} name="username" type="text" className="form-control"  defaultValue={this.state.username}></input>
        </div>
        <div className='mb-3'>
        <label  className="mx-2 form-label">Bio</label>
        <input onChange={this.inputHandler} name="bio" type="text" className="form-control"  defaultValue={this.state.bio} ></input>
        </div>
        <div className='mb-3'>
        <label  className="mx-2 form-label">From</label>
        <input onChange={this.inputHandler} name="from" type="text" className="form-control"  defaultValue={this.state.from} ></input>
        </div>
        <div className='mb-3'>
        <label  className="mx-2 form-label">City</label>
        <input onChange={this.inputHandler} name="city" type="text" className="form-control"  defaultValue={this.state.city} ></input>
        </div>
        <div className='mb-3'>
        <label  className="mx-2 form-label">Relationship</label>
        <input onChange={this.inputHandler} name="relationship" type="text" className="form-control"  defaultValue={this.state.relationship} ></input>
        </div>
        <div className='d-flex flex-row-reverse mb-3'>
        <button onClick={this.saveBtnHandler} type="button" class="m-2 btn btn-success btn-sm">
            Save
          </button>
        <button onClick={this.cancelEdit} type="button" class="m-2 btn btn-danger btn-sm">
          <Link className="kataLink" to='/Profile'>
            Back to Profile
          </Link>
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


export default connect(mapStateToProps)(EditBio)