var box = document.getElementById("search_box"); 
// this should catch most URLs, or at least the ones I would type.
var urlPattern = new RegExp("^(https?://)?[^ ]+[.][^ ]+([.][^ ]+)*(/[^ ]+)?$");
var isfocused = false;
// search for text in text box
function chgR(){
	var searchdiv = document.getElementsByClassName("searchdiv")[0];
	searchdiv.style["boxShadow"] = ("0px 0px 18px 2px #700000, 0px 0px 10px 2px red");
	document.getElementById('hr1') .style["boxShadow"] = ("0px 0px 4px 0.5px red");
	document.getElementById('hr2') .style["boxShadow"] = ("0px 0px 4px 0.5px red");
}
function chgW(){
	var searchdiv =document.getElementsByClassName("searchdiv")[0];
	searchdiv.style["boxShadow"] = ("0px 0px 12px 2px #700000");
	document.getElementById('hr1') .style["boxShadow"] = ("0px 0px 4px 0.5px #700000");
	document.getElementById('hr2') .style["boxShadow"] = ("0px 0px 4px 0.5px #700000");
}
function search() {
	console.log("Googling \"" + box.value + "\"");
	console.log("Encoded query: \n" + encodeURIComponent(box.value));
	document.location.href = "https://www.google.com/search?q=" + encodeURIComponent(box.value);
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
	if (new RegExp("^(-g) .+$").test(com)){ //-g will search using google no matter what is in the string, 
						//so you can search for bing on google or 
		var soviet= com.replace(new RegExp("^-g\ "), "") //gets rid of the '-g' in the string.
		document.location.href = "https://www.google.com/search?q=" + encodeURIComponent(soviet);
	}
	else if (new RegExp("^-in$").test(com)){
		nav("http://inbox.google.com");
	}
	else if (new RegExp("^dr$").test(com)) {
		nav("http://drive.google.com");
	}
	else if (new RegExp("^sp$").test(com) || new RegExp("^spd$").test(com)) {
		nav("http://www.speedtest.net");
	}
	else if (new RegExp("^gh$").test(com)) {
		nav("https://github.com");
	}
	else if (new RegExp("^roll$").test(com)){
		nav("http://roll20.net")	
	}
	else if (new RegExp("^ai$").test(com)){
		nav("http://ai2.appinventor.mit.edu")	
	}
	else if(new RegExp("^mw$").test(com)){
		nav("http://www.myth-weavers.com")
	}
	else if(com.startsWith("pf")==true){

		if(new RegExp("(^((pf) (-a|-m|-e|-sp|-sk|-b|-r|-c) .+)$)|(^(pf .+)$)").test(com)){
			var communism = com.split("-"); //gets rid of the "pf" from the string
			// communism = communism.replace(new RegExp("(-a|-m|-e|-sp|-sk|-b|-r|-c)\ "), "");
				//gets rid of the options fromn the string, so it knows what you are searching for
			console.log(communism.shift());
			switch(communism[0]){
			case "a": //all
				communism = communism.split(" ");
				console.log( communism.shift() );
				communism.join(" ");
				document.location.href = "http://cse.google.com/cse?cx=006680642033474972217:6zo0hx_wle8&q=test#gsc.tab=0&gsc.q=" + encodeURIComponent(communism) + "&gsc.sort=&gsc.page=1";
			break;
			case "m": //magic items
				communism = communism.split(" ");
				console.log( communism.shift());
				communism.join(" ");
				document.location.href = "http://cse.google.com/cse?cx=006680642033474972217:6zo0hx_wle8&q=test#gsc.tab=0&gsc.q=" + encodeURIComponent(communism) + "&gsc.sort=&gsc.page=1&gsc.ref=more%3Amagic_items";
			break;
			case "e": //equipment
				communism = communism.split(" ");
				console.log ( communism.shift() );
				communism.join(" ");
				document.location.href = "http://cse.google.com/cse?cx=006680642033474972217:6zo0hx_wle8&q=test#gsc.tab=0&gsc.q=" + encodeURIComponent(communism) + "&gsc.sort=&gsc.page=1&gsc.ref=more%3Aequipment";	
			break;
			case "sp": //spells
				communism = communism.split(" ");
				console.log(communism.shift());
				communism.join(" ");
				document.location.href = "http://cse.google.com/cse?cx=006680642033474972217:6zo0hx_wle8&q=test#gsc.tab=0&gsc.q=" + encodeURIComponent(communism) + "&gsc.sort=&gsc.page=1&gsc.ref=more%3Aspells";
			break;
			case "sk"://skills
				communism = communism.split(" ");
				console.log(communism.shift());
				communism.join(" ");
				document.location.href = "http://cse.google.com/cse?cx=006680642033474972217:6zo0hx_wle8&q=test#gsc.tab=0&gsc.q=" + encodeURIComponent(communism) + "&gsc.sort=&gsc.page=1&gsc.ref=more%3Askills";
			break;
			case "b": //bestiary
				communism = communism.split(" ");
				console.log(communism.shift());
				communism.join(" ");
				document.location.href = "http://cse.google.com/cse?cx=006680642033474972217:6zo0hx_wle8&q=test#gsc.tab=0&gsc.q=" + encodeURIComponent(communism) + "&gsc.sort=&gsc.page=1&gsc.ref=more%3Abestiary";
			break;
			case "r": //races
				communism = communism.split(" ");
				console.log(communism.shift());
				communism.join(" ");
				document.location.href = "http://cse.google.com/cse?cx=006680642033474972217:6zo0hx_wle8&q=test#gsc.tab=0&gsc.q=" + encodeURIComponent(communism) + "&gsc.sort=&gsc.page=1&gsc.ref=more%3Araces";
			break;
			case "c": //classes
				communism = communism.split(" ");
				console.log(communism.shift());
				communism.join(" ");
				document.location.href = "http://cse.google.com/cse?cx=006680642033474972217:6zo0hx_wle8&q=test#gsc.tab=0&gsc.q=" + encodeURIComponent(communism) + "&gsc.sort=&gsc.page=1&gsc.ref=more%3Aclasses";
			break;
			default:
				document.location.href = "http://cse.google.com/cse?cx=006680642033474972217:6zo0hx_wle8&q=test#gsc.tab=0&gsc.q=" + encodeURIComponent(communism[0]) + "&gsc.sort=&gsc.page=1";
			break;
		
		}	
		}else if(new RegExp("^pf$").test(com)){
		nav("http://www.d20pfsrd.com")
		}
	}else if(new RegExp("^bing .+$").test(com) || new RegExp(("^-b .+$")).test(com)) {
	  	var communist = com.replace(new RegExp("^bing +"), "");
	  	communist = communist.replace(new RegExp("^-b *"), "");
  		document.location.href = "https://www.bing.com/search?q=" + encodeURIComponent(communist);
    	}else if (new RegExp(("^ddg .+$")).test(com) || new RegExp(("^-d .+$")).test(com)){
        	var stalin = com.replace(new RegExp("^ddg +"), "");
        	stalin = stalin.replace(new RegExp("^-d +"), "");
  		document.location.href = "https://www.duckduckgo.com/?q=" + encodeURIComponent(stalin);
	}else if (urlPattern.test(com)) {
		nav(com);
	}
	// ... or should be searched
	else {
		search();
    }
}
