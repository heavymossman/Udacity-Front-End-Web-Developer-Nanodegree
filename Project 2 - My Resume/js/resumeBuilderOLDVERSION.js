/*
This is empty on purpose! Your code to build the resume will go here.
 */



 var name = "Michael O'Sullivan";
 var formattedName = HTMLheaderName.replace("%data%", name);

 var role = "Front End Web Developer";

 var formattedRole = HTMLheaderRole.replace("%data%", role);


 $("#header").prepend(formattedRole); /* we use prepend to ensure content is delivered at the beginning of the DIV - append delivery it at the end I think */
 $("#header").prepend(formattedName);

 var skills = ["awesome", "programming", "teaching", "JS"];
 
 // $("#main").append(skills[0]);

/*  $("#main").append(skills.length);

var fruits = ["Apple", "Banana"];


var first = fruits[0];
var last = fruits[fruits.length - 1];

console.log(first); 

fruits.forEach(function (item, index, array) {
console.log(item, index);
});

var newLength = fruits.push("Orange");

console.log(fruits);

var uni = "audacity";
console.log(uni);

var newUni = uni[uni.length - 1];
console.log(newUni)
 */

/*

var hi = "Welcome to Michael O'Sullivans Digital Online Resume - ";

var bio = {name:name, role:role, email:"email@michaelosullivan.london", welcomemessage:hi, skills:skills, biopic:"https://pbs.twimg.com/profile_images/491578108063936512/0ixtr84I_400x400.jpeg"};
 
 $("#main").append(bio.welcomemessage);
 
 console.log(bio);


var work = {currentjob:role, employer:"Disrupt and Refine", years:"8 Years", locationbiz:"London"};
console.log(work);

var education = {lastschool:" Udacity in Mountain View"};
console.log(education);

education["years"] = "2015 - 2016";
education["scity"] = "London in New York";

$("#main").append(work.currentjob);
$("#main").append(education.lastschool);

/* var jsoneducation = {"schools": [
	{
		"name": "Udacity University",
		"city": "Mountain View Biatch",
		"major": ["Front End Ninja", "Sexual Relations", "Living the dream"]
		"minors" "Your Mum",
		"grad year": "2016"
	}
	]
}
 
console.log(jsoneducation)

*/