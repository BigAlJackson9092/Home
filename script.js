var box = document.getElementById("search_box"); 
// this should catch most URLs, or at least the ones I would type.
var urlPattern = new RegExp("^(https?://)?[^ ]+[.][^ ]+([.][^ ]+)*(/[^ ]+)?$");
// search for text in text box
function chgR(){
	var searchdiv =document.getElementsByClassName("searchdiv")[0];
	searchdiv.style["boxShadow"] = ("0px 0px 10px 2px red");
	document.getElementById('hr1') .style["boxShadow"] = ("0px 0px 6px 0.75px red");
	document.getElementById('hr2') .style["boxShadow"] = ("0px 0px 6px 0.75px red");
}
function chgW(){
	var searchdiv =document.getElementsByClassName("searchdiv")[0];
	searchdiv.style["boxShadow"] = ("0px 0px 10px 2px white");
	document.getElementById('hr1') .style["boxShadow"] = ("0px 0px 6px 0.75px white");
	document.getElementById('hr2') .style["boxShadow"] = ("0px 0px 6px 0.75px white");
}
function search() {
	console.log("Googling \"" + box.value + "\"");
	console.log("Encoded query: \n" + encodeURIComponent(box.value));
	document.location.href = "https://www.bing.com/search?q=" + encodeURIComponent(box.value);
}

// if not search, nav to somewhere
function nav(address) {
	// if the address starts with "https?|ftp ://"
	if (new RegExp("^(?:(?:https?|ftp):\/\/).*").test(address)) {
		document.location.href = address;
	} else {
		document.location.href = "http://" + address;
	}
}

// Handle enter key press in text box
// also handle the command parsing in the event that the text in the box is a command
function searchKeyPress(e) {
	e = e || window.event;
	if (e.keyCode == 13) {
		parseCom(box.value);
	}
	
	// first, handle known cases of preset commands
}

// parse the user's command
function parseCom(com) {
	// misc commands
	if (new RegExp("^in$").test(com)) {
		nav("http://inbox.google.com");
	}
	else if (new RegExp("^dr$").test(com)) {
		nav("http://drive.google.com");
	}
	else if (new RegExp("^sp$").test(com) || new RegExp("^spd$").test(com)) {
		nav("http://www.speedtest.net");
	}
	else if (new RegExp("^ps$").test(com)) {
		nav("http://tollandschool.powerschool.com/public");
	}
	// ... but is a valid URL
	else if (urlPattern.test(com)) {
		nav(com);
	}
	// ... or should be searched
	else {
		search();
	}
}