
var name = "Michael O'Sullivan";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Front End Web Developer";

var formattedRole = HTMLheaderRole.replace("%data%", role);


 $("#header").prepend(formattedRole); /* we use prepend to ensure content is delivered at the beginning of the DIV - append delivery it at the end I think */
 $("#header").prepend(formattedName);



var bio = {
	'name' : 'Michael OSullivan',
	'role' : 'Front End Web Developer Ninja',
	'contacts' : {
		'mobile': '07869666955',
		'email' : 'email@michaelosullivan.london',
		'github' : 'heavymossman',
		'twitter' : 'heavymossman',
		'location' : 'London'
	},
	'welcomeMessage' : 'Hello Sexy Moss',
	'skills' : ['Front End Web Developer Expert', 'HTML 5', 'CSS', 'Python'],
	'biopic' : 'https://pbs.twimg.com/profile_images/491578108063936512/0ixtr84I_400x400.jpeg'
};

console.log(bio)

var education = {
	'schools' : [
	{ 
		'name' : 'Open University',
		'location' : 'London, UK',
		'degree' : 'Politics Philosophy and Economics',
		'majors' : ['PPE'],
		'dates' : 2016, 
		'url' : "http://www.openuniversity.com"
	},
	{
		'name' : 'Chiswick Community School',
		'location' : 'London, UK',
		'degree' : 'A Levels Silly',
		'majors' : ['Economics', 'Information Technology', 'Theatre Studies', 'Business Studies'],
		'dates' : 2002, 
		'url' : "http://www.chiswickcommunityschool.com"
	}
	],
	'onlineCoures' : [
	{
		'title' : 'Front End Biatch',
		'school' : 'Udacity',
		'date' : 2016,
		'url' : 'http://www.udacity.com'
	}
	]
}

console.log(education)

var work = {
	'jobs' : [
	{
		'employer' : 'Disrupt and Refine',
		'title' : 'Managing Director',
		'location' : 'Google Campus - Old Street, London, UK',
		'dates' : '2008 - 2016',
		'description' : 'I was the daddy - so what??'
	},
	{
		'employer' : 'Globes Services INC',
		'title' : 'CEO',
		'location' : 'Google Campus - Old Street, London, UK',
		'dates' : '2012 - Present',
		'description' : 'I was the daddy - so what??'
	}
	]
};

console.log(work)

var projects = {
	'projects' : [
	{
		'title' : 'Diligence',
		'dates' : '2015 - 2016',
		'description' : 'description will go here',
		'images': [
	       'http://placekitten.com/g/300/300',
	       'http://placekitten.com/g/250/300',
	       'http://placekitten.com/g/350/300'
     ]
	},
	{
		'title' : 'Disrupt and Refine',
		'dates' : 'Managing Director',
		'description' : 'I was the daddy - so what??',
		'images': [
	       'http://placekitten.com/g/300/300',
	       'http://placekitten.com/g/250/300',
	       'http://placekitten.com/g/350/300'
     ]
	}
	]
};

console.log(projects)