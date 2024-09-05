import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import User from "./components/User";


// import InstaMart from "./components/InstaMart";


// Lazy Loading
//On Demand Loading
//code Splitting

const InstaMart = lazy(()=> import("./components/InstaMart"));

const AppLayout =() =>{
    return (
        <div className="app">
            <Header />
            <Outlet />
            
        </div>
        
        

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
            ]
        },
        
    ]
)
   
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);