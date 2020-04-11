const FilterFalse = require('./FilterFalse')
describe("Filter false object function", ()=>{
    test("The function should delete object which contains false value", ()=>{
        const test = [
          {authenticated:true, user_id:1},
          {authenticated:true, user_id:2},
          {authenticated:false, user_id:3},
          {authenticated:true, user_id:4},
          {authenticated:false, user_id:5}
        ]
      
        const output = [
          {authenticated:false, user_id:3},
          {authenticated:false, user_id:5}
        ]
        
        expect(FilterFalse(test)).toEqual(output);
    });

  });