import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it("Should render the Header component with a log-in button", ()=>{


    //Rendering the component
    render(
        <BrowserRouter>
        <Provider store = {appStore}>
        <Header />
        </Provider>
        </BrowserRouter>
    )

    //Assertion of the testcase

    const loginbutton = screen.getByRole("button", {name:/Login/i}); 

    //const loginbutton = screen.getByText("Login"); //another way of testing the button

    fireEvent.click(loginbutton)
    const logoutbutton = screen.getByRole("button", {name:/logout/i});

    expect(loginbutton).toBeInTheDocument();
})

