import { render, screen } from "@testing-library/react";
import Mock_Data from "../BasicTests/RestaurantCard_Mock.json";
import RestaurantCard from "../components/RestaurantCard";
import "@testing-library/jest-dom";


it("should render the restaurant card with props data", ()=>{

    render(<RestaurantCard resData = {Mock_Data}/>);

    const name = screen.getByText("Burger King");

    expect(name).toBeInTheDocument();



});