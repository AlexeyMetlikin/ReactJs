const promiseArray = [];

function setPromise() {
  for(let i = 0; i < 10; i++){
    promiseArray[i] = new Promise((resolve, reject) => {
      let url = 'https://jsonplaceholder.typicode.com/users/' + (i+1);
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", url, true);
      
      xmlHttp.onload = function(){
        if(this.status === 200){
          resolve(xmlHttp.responseText);
        }
        else {
          var error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
      xmlHttp.onerror = function() {
        reject(new Error("Request error"));
      };
      
      xmlHttp.send();
    });
  }
}

setPromise();
Promise.all(promiseArray)
  .then(result => console.log(result))
  .catch(error => console.log(error));