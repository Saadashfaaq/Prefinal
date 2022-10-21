import React from "react";
import "./Edit.css"
import Topbar from "../../component/Topbar/Topbar";
import EditBio from "../../component/EditBio/EditBio";


class Edit extends React.Component{
    render(){
        return(
            <>
            <Topbar />
            <div className="EditContainer">
             <EditBio  />
            </div>
            </>
        )
        
    }
}

export default Edit

