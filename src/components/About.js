import User from "./User";
import userContext from "../utils/userContext";
import { useContext } from "react";

// import UserClass from "./UserClass";

const About = () => {
  const {loggedinUser} = useContext(userContext);

  return (
    <div className="about-container p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Hey There!</h1>
      <h2 className="text-xl text-gray-700 mb-8">This is Flavour Fetch</h2>
      <h3 className="my-2">{loggedinUser}</h3>
      
      <div className="user-component">
        <User />
      </div>
      
      {/* Uncomment the line below if you want to use the UserClass component */}
      {/* <UserClass name="Eshwar Nadh (Class)" contact="eshwarnadh@7" /> */}
    </div>
  );
};

export default About;
