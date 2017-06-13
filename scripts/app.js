window.onload = function() {
	console.log("random loaded");
}



/*
making a random quote generator with 3 arrays
using Math.random and Math.floor
need to declare 3 arrays with items
then use the math function to generate a random index number from the array
then concatenate the array
*/

var arrayThree = ["happy", "Joyus", "wealthy", "beautiful", "healthly"];
var arrayOne = ["mother", "father", "sister", "brother", "child"];
var arrayTwo = ["give", "take", "recieve", "bestow"];


var array1 = Math.floor(Math.random() * (arrayOne.length));
var array2 = Math.floor(Math.random() * (arrayTwo.length));
var array3 = Math.floor(Math.random() * (arrayThree.length));

//var array1 = Math.random()  * arrayOne.length;



var container = document.getElementById("container");
container.innerHTML = ("I hope your " +  arrayOne[array1] + " will always " +  arrayTwo[array2] + " and forever be " +  arrayThree[array3]);

console.log (array1);