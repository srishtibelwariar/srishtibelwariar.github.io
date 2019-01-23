
function openDia(id) {
	document.getElementById('diacover').style.visibility="visible";
	document.getElementById('dia').style.visibility="visible";
	document.getElementById('body').style.overflow="hidden";
	printout(id);

}


function closeDia() {
	document.getElementById('diacover').style.visibility="hidden";
	document.getElementById('dia').style.visibility="hidden";
	document.getElementById('body').style.overflow="scroll";
}

function darkenDiacover() {
	// document.getElementById('diacover').style.opacity="1";
}

function lightenDiacover() {
	// document.getElementById('diacover').style.opacity="0.85";
}

function scrollNotif() {
  var pos = document.getElementById('dia').scrollTop;
	var height= document.getElementById('dia').scrollHeight-document.getElementById('dia').clientHeight;
	var x= (pos/height)*100;
	document.getElementById('scr').style.width= x+"%";
}

function printout(id) {
	var board= document.getElementById('dia');
	if (id=='web') {
	document.getElementById("h1").innerHTML="New Year, New Me, New Website";
	document.getElementById("h3").innerHTML="Redefining my online brand and presence with a new website.";
	document.getElementById("p").innerHTML=
			"My previous portfolio site was great way for me to demonstrate my interests and highlight some of my projects.  However, it was only the first step.  With the new year, I took on the project of revisiting my online presence and seeing how I can better serve my brand.  This is an ongoing development project that is still being update along with this project details page."
	document.getElementById("p_2").innerHTML=
			"The previous site was a stepping stone, but it had painpoints I wanted to address with my new design.  The following are screenshots of my previous site: <br /><img src=\"asset/oldsite_1.png\" style=\"width:50%;\"><img src=\"asset/oldsite_2.png\" style=\"width:50%;\"><img src=\"asset/oldsite_3.png\" style=\"width:50%;\"><img src=\"asset/oldsite_4.png\" style=\"width:50%;\"><img src=\"asset/oldsite_5.png\" style=\"width:50%;\">"


	} else if (id=='ms') {
	document.getElementById("h1").innerHTML="Microsoft Azure Internship";
	document.getElementById("h3").innerHTML="Explore Internship, Summer 2018";
	document.getElementById("p").innerHTML=
			"Stay Tuned!"

	document.getElementById("p_2").innerHTML=
			" "
	} else if (id=='ski') {
	document.getElementById("h1").innerHTML="Amazon Alexa Skills";
	document.getElementById("h3").innerHTML="Area Calculator and Dice Roller";
	document.getElementById("p").innerHTML=
			"During HackPrinceton Spring 2017, I was relatively new to hackathons and the various technologies students had access to.  I wanted to take this opportunity to work with a technology I had never worked with before: Voice User Interfaces.  During the event, there was an Amazon Alexa workshop.  That workshop was enough to spark an interest to continue attending hackathons.  Though my project was not ready for submission at the time, I took whatever I learned at that short workshop and applied it during my summer break to develop and publish to Amazon Alexa skills:  The Area Calculator and the Dice Roller."
	document.getElementById("p_2").innerHTML=
			" <a href=\"https://www.amazon.com/Srishti-Belwariar-Area-Calculator/dp/B07477LDRN/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1548254465&sr=1-1&keywords=area+calculator\"><img src=\"asset/areaskill.png\" style=\"padding: 5%; width:40%;\"></a><a href=\"https://www.amazon.com/Srishti-Belwariar-Dice-Roller/dp/B073DJGWZ1/ref=sr_1_16?s=digital-skills&ie=UTF8&qid=1548254496&sr=1-16&keywords=dice+roller\"><img src=\"asset/diceskill.png\" style=\"padding: 5%;width:40%;\"></a>"
	} else if (id=='blo') {
	document.getElementById("h1").innerHTML="bLoKaML: the OCaml take on Blokus";
	document.getElementById("h3").innerHTML="CS3110 Final Group Project";
	document.getElementById("p").innerHTML=
			"Stay Tuned!"
	}

}
