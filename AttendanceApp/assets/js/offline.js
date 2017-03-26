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
	//1030
	var fourthSched ={ "time":"10:30-11:30",
						"data":[
						{"name":"Rhoderic Makil", "room":"s425", "remarks":""},
						{"name":"Maria Concepcion Clemente", "room":"s326", "remarks":""},
						{"name":"Jo Montes", "room":"s542", "remarks":""}
						]
					};
	localStorage.setItem("1030", JSON.stringify(thirdSched));
	var storedFourthSched = JSON.parse(localStorage.getItem("1030"));
//1130
	var fifthSched ={ "time":"11:30-12:30",
						"data":[
						{"name":"Rhoderic Makil", "room":"s425", "remarks":""},
						{"name":"Maria Concepcion Clemente", "room":"s326", "remarks":""},
						{"name":"Jo Montes", "room":"s542", "remarks":""}
						]
					};
	localStorage.setItem("1130", JSON.stringify(thirdSched));
	var storedFifthSched = JSON.parse(localStorage.getItem("1130"));
//1230
var sixthSched ={ "time":"12:30-1:30",
						"data":[
						{"name":"Rhoderic Makil", "room":"s425", "remarks":""},
						{"name":"Maria Concepcion Clemente", "room":"s326", "remarks":""},
						{"name":"Jo Montes", "room":"s542", "remarks":""}
						]
					};
	localStorage.setItem("1230", JSON.stringify(thirdSched));
	var storedSixthSched = JSON.parse(localStorage.getItem("1230"));
//130
	var seventhSched ={ "time":"1:30-2:30",
						"data":[
						{"name":"Rhoderic Makil", "room":"s425", "remarks":""},
						{"name":"Maria Concepcion Clemente", "room":"s326", "remarks":""},
						{"name":"Jo Montes", "room":"s542", "remarks":""}
						]
					};
	localStorage.setItem("130", JSON.stringify(thirdSched));
	var storedSeventhSched = JSON.parse(localStorage.getItem("130"));
//230
var eigthSched ={ "time":"2:30-3:30",
						"data":[
						{"name":"Rhoderic Makil", "room":"s425", "remarks":""},
						{"name":"Maria Concepcion Clemente", "room":"s326", "remarks":""},
						{"name":"Jo Montes", "room":"s542", "remarks":""}
						]
					};
	localStorage.setItem("230", JSON.stringify(thirdSched));
	var storedEightSched = JSON.parse(localStorage.getItem("230"));
//330
	var ninthSched ={ "time":"3:30-4:30",
						"data":[
						{"name":"Rhoderic Makil", "room":"s425", "remarks":""},
						{"name":"Maria Concepcion Clemente", "room":"s326", "remarks":""},
						{"name":"Jo Montes", "room":"s542", "remarks":""}
						]
					};
	localStorage.setItem("330", JSON.stringify(thirdSched));
	var storedSecondSched = JSON.parse(localStorage.getItem("330"));
//430
var tenthSched ={ "time":"4:30-5:30",
						"data":[
						{"name":"Rhoderic Makil", "room":"s425", "remarks":""},
						{"name":"Maria Concepcion Clemente", "room":"s326", "remarks":""},
						{"name":"Jo Montes", "room":"s542", "remarks":""}
						]
					};
	localStorage.setItem("430", JSON.stringify(thirdSched));
	var storedSecondSched = JSON.parse(localStorage.getItem("430"));
//530
var eleventhSched ={ "time":"5:30-6:30",
						"data":[
						{"name":"Rhoderic Makil", "room":"s425", "remarks":""},
						{"name":"Maria Concepcion Clemente", "room":"s326", "remarks":""},
						{"name":"Jo Montes", "room":"s542", "remarks":""}
						]
					};
	localStorage.setItem("530", JSON.stringify(thirdSched));
	var storedSecondSched = JSON.parse(localStorage.getItem("530"));

// END LOCAL STORAGE

window.onload = function () {
	startUI();
}


function startUI(){
	document.body.innerHTML = "<h1 class='heading'> WELCOME </h1>" +
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
 	var head = document.createElement("h2");
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
  	head.setAttribute("onclick", "seven()");
  	// 830==========================================================
 	var head1 = document.createElement("h2");
    var cellText1 = document.createTextNode(secondSched.time);

    head1.appendChild(cellText1);
    cell.appendChild(head1);
  	head1.setAttribute("onclick", "back()");
  	// 930==========================================================
  	var head2 = document.createElement("h2");
  	var cellText2 = document.createTextNode(thirdSched.time);

  	head2.appendChild(cellText2);
    cell.appendChild(head2);
  	head2.setAttribute("onclick", "back()");

}

	

function back(){
	document.body.innerHTML = "<h1> BGONG UI </h1> <button onclick='startUI()'> CANCEL </button>";

}
function seven(){
	console.log('seven');
	document.body.innerHTML = "<h1> 730 Schedule </h1> <button onclick='startUI()'> CANCEL </button>";

	var body = document.getElementsByTagName("body");
	var table = document.createElement("table");
 	var tblBody = document.createElement("tbody");
 	var tr = document.createElement("tr");
 	var td = document.createElement("td");

 	var head = document.createElement("h1");
 	var text;
 	// head.appendChild(text);
 	// td.appendChild(head);
 	// tr.appendChild(td);
 	// tblBody.appendChild(tr);
 	// table.appendChild(tblBody);
 	// document.body.appendChild(table);
 	// table.setAttribute("border", "1");
 	// firstSched.data[i].name
 	// firstSched.data[i].room
 	
 	// ==KULANG PA YUNG data[i].room
	 for(var i = 0; i < firstSched.data.length; i++){
	 	text=document.createTextNode(firstSched.data[i].name);
		head.appendChild(text);
	 	td.appendChild(head);
	 	tr.appendChild(td);
	 	tblBody.appendChild(tr);
	 	table.appendChild(tblBody);
	 	document.body.appendChild(table);
	 }

}