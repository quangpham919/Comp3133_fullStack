const MultiplyOdds = (arr) =>{
    const result = []
    let multiply = 1;
    for (let element of arr) {
      if ( element % 2 === 0) {
        multiply = element
      }
      else {
        result.push(element * multiply );
      }
        
    }
    return result
}


console.log()

module.exports = MultiplyOdds;