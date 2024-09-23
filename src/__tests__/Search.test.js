import { screen, render, fireEvent } from "@testing-library/react";
import Body from "../components/Body";
import Mock_data from "../BasicTests/resListMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import RestaurantCard from "../components/RestaurantCard";

//dummy fetch function with dummy data which exactly resembles fetch.

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=>{
            return Promise.resolve(Mock_data);
        }
    }

    )
})

it("should render the body component with search", async ()=>{

   await act(async ()=>
    { render(
        <BrowserRouter>
        <Body />

        </BrowserRouter>
        );});

   const searchButton = screen.getByRole("button", {name:/search/i});

  
   expect(searchButton).toBeInTheDocument();
});

it("should render the body component with inputBox", async ()=>{

    await act(async ()=>
     { render(
         <BrowserRouter>
         <Body />
         <RestaurantCard />
         </BrowserRouter>
         );});
 
    
     const searchButton = screen.getByRole("button", {name:/search/i});
     const inputBox = screen.getByTestId("SearchInput");
    

    

    fireEvent.change(inputBox,{target:{value:"roast"}});

    fireEvent.click(searchButton);

    const cards = screen.getAllByTestId("restCard");
    screen.debug();

    expect(cards.length).toBe(1);
 });

