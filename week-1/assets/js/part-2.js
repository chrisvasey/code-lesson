/*
	Let's start with Strings.
	Strings are lengths of letters and numbers that are wrapped in quotes e.g "Chris" or '07711825795'.
	Note how you can use either single or double speech marks? It doesn't really matter and if someone tells you it does then you can ignore them 🙃

	Let's see how this works, let me know your name:
*/
var name = null;



/*
	This is an integer (Number), we normally use these when we need to do Maths e.g add, subtract.
	We will go into this more later but for now, tell me your age:
*/
var age = null;



/*
	This is a Boolean which is a fancy way of sayig true/false.
	They are useful for anything there there are only too options e.g Is the document saved? true/false

	Let me know if youo are alive
*/
var alive = null;


/*
	Next let's create an Array.
	Array collections are shown in JS with the [] brackets and comma seperated items between them e.g [true, 'blue' 88]
	An array is the plural of hedgehog but for some reason we also use it in programming to describe a collection of items.
	So in that vain, give me 3 hedgehog names..	
*/
var hedgehogs = ['', '', ''];


//When you refresh the page, go check the browser console.
console.log("My name is "+name+".");
console.log("I am "+age+' years old.');
console.log("If I had 3 hedgehogs I would name them "+hedgehogs[0]+", "+hedgehogs[1]+" and "+hedgehogs[2]+".");

//The if statement here is checking to see if the value for Alive is ture, we will go more into if statemets later
if (alive) {
	//If alive is true
	console.log("I am alive");
} else {
	//else do this
	console.log("I am not alive");
}

/*
	This is what an object looks like, why don't you try outputting it into the browser console to see what this looks like.
*/
var person = {
	name: name,
	age: age,
	alive: alive,
	petHedgehogs: hedgehogs
}
//console.log(person) - Let'stry get the age only