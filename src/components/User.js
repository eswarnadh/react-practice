const User = (props) =>{
   const {name,contact}=props;

    return (
        <div className="user-card">
            <h2>{name}</h2>
            <h3>Contact: {contact}</h3>

        </div>
    )

};

export default User;