import { LOGO_URL } from "../utils/Constants"; // named import 
import { useState, useContext} from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";



const Header =()=>{
    
    const [btnName, setbtnName] = useState("Login");

    const {loggedinUser} = useContext(userContext);


    //Subscribing to the store using selector
    const cartItems = useSelector((store)=>store.cart.items);
    // console.log(cartItems)

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

                    <li className="relative flex items-center align-middle">
                    <Link 
                        to="/cart" 
                        className="relative group p-2 rounded-xl bg-white hover:bg-orange-600 hover:shadow-lg  duration-300 ease-in-out transform hover:scale-105"
    >
                            <FontAwesomeIcon icon={faShoppingCart} className="text-2xl text-gray-500 group-hover:text-white transition-colors duration-300" />
                            <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center group-hover:bg-red-700 transition-colors duration-300">
                                ({cartItems.length})
                            </span>
                        </Link>

                    </li>
                    <li>
                        <Link 
                            to="/about" 
                            className="hover:text-red-600"
                        > 
                            {loggedinUser}
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
