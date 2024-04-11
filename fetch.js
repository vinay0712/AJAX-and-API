//fetch is used to get request from API
//fetch usually return promises which can
//be resolved and rejected



// fetch(" https://swapi.dev/api/people/1")
//     .then(res => {
//         console.log("It resloved", res);
//         return res.json();

//     })
//     .then(data => {
//         console.log(data.name);
//         return fetch(" https://swapi.dev/api/people/2")

//     }).then(resolve => {
//         console.log("it worked", resolve);
//         return resolve.json();
//     })
//     .then(data=>{
//         console.log(data.name)
//     })
//     .catch(err => {
//         console.log("it didnt worked", err)
//     })
//     .catch(err => {
//         console.log('error');
//         console.log(err);
//     })
const loadStarWarPeople =  async () => {
   try{
    const res =await fetch(" https://swapi.dev/api/people/1");
   const data = await res.json();
   console.log(data.name);
   const res2 =await fetch(" https://swapi.dev/api/people/2");
   const data2 = await res2.json();
   console.log(data2.name);
   }catch(e){
    console.log('the error is ',e);
   }
}
loadStarWarPeople();