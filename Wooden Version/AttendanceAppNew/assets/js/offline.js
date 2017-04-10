var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
today = mm+'/'+dd+'/'+yyyy;

//global variables
var saveChecker730 = true;
var saveChecker830 = true;
var saveChecker930 = true;
var saveChecker1030 = true;
var saveChecker1130 = true;
var saveChecker1230 = true;
var saveChecker130 = true;
var saveChecker230 = true;
var saveChecker330 = true;
var saveChecker430 = true;
var saveChecker530 = true;
//dito ma store yung may mga absent/late
var firstSchedNew ={"time":"730-830",
					"data": [ ]
					};
var secondSchedNew ={"time":"830-930",
					"data": [ ]
					};
var thirdSchedNew ={"time":"930-1030",
					"data": [ ]
					};
var fourthSchedNew ={"time":"1030-1130",
					"data": [ ]
					};
var fifthSchedNew ={"time":"1130-1230",
					"data": [ ]
					};
var sixthSchedNew ={"time":"1230-130",
					"data": [ ]
					};
var seventhSchedNew ={"time":"130-230",
					"data": [ ]
					};
var eightSchedNew ={"time":"230-330",
					"data": [ ]
					};
var ninthSchedNew ={"time":"330-430",
					"data": [ ]
					};
var tenthSchedNew ={"time":"430-530",
					"data": [ ]
					};
var eleventhSchedNew ={"time":"530-630",
					"data": [ ]
					};

window.onload = function () {
	startUI();
}


function startUI() {
	document.body.innerHTML = "<h1 class='heading'> Hello, User! </h1>" +
								"<p class='alignCenter' id='info'> <br> Today is: "+ today + "<br>Select Schedule: </p>";
								
	if(localStorage.length == 0){
		var p = document.createElement("p");
		var ptxt = document.createTextNode("Sorry, You haven't downloaded the schedules yet!"); 
		var divInitial = document.createElement("div");
		p.appendChild(ptxt);
		p.setAttribute("style", "background-color: white;"); //TEMPORARY LANG TO
		document.body.appendChild(p);
		//download sched to server BUTTON
	  	var retrievebtn = document.createElement("button");
	  	retrievebtn.setAttribute("id", "downloadSched");
	  	var retrievetxt = document.createTextNode("Download Schedules ");
	  	retrievebtn.appendChild(retrievetxt);
	  	divInitial.appendChild(retrievebtn);
	  	divInitial.setAttribute("class", "centerBtns");
	  	document.body.appendChild(divInitial);
	  	//============DOWNLOAD STARTS HERE=========================================================
	  	document.getElementById("downloadSched").onclick = function(){
	try{  		
		var xmlhttp = new XMLHttpRequest();
		//730
		xmlhttp.open("GET", "localstorage/schedules730.txt", false);
		xmlhttp.send();
		var firstSchedtxt =JSON.parse(xmlhttp.responseText);
		localStorage.setItem("730", JSON.stringify(firstSchedtxt));

		//830
		xmlhttp.open("GET", "localstorage/schedules830.txt", false);
		xmlhttp.send();
		var secondSchedtxt =JSON.parse(xmlhttp.responseText);
		localStorage.setItem("830", JSON.stringify(secondSchedtxt));

		//930
		xmlhttp.open("GET", "localstorage/schedules930.txt", false);
		xmlhttp.send();
		var thirdSchedtxt =JSON.parse(xmlhttp.responseText);
		localStorage.setItem("930", JSON.stringify(thirdSchedtxt));


		//1030
		xmlhttp.open("GET", "localstorage/schedules1030.txt", false);
		xmlhttp.send();
		var fourthSchedtxt =JSON.parse(xmlhttp.responseText);
		localStorage.setItem("1030", JSON.stringify(fourthSchedtxt));


		//1130
		xmlhttp.open("GET", "localstorage/schedules1130.txt", false);
		xmlhttp.send();
		var fifthSchedtxt =JSON.parse(xmlhttp.responseText);
		localStorage.setItem("1130", JSON.stringify(fifthSchedtxt));


		//1230
		xmlhttp.open("GET", "localstorage/schedules1230.txt", false);
		xmlhttp.send();
		var sixthSchedtxt =JSON.parse(xmlhttp.responseText);
		localStorage.setItem("1230", JSON.stringify(sixthSchedtxt));

		//130
		xmlhttp.open("GET", "localstorage/schedules130.txt", false);
		xmlhttp.send();
		var seventhSchedtxt =JSON.parse(xmlhttp.responseText);
		localStorage.setItem("130", JSON.stringify(seventhSchedtxt));

		//230
		xmlhttp.open("GET", "localstorage/schedules230.txt", false);
		xmlhttp.send();
		var eightSchedtxt =JSON.parse(xmlhttp.responseText);
		localStorage.setItem("230", JSON.stringify(eightSchedtxt));

		//330
		xmlhttp.open("GET", "localstorage/schedules330.txt", false);
		xmlhttp.send();
		var ninthSchedtxt =JSON.parse(xmlhttp.responseText);
		localStorage.setItem("330", JSON.stringify(ninthSchedtxt));
		var storedNinthSched = JSON.parse(localStorage.getItem("330"));

		//430
		xmlhttp.open("GET", "localstorage/schedules430.txt", false);
		xmlhttp.send();
		var tenthSchedtxt =JSON.parse(xmlhttp.responseText);
		localStorage.setItem("430", JSON.stringify(tenthSchedtxt));

		//530
		xmlhttp.open("GET", "localstorage/schedules530.txt", false);
		xmlhttp.send();
		var eleventhSchedtxt =JSON.parse(xmlhttp.responseText);
		localStorage.setItem("530", JSON.stringify(eleventhSchedtxt));
		startUI();
	}catch(error){
		console.log(error);
		alert("Error connecting to server!");
	}
	//=========================END DOWNLOAD ==================================
	};//end on click
	}//end if
	if(localStorage.length!=0){
		var storedFirstSched = JSON.parse(localStorage.getItem("730"));
		var storedSecondSched = JSON.parse(localStorage.getItem("830"));
		var storedThirdSched = JSON.parse(localStorage.getItem("930"));
		var storedFourthSched = JSON.parse(localStorage.getItem("1030"));
		var storedFifthSched = JSON.parse(localStorage.getItem("1130"));
		var storedSixthSched = JSON.parse(localStorage.getItem("1230"));
		var storedSeventhSched = JSON.parse(localStorage.getItem("130"));
		var storedEightSched = JSON.parse(localStorage.getItem("230"));
		var storedNinthSched = JSON.parse(localStorage.getItem("330"));
		var storedTenthSched = JSON.parse(localStorage.getItem("430"));
		var storedEleventhSched = JSON.parse(localStorage.getItem("530"));
		var ul = document.createElement("ul");
		
	  	
	  	var ul = document.createElement("ul");
	  	var litext1 = document.createTextNode(storedFirstSched.time);
	  	var li1 = document.createElement("li");
	  	li1.appendChild(litext1);
	  	ul.appendChild(li1);
	  	li1.setAttribute("class", "sched");
	  	li1.setAttribute("onclick", "seven()");

	  	var litext2 = document.createTextNode(storedSecondSched.time);
	  	var li2 = document.createElement("li");
	  	li2.appendChild(litext2);
	  	ul.appendChild(li2);
	  	li2.setAttribute("class", "sched");
	  	li2.setAttribute("onclick", "eight()");

	  	var litext3 = document.createTextNode(storedThirdSched.time);
	  	var li3 = document.createElement("li");
	  	li3.appendChild(litext3);
	  	ul.appendChild(li3);
	  	li3.setAttribute("class", "sched");
	  	li3.setAttribute("onclick", "nine()");

	  	var litext4 = document.createTextNode(storedFourthSched.time);
	  	var li4 = document.createElement("li");
	  	li4.appendChild(litext4);
	  	ul.appendChild(li4);
	  	li4.setAttribute("class", "sched");
	  	li4.setAttribute("onclick", "ten()");

	  	var litext5 = document.createTextNode(storedFifthSched.time);
	  	var li5 = document.createElement("li");
	  	li5.appendChild(litext5);
	  	ul.appendChild(li5);
	  	li5.setAttribute("class", "sched");
	  	li5.setAttribute("onclick", "eleven()");

	  	var litext6 = document.createTextNode(storedSixthSched.time);
	  	var li6 = document.createElement("li");
	  	li6.appendChild(litext6);
	  	ul.appendChild(li6);
	  	li6.setAttribute("class", "sched");
	  	li6.setAttribute("onclick", "twelve()");

	  	var litext7 = document.createTextNode(storedSeventhSched.time);
	  	var li7 = document.createElement("li");
	  	li7.appendChild(litext7);
	  	ul.appendChild(li7);
	  	li7.setAttribute("class", "sched");
	  	li7.setAttribute("onclick", "one()");

	  	var litext8 = document.createTextNode(storedEightSched.time);
	  	var li8 = document.createElement("li");
	  	li8.appendChild(litext8);
	  	ul.appendChild(li8);
	  	li8.setAttribute("class", "sched");
	  	li8.setAttribute("onclick", "two()");

	  	var litext9 = document.createTextNode(storedNinthSched.time);
	  	var li9 = document.createElement("li");
	  	li9.appendChild(litext9);
	  	ul.appendChild(li9);
	  	li9.setAttribute("class", "sched");
	  	li9.setAttribute("onclick", "three()");

	  	var litext10 = document.createTextNode(storedTenthSched.time);
	  	var li10 = document.createElement("li");
	  	li10.appendChild(litext10);
	  	ul.appendChild(li10);
	  	li10.setAttribute("class", "sched");
	  	li10.setAttribute("onclick", "four()");

	  	var litext11 = document.createTextNode(storedEleventhSched.time);
	  	var li11 = document.createElement("li");
	  	li11.appendChild(litext11);
	  	ul.appendChild(li11);
	  	li11.setAttribute("class", "sched");
	  	li11.setAttribute("onclick", "five()");
	  	//Sync to server BUTTON======================
	  	var syncButton = document.createElement("button");
	  	syncButton.setAttribute("onclick", "sync()");
	  	var syncText = document.createTextNode("Sync to Server");
	  	syncButton.appendChild( syncText );
	  	
	  	//retruve server BUTTON==============================
	  	var retrievebtn = document.createElement("button");
	  	retrievebtn.setAttribute("onclick", "retrieveReport()");
	  	var retrievetxt = document.createTextNode("Generate Report");
	  	retrievebtn.appendChild(retrievetxt);
	  	
	  	//summary BUTTON=====================================
	  	var summarybutton = document.createElement("button");
  		summarybutton.setAttribute("id", "summarbtn");
  		summarybutton.setAttribute("onclick","summary()");	
  		summtext = document.createTextNode("Summary");
  		summarybutton.appendChild(summtext);
  		document.body.appendChild(summarybutton);
  		//reset BUTTON=======================================
  		var resetbutton = document.createElement("button");
  		resetbutton.setAttribute("id", "resetbtn");
  		resetbutton.setAttribute("onclick","reset()");	
  		resettext = document.createTextNode("Reset");
  		resetbutton.appendChild(resettext);
  		document.body.appendChild(resetbutton);
  		//=============================================
	  	var buttonDiv = document.createElement("div");
	  	buttonDiv.setAttribute("class", "centerBtns");
	  	buttonDiv.appendChild(syncButton);
	  	buttonDiv.appendChild(retrievebtn);
	  	buttonDiv.appendChild(resetbutton);
	  	buttonDiv.appendChild(summarybutton);
	  	document.body.appendChild(ul);
	  	document.body.appendChild(buttonDiv);
	  	// document.body.appendChild(syncButton)
	  	// document.body.appendChild(retrievebtn);


	}//end if ng storage
} 


function retrieveReport() {
	 //document.body.innerHTML = "<button class=bckbtn onclick=startUI()> Back </button>";
	document.body.innerHTML ="<h1> Report of the Day</h1>" + "<br> <h2> Select instructors to view summarized reports. </h2>" ;

	var instructors= [
			 					"Ali Mangaliag",
								"Bench Bacani",
								"Cess Mercado",
								"Dalos Miguel",
								"Gerry Paul Genove",
								"Jannet Etliong",
								"Jo Montes",
								"Jonathan Ramirez",
								"Lambert Famorca",
								"Laurence Balmeo",
								"Maria Concepcion Clemente",
								"Mark Jeff Parra",
								"Rhoderic Makil",
								"Randy Domantay",
								"Vicoy Ferrer"
								];
	try{
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", "dummyfile.json", false); //bagong file dummy na nakalagy mga absent at late.\
		// xmlhttp.open("GET", "dummyfileNull.json", true); eto yung walang laman pag walang absent at late. 
		xmlhttp.send(); 
		if (xmlhttp.status == 200 || xmlhttp.status == 304) {
			var records = JSON.parse(xmlhttp.responseText);
			//html
			 var body = document.getElementsByTagName("body");
			 var ul = document.createElement("ul");			 
			//records.details[0].data[0]; to access what's inside
			//localStorage[records] = JSON.stringify(records); Gawing string yung records
			for(var i = 0; i<instructors.length; i++){
				var li = document.createElement("li");
				li.setAttribute("class", "records");
				var liText = document.createTextNode(instructors[i]);
				li.appendChild(liText);
				ul.appendChild(li);
			}//end loop
			document.body.appendChild(ul); //--------------------------------------------------------------- BACK BUTTON AF
			var backbutton = document.createElement("button");
			backbutton.setAttribute("class","bckbtn");
			backbutton.setAttribute("id" , "bckbtn11");
			backbutton.setAttribute("onclick","startUI()");
			document.body.appendChild(backbutton);
			backbutton.innerHTML = "Back";
			//onclick
			var recordsArray = document.getElementsByClassName("records");
			for(var z = 0; z<recordsArray.length; z++){
				recordsArray[z].onclick = function(){
					console.log(this.innerHTML);
				var totalAbsent = 0;
				var totalLate = 0;
				var katawan = document.getElementsByTagName("body");
				var ul = document.createElement("ul");
				for(var i = 0; i<records.details.length; i++){
					for(var j = 0; j<records.details[i].data.length; j++){
						if(records.details[i].data[j].name==this.innerHTML){
							var name = records.details[i].data[j].name;
							if(records.details[i].data[j].hasOwnProperty("absent")){ // pag absent lang naka lagay
								var absent = records.details[i].data[j].absent;
								var x = document.createElement("li");
								var xText = document.createTextNode("Absent "+records.details[i].time+ " "+records.details[i].data[j].date);
								x.appendChild(xText);
								ul.appendChild(x);
								totalAbsent+=absent; 
								var ptotal1 = document.createElement("p")
								var ptext1 = document.createTextNode("Total Absents: "+totalAbsent);
								ptotal1.appendChild(ptext1);
								
							}else if(records.details[i].data[j].hasOwnProperty("late")){ // pag late lang anka lagay
								var late = records.details[i].data[j].late;
								totalLate+=late;
								var y = document.createElement("li");
								var yText = document.createTextNode("Late "+ records.details[i].data[j].late+ " mins in "+records.details[i].time+ " last "+records.details[i].data[j].date );
								y.appendChild(yText);
								ul.appendChild(y);
								var ptotal2 = document.createElement("p")
								var ptext2 = document.createTextNode("Total Lates : "+totalLate+" mins");
								ptotal2.appendChild(ptext2);
								
							}
							var date = records.details[i].data[j].date;
						}//end If for Ali
					}
				}

				document.body.innerHTML = "<h1> Records for "+name+" </h1>"; //append list after this para di ma ovewrite
				document.body.appendChild(ul);
				document.body.appendChild(ptotal1);
				document.body.appendChild(ptotal2);

				document.body.appendChild(ul); //--------------------------------------------------------------- BACK BUTTON AF
				var backbutton = document.createElement("button");
				backbutton.setAttribute("class","bckbtn");
				backbutton.setAttribute("id" , "bckbtn11");
				backbutton.setAttribute("onclick","retrieveReport()");
				document.body.appendChild(backbutton);
				backbutton.innerHTML = "Back";				
				} // end on click
			} // end for loop

		} else {
			console.log("not ok sa status");
		}
	}catch (error){
		console.log(error);
	}

} //end retrieve
function sync(){

	var x = confirm("Warning, Data will be lost after syncing. Continue?");
	if(x){
		
		if(localStorage.getItem("absentLate730") == null || localStorage.getItem("absentLate830") == null || 
			localStorage.getItem("absentLate930") == null || localStorage.getItem("absentLate1030") == null ||
			localStorage.getItem("absentLate1130") == null || localStorage.getItem("absentLate1230") == null ||
			localStorage.getItem("absentLate130") == null || localStorage.getItem("absentLate230") == null ||
			localStorage.getItem("absentLate330") == null || localStorage.getItem("absentLate430") == null ||
			localStorage.getItem("absentLate530") == null ){

			alert("ERROR SYNCING\n One or more schedule has not been saved yet!");
		}else{
			try{
				var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
				xmlhttp.open("POST", "json-handler.json");
				xmlhttp.setRequestHeader("Content-Type", "application/json");
				xmlhttp.send(localStorage.getItem("absentLate730")); //stored 730-530
				console.log("ok");
			}catch (error){
				console.log("ok");
			}
				
		}

	}
}


