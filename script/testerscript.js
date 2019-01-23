function openDesc() {
		var body = document.getElementById("body");
		var box = document.getElementById("v1");
		// var pg = document.getElementById("page");
		var c = document.getElementById("screen");

		body.classList.add("freeze");
		box.classList.add("visible_desc");
		c.classList.add("cover");
}

function closeDesc() {
		var body = document.getElementById("body");
		var box = document.getElementById("v1");
		// var pg = document.getElementById("page");
		var c = document.getElementById("screen");

		body.classList.remove("freeze");
		box.classList.remove("visible_desc");
		c.classList.remove("cover");
}
