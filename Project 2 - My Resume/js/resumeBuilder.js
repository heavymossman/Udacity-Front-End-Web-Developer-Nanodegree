
/*
var name = "Michael O'Sullivan";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Front End Web Developer";

var formattedRole = HTMLheaderRole.replace("%data%", role);


 $("#header").prepend(formattedRole); /* we use prepend to ensure content is delivered at the beginning of the DIV - append delivery it at the end I think */
 // $("#header").prepend(formattedName);

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
	'skills' : ['JaveScript', 'HTML 5', 'CSS', 'Python'],
	'biopic' : 'https://pbs.twimg.com/profile_images/491578108063936512/0ixtr84I_400x400.jpeg'
};


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


var work = {
	'jobs' : [
	{
		'employer' : 'Disrupt and Refine',
		'title' : 'Managing Director',
		'location' : 'Old Street, London, UK',
		'dates' : '2008 - 2016',
		'description' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
	},
	{
		'employer' : 'Globes Services INC',
		'title' : 'CEO',
		'location' : 'NJ, USA',
		'dates' : '2012 - Present',
		'description' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
	}
	]
};


var projects = {
	'projects' : [
	{
		'title' : 'Diligence',
		'dates' : '2015 - 2016',
		'description' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
		'images': [
	       'https://placehold.it/350x350',
	       'https://placehold.it/350x350',
	       'https://placehold.it/350x350'
     ]
	},
	{
		'title' : 'Disrupt and Refine',
		'dates' : 'Managing Director',
		'description' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
		'images': [
	       'https://placehold.it/350x350',
	       'https://placehold.it/350x350',
	       'https://placehold.it/350x350'
     ]
	}
	]
};

function displayBio() {

// Going to try to append bio sections manually 

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name); 
$("#header").prepend(formattedName);

// Contact section: 

for (contact in bio.contacts) {

	var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
	console.log(formattedContact)
	formattedContact = formattedContact.replace("%contact%", contact);
	$("#topContacts").append(formattedContact);
 }

// This section will append the bio pic and the welcome message


var formattedWelcomemsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomemsg);

var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBiopic);


/* This will create the Skills at a glance section */ 

if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]); 
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]); 
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]); 
	$("#skills").append(formattedSkill);
}

} 

displayBio(); //This is how to envoke a function! 

function displayWork() {

// This is the Work Experience section

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	

// This section below ads in the Job title via jQuery at the END of the string. 

	$(".work-entry:last").append(
		formattedEmployerTitle
		);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);


	var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedWorkLocation);
	}
}

displayWork(); //This is how to envoke a function! 

// This section will create the Internalisde Name button on the bottom left of the index page. Clicking it iwll capatilise the Header Name Surname. 

function inName() {



	var finalName = bio.name;
	var names = bio.name.split(" "); //This seperates the string into indivdual strings ("String", "String", "etc")
	names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
   
    return finalName;
    $("#header").prepend(finalName);
}

$("#main").append(internationalizeButton);

inName();

// This section will handle the projects

projects.display = function() {



	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		console.log(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);


		for (image in projects.projects[project].images) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedProjectImage);
		}

	}
}

projects.display();

// This will displaty the map function. 

$("#mapDiv").append(googleMap);

// This will handle the Education section

education.display = function() {



	for (educations in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[educations].name);
		$(".education-entry:last").append(formattedSchool);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[educations].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[educations].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[educations].majors);
		$(".education-entry:last").append(formattedMajor);

		}

	for (onlineCourse in education.onlineCoures) {
		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCoures[onlineCourse].title);
		$(".education-entry:last").append(formattedOnlineTitle);
		var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCoures[onlineCourse].date);
		$(".education-entry:last").append(formattedOnlineDate);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCoures[onlineCourse].school);
		$(".education-entry:last").append(formattedOnlineSchool);
		var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCoures[onlineCourse].url);
		$(".education-entry:last").append(formattedOnlineUrl);
	
	}
}

education.display();


function edu() { 

for (contact in bio.contacts) {

	var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
	console.log(formattedContact)
	formattedContact = formattedContact.replace("%contact%", contact);
	$("#footerContacts").append(formattedContact);
 }

}

edu();