
function delayfn(time){
    return new Promise((resolve)=>setTimeout(resolve,time));
}
console.log('Promise topic start');

delayfn(4000).then( ()=>{
    console.log('2 seconds passed');  
}
)
console.log('Promise topic end');


function divideFn(a,b){
    return new Promise((resolve,reject)=>{
        if(b===0){
            reject('Cannot divide by zero');
        }
        else{
            resolve(a/b);
        }
    })
}
divideFn(10,0).then((result)=>{console.log(`{result}`)}).catch((error)=>{console.log(error)});