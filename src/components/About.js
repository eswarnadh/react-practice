import User from "./User";
// import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about-container p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Hey There</h1>
      <h2 className="text-xl text-gray-700 mb-8">This is TasBy</h2>
      
      <div className="user-component">
        <User />
      </div>
      
      {/* Uncomment the line below if you want to use the UserClass component */}
      {/* <UserClass name="Eshwar Nadh (Class)" contact="eshwarnadh@7" /> */}
    </div>
  );
};

export default About;
