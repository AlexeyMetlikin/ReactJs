function loop(callback, times = 0){
  if(!isFunction(callback)){
    console.log('callback is not function or null');
    return;
  }
  if(typeof times !== 'number'){
    console.log('times is not number');
    return;
  }
  
  for(let i = 0; i < times; i++){
    callback();
  }
}

function isFunction(functionToCheck) {
 return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

loop(function(){
  console.log('First exercise');
}, 10);
loop(function(){
  console.log('First exercise');
}, 's');
loop(function(){
  console.log('First exercise');
});
loop(null, 10);
loop(null);
loop(10);
loop(10, 10);
loop();