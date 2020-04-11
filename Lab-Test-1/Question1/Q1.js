multiplyNumbers = (arr)=>{
    return new Promise((resolve,reject) =>{
        let result = [] ;

        for (let element of arr){
          if (!isNaN(element) ){
            if (parseInt(element) == element || parseFloat(element) == element)
            {
            result.push(element*5);
            }
          }
        }
        resolve(result);  

        if(result == null){
          reject("An array must contains number");
        }
    })
  }

const mixedArray= ["Matrix1", 1 , true, 2, false , 3]
multiplyNumbers(mixedArray).then((result) => {
    console.log(result);
}).catch((err) => {
  console.log(err);
});
