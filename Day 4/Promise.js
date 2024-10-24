const promise  = new Promise((resolve,reject)=>{
    let sum = 1 + 22;
    if(sum == 2){
        resolve('success');
    }else{
        reject('Error')
    }
})

promise.then((msg)=>{console.log(msg);}).catch((err)=>console.log(err));

setTimeout(()=>{
    console.log('HI');
},6000)

function setTimeoutPromise(duration){
    return promise = new Promise((resolve,reject)=>{
        setInterval(resolve,duration);
    })
}

setTimeoutPromise(3000).then(()=>{
    console.log('Hari');
}).catch(()=>{
    console.log('Error in fetching');
})


setTimeout(() => {
  console.log("Time out : 1");
  setTimeout(() => {
    console.log("Time out : 2");
  }, 250);
  setTimeout(() => {
    console.log("Time out : 3");
  }, 300);
}, 250);



