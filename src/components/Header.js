import { LOGO_URL } from "../utils/Constants"; // named import 
import { useState } from "react";
import { Link } from "react-router-dom";

const Header =()=>{
    
    const [btnName, setbtnName] = useState("Login");

    return (
        <div className="m-2  flex justify-between items-center p-4 bg-white shadow-lg">
            <Link to="/">
                <img 
                    className="w-32 h-auto rounded-full transition-transform transform hover:scale-105" 
                    alt="app-logo" 
                    src={LOGO_URL}
                />
            </Link>
            
            <div className="Nav-Bar">
                <ul className="flex space-x-8 text-lg font-medium">
                    <li>
                        <Link 
                            to="/" 
                            className="hover:text-red-600"
                        > 
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/about" 
                            className="hover:text-red-600"
                        > 
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/contactus" 
                            className="hover:text-red-600"
                        > 
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/instamart" 
                            className="hover:text-red-600"
                        > 
                            InstaMart
                        </Link>
                    </li>
                    <li>
                        <button 
                            className="px-4 py-2 bg-orange-500 text-white rounded-full transition-transform transform hover:scale-105 focus:outline-none"
                            onClick={() => {
                                setbtnName(btnName === "Login" ? "Logout" : "Login");
                            }}
                        >
                            {btnName}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
