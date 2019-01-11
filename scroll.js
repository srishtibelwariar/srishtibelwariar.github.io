

function whitenNavBar() {
	var x= window.pageYOffset;
	var y= (document.getElementById("header_container").offsetHeight- document.getElementById("index_navbar").offsetHeight)/2 ;

	if (x > y) { document.getElementById("index_navbar").classList.add("outhead") ;}
else {document.getElementById("index_navbar").classList.remove ("outhead");}
}
