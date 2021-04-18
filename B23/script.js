//Create a Request Instance
var req = new XMLHttpRequest();  
// Initiating the connection or create a connection
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();//sending the request
//load the function
// this function will be triggered only when the data has been received successfully
req.onload = function(){
    var data = JSON.parse(this.response); // 'this' represents the current obj
    for (var i=0; i<data.length; i++){
    console.log(data[i].name);
    }
}