//alert("JavaScript works!");
//James Neuenfeldt
//05/09/2013
//Assignment 01
// Home Security


//My Variables
var strSecurity ="How will I protect myself and my home\?";
var stAlarm = true;
var stescPet = "\"Booker\", is a 100lb Rottweiler \& Retriever Mixed breed dog";
var booBites = true;
var booAlarm = true;
var intBudget = 30;
var intDog = 20;
var intAlarmCost = 25;

//My Outputs all variables
console.log(strSecurity);
//above is string variable
console.log ("Our Budget has only " + intBudget + " dollars left we could use for additional security");
//above is string variable concatinated which includes a number variable
console.log ("We already have a dog, her name is " + stescPet + " and it is " + booBites + " that she will bite");
//above sting ia also concatenated and is a boolean

//Conditionals 

if(booBites === true ) {
    if (intDog <= 20 ) {
        intDog = intDog + 15;
        console.log("we already spend " + intDog + " dollars, We can not buy an alarm also.");
    } else {
        console.log("Okay lets get an alarm also");
    }
}else {
    console.log("Booker doesn't bite, We need an alarm");
}
if(booAlarm === true) {
    console.log("Lets get a professional Alarm.");
    if (stAlarm === true) {
        console.log("Now I feel safe,");
    } else {
        console.log("You need more money.");
    };
} else {
    console.log ("Find another way.");
};