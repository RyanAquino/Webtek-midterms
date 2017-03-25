var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
today = mm+'/'+dd+'/'+yyyy;

//LOCAL STORAGE
var info = document.getElementById("info");		
// 730				
	var firstSched ={ "time":"7:30-8:30",
						"data":[
						{"name":"Jo Montes", "room":"s542", "remarks":""},
						{"name":"Maria Concepcion Clemente", "room":"s326", "remarks":""},
						{"name":"Rhoderic Makil", "room":"s425", "remarks":""},
						{"name":"Beverly Ferrer", "room":"s522", "remarks":""},
						{"name":"Ali Mangaliag", "room":"s523", "remarks":""}
						]
					};
	localStorage.setItem("730", JSON.stringify(firstSched));
	var storedFirstSched = JSON.parse(localStorage.getItem("730"));
//830
	var secondSched ={ "time":"8:30-9:30",
						"data":[
						{"name":"Maria Concepcion Clemente", "room":"s326", "remarks":""},
						{"name":"Beverly Ferrer", "room":"s522", "remarks":""},
						{"name":"Jo Montes", "room":"s542", "remarks":""},
						{"name":"Ali Mangaliag", "room":"s523", "remarks":""},
						{"name":"Rhoderic Makil", "room":"s425", "remarks":""}
						]
					};
	localStorage.setItem("830", JSON.stringify(secondSched));
	var storedSecondSched = JSON.parse(localStorage.getItem("830"));
//930
	var thirdSched ={ "time":"9:30-10:30",
						"data":[
						{"name":"Rhoderic Makil", "room":"s425", "remarks":""},
						{"name":"Maria Concepcion Clemente", "room":"s326", "remarks":""},
						{"name":"Jo Montes", "room":"s542", "remarks":""}
						]
					};
	localStorage.setItem("930", JSON.stringify(thirdSched));
	var storedSecondSched = JSON.parse(localStorage.getItem("930"));

// END LOCAL STORAGE

window.onload = function () {
	startUI();
}


function startUI(){
	document.body.innerHTML = "<h1 id='heading'> WELCOME </h1>" +
								"<p class='alignCenter' id='info'> <br> Today is: "+ today + "<br>Select Schedule: </p>";
								
	//GUIDE MO
	console.log(firstSched.time);
	console.log(firstSched.data[0].name);	
	// 730==========================================================
	var body = document.getElementsByTagName("body");
	var tbl = document.createElement("table");
 	var tblBody = document.createElement("tbody");

 	var row = document.createElement("tr");
 	var cell = document.createElement("td");
 	var head = document.createElement("h1");
    var cellText = document.createTextNode(firstSched.time);

    head.appendChild(cellText);
    cell.appendChild(head);
    row.appendChild(cell);
    tblBody.appendChild(row);
    tbl.appendChild(tblBody);
 	// appends <table> into <body>
  	document.body.appendChild(tbl);
 	// sets the border attribute of tbl to 2 and Id to myTable;
 	tbl.setAttribute("border", "2");
  	tbl.setAttribute("id", "myTable");
  	head.setAttribute("onclick", "back()");
  	// 830==========================================================
 	var head1 = document.createElement("h1");
    var cellText1 = document.createTextNode(secondSched.time);

    head1.appendChild(cellText1);
    cell.appendChild(head1);
  	head1.setAttribute("onclick", "back()");

}

	

function back(){
	document.body.innerHTML = "<h1> BGONG UI </h1> <button onclick='startUI()'> CANCEL </button>";

}