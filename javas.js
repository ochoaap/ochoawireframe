
function askuserName(){var userName = prompt("What is your name?");
document.write('<h2>' + 'Hiya, ' + userName + '</h2>');}



var likesuperhero;
    likesuperhero=prompt("Do you like Super Heroes?");
    while(likesuperhero === 'no'){
        likesuperhero=prompt("Do you like Super Heroes?");

    }



function favorite(){ 
var suprhero;
    superhero=prompt("Who is your favorite super hero?");
    alert("Oh, " + superhero + ", they're really cool! Check out mine!")
}


function guessaNumber(){
    var answer = 11;
    for(var i = 0; i < 10; i = i + 1){
        var guessanumber=prompt("Guess a number between 1 and 15");
        if(parseInt(guessanumber) === answer){
            alert("You may enter!")
            break;
        }

        else{
            alert("Nope, try again!")
        }
    }
}
    






askuserName();
favorite();
guessaNumber();

