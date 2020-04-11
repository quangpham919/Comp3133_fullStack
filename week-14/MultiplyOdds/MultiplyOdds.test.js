const MultiplyOdds = require('./MultiplyOdds.js');

describe('MultiplyOdds function ', ()=>{
    test("It should multiply each odd value by the previous even value",()=>{
        const input = [2, 33, 4, 41, 6, 9, 77, 11, 13, 27 ];
        const output =  [66, 164, 54, 462, 66, 78, 162];
        const input1 = [3,2,3 ];
        const output1 = [3,6];
        expect(MultiplyOdds(input)).toEqual(output);
        
    });

    test("It should multiply each odd value by the previous even value",()=>{
      const input1 = [3,2,3 ];
      const output1 = [3,6];
      expect(MultiplyOdds(input1)).toEqual(output1);
      
  });



});