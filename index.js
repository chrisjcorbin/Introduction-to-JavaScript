/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 18;
let age = 38;

if (age > 18){
}

console.log(true);



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let yourSpeed = 'Youre going Too Fast!';
let speed = 50;

if(speed <= 55){
    yourSpeed = 'Your speed is Perfect! No ticket for you!';
}

console.log(yourSpeed);


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

Number('1999'); 

console.log(Number('1999'));

//Task d: Write a function to multiply a*b 

function multiply(a,b){
    return a * b;
}

console.log(multiply(13,3));


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(age){
    return(age * 7);
}

console.log(dogYears(38));



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogFood(weight, age){
    if(age >= 1){
        if(weight <= 5){
            return(weight * .05);
        }else if (weight <= 10){
            return(weight * .04);
        }else if (weight <= 15){
            return(weight * .03);
        }else if (weight > 15){
            return(weight * .02);
        }
    }else if(age < 1){
        if(weight > 2){
            return(weight * .10);
        }else if (weight > 4){
            return(weight * .05);
        }else if (weight > 7){
            return(weight * .04);
    }
}
}  

console.log(dogFood(15, 1));



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function rps(rpsChoice){
    if(rpsChoice = 'rock'){
        user = 0;
    }
    if(rpsChoice = 'paper'){
        user = 1;
    }
    if(rpsChoice = 'scissors'){
        user = 2;
    } 

    let computer = Math.floor(Math.random()*3);

    if(user === computer){
        return('You Tie...');
    } else if(user === 0,computer === 2){
        return('You Win!');
    } else if(user === 0,computer === 1){
        return('You Lose.');
    } else if(user === 1,computer === 0){
        return('You Win!');
    } else if(user === 1,computer === 2){
        return('You Lose.');
    } else if(user === 2,computer === 1){
        return('You Win!');
    } else if(user === 2,computer === 0){
        return('You Lose.');
    }
}

console.log(rps('scissors'));
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmToM(km){
    return(km * 0.621371 + ' Miles');
}

console.log(kmToM(42));



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function ftTocm(feet){
    return(feet * 30.48 + ' Centimeters');
}

console.log(ftTocm(6));



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(sodaBottles){
    for (let sb = sodaBottles; sb >= 1; sb--){
        console.log(sb + ' bottles of soda on the wall... ' + sb + ' bottles of soda... take one down pass it around... ' +  (sb - 1) + ' bottles of soda on the wall.');
        if(sb <= 1){
            return('Now theres no more soda bottles on the wall, go home!');
        }
    }
}

console.log(annoyingSong(7));




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function letterGrade(input){
    if(input > 90){
        return('You got an A!');
    }else if(input > 80){
        return('You got a B.');
    }else if(input > 70){
        return('You got a C.');
    }else if(input > 60){
        return('You got a D.');
    }else if(input < 60){
        return('You got a F!');
    }
}

console.log(letterGrade(81));
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

let rppsChoice = window.prompt('Do you choose rock, paper, or scissors?: ');
alert('You chose ' + rppsChoice + ' !');

function rpps(rppsChoice){
    if(rppsChoice = 'rock'){
        user = 0;
    }
    if(rppsChoice = 'paper'){
        user = 1;
    }
    if(rppsChoice = 'scissors'){
        user = 2;
    } 

    let computer = Math.floor(Math.random()*3);

    if(user === computer){
        console.log('You Tie...');
    } else if(user === 0,computer === 2){
        console.log('You Win!');
    } else if(user === 0,computer === 1){
        console.log('You Lose.');
    } else if(user === 1,computer === 0){
        console.log('You Win!');
    } else if(user === 1,computer === 2){
        console.log('You Lose.');
    } else if(user === 2,computer === 1){
        console.log('You Win!');
    } else if(user === 2,computer === 0){
        console.log('You Lose.');
    }
}
result = rpps(rppsChoice);