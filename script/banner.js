function generateNodes() {
  var num= 32;
	// var xWindowSize= document.getElementById("animation_panel").offsetWidth;
	// var yWindowSize= document.getElementById("animation_panel").offsetHeight;

	// alert(xWindowSize);
	for (i=0; i<num; i++){
			var x= Math.round((Math.random()*100));
			var y= Math.round((Math.random()*100));
			var node= document.createElement("div");
			node.classList.add("node");
			node.style.left = x+ "%";
			node.style.top = y+"%" ;
			(document.getElementById("animation_panel")).appendChild(node);
			// animate(node);
	}
}

function animate(node) {

}

function draw_canvas() {
	var x= window.innerWidth;
	var y= (document.getElementById("header_container").offsetHeight);
	var canvas = document.getElementById('mycanvas');

canvas.setAttribute('width', x);
canvas.setAttribute('height', y);

}

// <script>var canvas;
// var ctx;
// var circleX = 450;
// var circleY = 50;
// var g = 9.81/10;
// var v = 0;
// var maxv = 0;
// var damping = 0.8;
//
// window.onload = function() {
// canvas = document.getElementById('mycanvas');
// ctx = canvas.getContext('2d');
// canvas.addEventListener('click', onClick);
// var id = requestAnimationFrame(animate);
// };
//
// function onClick(e) {
// circleX = e.clientX - canvas.offsetLeft;
// circleY = e.clientY - canvas.offsetTop;
// v = 0;
// maxv = 0;
// }
//
// function animate(timestamp) {
// v += g;
// circleY += v;
//
// if (circleY > canvas.height - 20) {
// circleY = canvas.height - 20;
// v *= -damping;
// }
//
// drawBall();
// updateStatus();
// var id = requestAnimationFrame(animate);
// }
//
// function drawBall() {
// ctx.clearRect(0, 0, canvas.width, canvas.height);
// ctx.beginPath();
//
// ctx.arc(circleX, circleY, 20, 0, 2*Math.PI);
// ctx.fillStyle = "lightBlue";
// ctx.lineWidth = 1;
// ctx.strokeStyle = "black";
// ctx.fill();
// ctx.stroke();
// }
//
// function updateStatus() {
// document.getElementById('velocity').innerHTML = "V: " + v;
// if (v > maxv) maxv = v;
// document.getElementById('maxv').innerHTML = "Max V:" + maxv + " G: " + g + " X:" + circleX + " Y:" + circleY;
// }
// </script>

// function rollBall() {
//  document.getElementById("ball").classList.add("rolls");
// 	 document.getElementById("ball").classList.add("againstwall");
// }

// function whitenNavBar() {
// 	var x= window.pageYOffset;
// 	var y= (document.getElementById("header_container").offsetHeight- document.getElementById("index_navbar").offsetHeight)/2 ;
//
// 	if (x > y) { document.getElementById("index_navbar").classList.add("outhead");
// 	document.getElementById("navlogo").src='logobw.png';}
// else {
// 	document.getElementById("index_navbar").classList.remove ("outhead");
// 	document.getElementById("navlogo").src='logowhite.png';}
// }
