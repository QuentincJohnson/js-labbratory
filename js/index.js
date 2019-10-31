//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."

let profesion = "Dentist";
let place = "Shabuya"; 
let money = 80000;
let company = "HappyTeeth";
console.log('you will be a '+ profesion + 'in ' + place  + 'making $' + money + ' for ' + company);

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: "They are NN years old.", substituting the values.

var CurrYear = 2019;
var BirthYear = 2000;

let Age = CurrYear - BirthYear;
console.log('you are currently '+ Age)

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

Age = 19;
let MaxAge = 75;
let PerDay = 5;

let PerLife = (MaxAge - Age)* PerDay;

console.log('You will need '+PerLife+' to last you until the ripe old age of '+MaxAge);


//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

let radius = 5;
let circumference = radius*2
let area = 3.14159265359*(radius*radius)
console.log("The circumference is "+circumference+" The area is "+area) 

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let cel = 17
let far = (cel * 9/5) + 32;
console.log(cel+"°C is "+far+" °F")


far = 80;
cel = (far - 32) * 5/9;
console.log(far+" °F is "+cel+"°C.")