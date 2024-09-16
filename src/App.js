import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { useState, useContext } from "react";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import User from "./components/User";
import userContext from "./utils/userContext";
import { Provider, useSelector } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


// import InstaMart from "./components/InstaMart";


// Lazy Loading
//On Demand Loading
//code Splitting

const InstaMart = lazy(()=> import("./components/InstaMart"));

const AppLayout =() =>{

    const {loggedinUser} = useContext(userContext);


    const[user, setuser] = useState();

    //authendication
    useEffect(() => {
        const data ={
            name : "Eshwar Nadh",
        };
        setuser(data.name);
    },[])

    

    return (
        <Provider store ={appStore}>
        <userContext.Provider value = {{loggedinUser: user, setuser}}>
        <div className="app">
            <Header />
            <Outlet />
            
        </div>
        </userContext.Provider>
        </Provider>
        
        

);
}

const appRouter = createBrowserRouter(
    [
        {
            path:"/",
            element: <AppLayout />,
            errorElement: <Error />,
            children:[
                {
                    path:"/",
                    element: <Body />,
        
                },
                {
                    path:"/about",
                    element: <About />,
        
                },
                {
                    path:"/contactus",
                    element: <Contact />,
        
                },
                {
                    path:"/restaurants/:resId",
                    element: <RestaurantMenu />,
        
                },
                {
                    path:"/about/:userName",
                    element: <User />,
        
                },
                {
                    path:"/instamart",
                    element: <Suspense fallback={<div><h1>Loading...</h1></div>}>
                        <InstaMart />
                    </Suspense>,
        
                },
                {
                    path:"/cart",
                    element:<Cart/>,
                },
            ]
        },
        
    ]
)
   
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);