
var sec = 1;
function sayHello(){
    console.log("after " + sec + " seconds");
    sec++;
    if(sec == 6){
       clearInterval(id); //here passing the instance of setInterval to clear the interval
       return;
    }
}
//setTimeout(sayHello, 5000);
var id = setInterval(sayHello, 2000)  //here we are running the sayHello function after 2 sec.