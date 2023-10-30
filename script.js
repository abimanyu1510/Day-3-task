//QUESTION:-1
let obj1={name:"persion 1",age:5};
let obj2={age:5,name:"persion 1"};
let json1=JSON.stringify(obj1);
let json2=JSON.stringify(obj2);
if(json1===json2)
{
    console.log("both are equal");
}
else{
    console.log("both are different")
}
//-----------------------------------------------------------
//QUESTION-2:-
var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload =function(){
var data =request.response;
//console.log(data);
var result =JSON.parse(data);
console.log(result);
for(var i=0;i<result.length;i++){
    console.log(result[i].flags.png)
}
}
//------------------------------------------------------
//QUESTION-3:-
var request1 =new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload =function(){
var data1 =request1.response;
//console.log(data);
var result1 =JSON.parse(data1);
console.log(result1);
for(var i=0;i<result1.length;i++){
    console.log(result1[i].name.common,result1[i].region,result1[i].subregion,result1[i].population)
}
}