// timer 1
const delayedPromise = (num) =>{
  return new Promise((resolve)=>{
    setTimeout(() =>{
      resolve(num * num) 
  }, 500)
  })
 
}
// timer 2 
const delayedPromise2 = (num) =>{
  return new Promise((resolve)=>{
    setTimeout(() =>{
      resolve(num * num) 
  }, 500)
  })
 
}

Promise.all([delayedPromise(6),delayedPromise2(7)]).then(result => console.log(result));
