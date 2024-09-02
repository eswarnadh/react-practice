import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
    }
    

    render(){
        const {name,contact}=this.props;
        return(
            <div className="user-card">
            <h2>{name}</h2>
            <h3>Contact: {contact}</h3>

        </div> 
        )
    }
}

export default UserClass;