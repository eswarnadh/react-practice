import {Sum} from "../BasicTests/Sum";

test("Sum Function Expects two INT arguements", ()=>{

    const result = Sum(3,4);
    expect(result).toBe(7);
})