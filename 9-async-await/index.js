
function delayfn(time){
    return new Promise((resolve)=>setTimeout(resolve,time));
}

async function myName(name){
    console.log('function starting point');
    await delayfn(3000);
    console.log(name);  
}

myName('shatrughna');

async function divideFn(a,b){
    try {
        if(b===0){
            throw new Error('Cannot divide by zero');
        }
        return a/b;
    
    } catch (error) {
      console.error(error);
      return null;
    }
}
async function mainFn(){
    console.log(await divideFn(10,2));
    console.log(await divideFn(10,0));
}
mainFn();