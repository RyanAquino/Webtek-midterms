var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
today = mm+'/'+dd+'/'+yyyy;

window.onload = function () {
	startUI();
}


function startUI(){
	document.body.innerHTML = "<h1 id='heading'> WELCOME </h1>" +
								"<p class='alignCenter' id='info'> <br> Today is: "+ today + "</p><br>"+
								"<button class='alignCenter' onclick=schedule()> Get schedule! </button>" ;
	
	var info = document.getElementById("info");						
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
	//GUIDE MO
	console.log(firstSched.time);
	console.log(firstSched.data[0].name);	
}
function schedule(){
	var body = document.getElementsByTagName("body");
	var tbl = document.createElement("table");
 	var tblBody = document.createElement("tbody");

 	 var row = document.createElement("tr");
 	 var cell = document.createElement("td");
     var cellText = document.createTextNode("730");

      cell.appendChild(cellText);
      row.appendChild(cell);
      tblBody.appendChild(row);
       tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
 
}