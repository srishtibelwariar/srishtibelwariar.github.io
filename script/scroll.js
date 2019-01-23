

function whitenNavBar() {
	var x= window.pageYOffset;
	var y= (document.getElementById("header_container").offsetHeight- document.getElementById("index_navbar").offsetHeight)/3 ;

	if (x > y) { document.getElementById("index_navbar").classList.add("outhead");
	document.getElementById("navlogo").src='asset/logobw.png';}
else {
	document.getElementById("index_navbar").classList.remove ("outhead");
	document.getElementById("navlogo").src='asset/logowhite.png';}
}
