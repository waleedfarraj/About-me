'use strict'

var score = 0

function nationality(){
    var question1 = prompt('AM I jordanian ?' )
    switch(question1.toLowerCase()){
        case "yes":
        case " y " :
            //console.log("you are right !")
        alert("you are right !")
        score = score + 1
        break;
        case "no":
        case "n":
            //console.log("you are wrong")
        alert("you are wrong")
        break;
        default:
        alert("answer with yes /y or no /n only .")
    }
    
}
nationality();

function studying(){
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
        score = score + 1
        break;
        default:
        alert("answer with yes /y or no /n only .")
    }
}
studying();


function sleeping(){
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
        score = score + 1
        break;
        default:
        alert("answer with yes /y or no /n only .")
    }
}
sleeping();

function hair(){
    var question4 = prompt("Do i have black hair?")
    switch(question4.toLowerCase()){
        case "yes":
        case "y" :
            //console.log("you are right !")
        alert("you are right !")
        score = score + 1
        break;
        case "no":
        case "n":
            //console.log("you are wrong")
        alert("you are wrong")
        break;
        default:
        alert("answer with yes /y or no /n only .")
    }
}
hair()

function smoking(){
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
        score = score + 1
        break;
        default:
        alert("answer with yes /y or no /n only .")
    
    }
}
smoking();

function userNameEntry(){
    var userName = prompt("what is your name ?")
alert("Welcome to the site "+ userName);
var number
}
userNameEntry();

function favouriteNumber(){
    for (var i = 0; i < 4 ;i++){
       var  number = prompt("what is my age?")
        if (number > 25 ){
            alert("too high")
        } else if (number < 25 ){
            alert("too low") 
        }else if (number == 25){
            alert("right answer!")
            score = score + 1
        }
    }
    alert("The correct answer was 25");
    console.log("what is my age?")
    
}
favouriteNumber();
var x =0
    var favNumbers = Math.floor((Math.random() * 100) + 1);
    var y = true
    

    console.log(favNumbers)
function guessingNumber(){
    do {
        var guess = prompt("Feeling lucky guess a random number from 1-100 (u have 6 attemps)")
         x=x+1
         for(var d= 0 ;d <4;d++){
             if (favNumbers[d]== guess) {y= false}
             // console.log (y)
         }
         if (y === false ){
             alert("correct answer!")
             score = score + 1
         }
     }while(x <6 && y );
}
guessingNumber();



alert("the correct answers were" + favNumbers);
alert("your score is "+ score +" out of 7 ")
