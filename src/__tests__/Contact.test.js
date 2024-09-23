import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

//In Describe We group the testcases like For different purpose we test the tescases of different group. We can have nested Describe also

describe("Contact Us Test cases", ()=>{

    beforeAll(()=>{
        console.log("before All")
    });
    
    // We can write "test" or "it" it is one and the same thing it is alias name of test both works the same
    it('Should render Contact', () => {

        render(<Contact />);
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
      
    });
    
    test('Should render Contact', () => {
    
        render(<Contact />);
        const button = screen.getByText("Send Message");
    
        expect(button).toBeInTheDocument();
      
    });
    
    test('should load textboxes in the form', () => {
    
        // rendering the Component
        render(<Contact />);
        const inputfields = screen.getAllByRole("textbox");
    
        //Querying
        expect(inputfields.length).toBeGreaterThan(0);
    
        //Assertion
        inputfields.forEach(field =>{
            expect(field).toBeInTheDocument();
        })  
      
    });
    
});
