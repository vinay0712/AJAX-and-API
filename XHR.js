//  XHR stands for XMLHttpRequest
//It is the original way of sending requests to api using html and js 
//for req to be sended it require a 4 staged process
//1.Make a object of new XMLHttpRequest();
//2.Make two call back one for onload event handler and one for error event handler
//syntax-\
//objname.onload = function(){...code}
//objname.onerror = function(){...code}
//3.open req function is used to fetch data from the api i.e. req.open("request type","url")
//4.IN last req.send(); method to send the data to browser

// const req = new XMLHttpRequest();
// req.onload = function(){
//     console.log('loaded');
//     const data = JSON.parse(this.responseText);
//     console.log(data.name);
// }
// req.onerror = function(){
//     console.log('error');
//     console.log(this);
// }
// req.open("GET"," https://swapi.dev/api/people/1")
// req.send();