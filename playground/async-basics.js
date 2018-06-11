console.log('starting app');
setTimeout(() => {
    
    console.log('Async call with a 3 sec delay');
    
},3000);

setTimeout(() => {
   
    console.log('Async call with 0 delay')
    
}, 0);
console.log('ending app');