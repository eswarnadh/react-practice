import {Square} from "../BasicTests/Square";

test("Square Function takes an argument INT", ()=>{

    const result =Square(5);

    expect(result).toBe(25);
})