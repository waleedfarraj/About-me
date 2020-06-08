'use strict'

var question1 = prompt('AM I jordanian ?' )
switch(question1.toLowerCase()){
    case "yes":
    case " y " :
        //console.log("you are right !")
    alert("you are right !")
    break;
    case "no":
    case "n":
        //console.log("you are wrong")
    alert("you are wrong")
    default:
    alert("answer with yes /y or no /n only .")



}


var question2 = prompt('Did i study art in university ?')
switch(question2.toLowerCase()){
    case "yes":
    case "y" :
    //console.log("you are wrong")
    alert("you are wrong")
    break;
    case "no":
    case "n":
    //console.log("you are right !")
    alert("you are right !")
    default:
    alert("answer with yes /y or no /n only .")
}

var question3 = prompt("Do i sleep 8 hours a day ?")
switch(question3.toLowerCase()){
    case "yes":
    case "y" :
      //  console.log("you are wrong")
    alert("you are wrong i wish i did !")
    break;
    case "no":
    case "n":
        //console.log("you are right !")
    alert("you are right !")
    default:
    alert("answer with yes /y or no /n only .")
}
var question4 = prompt("Do i have black hair?")
switch(question4.toLowerCase()){
    case "yes":
    case "y" :
        //console.log("you are right !")
    alert("you are right !")
    break;
    case "no":
    case "n":
        //console.log("you are wrong")
    alert("you are wrong")
    default:
    alert("answer with yes /y or no /n only .")



}


var question5 = prompt("Do i smoke ?")

switch(question5.toLowerCase()){
    case "yes":
    case "y" :
       // console.log("you are wrong")
    alert("you are wrong")
    break;
    case "no":
    case "n":
        //console.log("you are right !")
    alert("you are right !")
    default:
    alert("answer with yes /y or no /n only .")

}
var userName = prompt("what is your name ?")
alert("Welcome to the site "+ userName)