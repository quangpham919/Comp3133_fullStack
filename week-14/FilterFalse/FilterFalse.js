

const FilterFalse = (object) =>{
    const result = [];
    object.map((item,index)=>{
        if(item.authenticated === false) {
          result.push(item);
        }
    } )
    return result;
}

const test = [
  {authenticated:true, user_id:1},
  {authenticated:true, user_id:2},
  {authenticated:false, user_id:3},
  {authenticated:true, user_id:4},
  {authenticated:false, user_id:5}
]

console.log(FilterFalse(test))

module.exports = FilterFalse;