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
var eigthSchedNew ={"time":"230-330",
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
//LOCAL STORAGE 	
var info = document.getElementById("info");		
// 730				
	var firstSched ={ "time":"7:30-8:30",
						"data":[
						{"name":"Jo Montes", "room":"s542", "absent":null, "date":null, "late":null},
						{"name":"Maria Concepcion Clemente", "room":"s326", "absent":null, "date":null, "late":null},
						{"name":"Rhoderic Makil", "room":"s425", "absent":null, "date":null, "late":null},
						{"name":"Beverly Ferrer", "room":"s522", "absent":null, "date":null, "late":null},
						{"name":"Ali Mangaliag", "room":"s523", "absent":null, "date":null, "late":null}
						]
					};
	 localStorage.setItem("730", JSON.stringify(firstSched));
	var storedFirstSched = JSON.parse(localStorage.getItem("730"));
//830
	var secondSched ={ "time":"8:30-9:30",
						"data":[
						{"name":"Ali Mangaliag", "room":"s523", "absent":null, "date":null, "late":null},
						{"name":"Jo Montes", "room":"s542", "absent":null, "date":null, "late":null},
						{"name":"Beverly Ferrer", "room":"s522", "absent":null, "date":null, "late":null},
						{"name":"Rhoderic Makil", "room":"s425", "absent":null, "date":null, "late":null},
						{"name":"Maria Concepcion Clemente", "room":"s326", "absent":null, "date":null, "late":null}
						]
					};
	localStorage.setItem("830", JSON.stringify(secondSched));
	var storedSecondSched = JSON.parse(localStorage.getItem("830"));
//930
	var thirdSched ={ "time":"9:30-10:30",
						"data":[
						{"name":"Bench Bacani", "room":"s326", "absent":null, "date":null, "late":null},
						{"name":"Vicoy Ferrer", "room":"s522", "absent":null, "date":null, "late":null},
						{"name":"Jo Montes", "room":"s542", "absent":null, "date":null, "late":null},
						{"name":"Mark Jeff Parra", "room":"s523", "absent":null, "date":null, "late":null},
						{"name":"Gerry Paul Genove", "room":"s425", "absent":null, "date":null, "late":null}
						]
					};
	localStorage.setItem("930", JSON.stringify(thirdSched));
	var storedThirdSched = JSON.parse(localStorage.getItem("930"));
//1030
	var fourthSched ={ "time":"10:30-11:30",
						"data":[
						{"name":"Lambert Famorca", "room":"s326", "absent":null, "date":null, "late":null},
						{"name":"Ali Mangaliag", "room":"s523", "absent":null, "date":null, "late":null},
						{"name":"Jo Montes", "room":"s542", "absent":null, "date":null, "late":null},
						{"name":"Beverly Ferrer", "room":"s522", "absent":null, "date":null, "late":null},
						{"name":"Maria Concepcion Clemente", "room":"s425", "absent":null, "date":null, "late":null}
						]
					};
	localStorage.setItem("1030", JSON.stringify(fourthSched));
	var storedFourthSched = JSON.parse(localStorage.getItem("1030"));
//1130	
	var fifthSched ={ "time":"11:30-12:30",
						"data":[
						{"name":"Jannet Etliong", "room":"s542", "absent":null, "date":null, "late":null},
						{"name":"Laurence Balmeo", "room":"s522", "absent":null, "date":null, "late":null},
						{"name":"Ali Mangaliag", "room":"s523", "absent":null, "date":null, "late":null},
						{"name":"Maria Concepcion Clemente", "room":"s326", "absent":null, "date":null, "late":null},
						{"name":"Jonathan Ramirez", "room":"s425", "absent":null, "date":null, "late":null}
						]
					};
	localStorage.setItem("1130", JSON.stringify(fifthSched));
	var storedFifthSched = JSON.parse(localStorage.getItem("1130"));
//1230
	var sixthSched ={ "time":"12:30-1:30",
						"data":[
						{"name":"Ali Mangaliag", "room":"s523", "absent":null, "date":null, "late":null},
						{"name":"Rhoderic Makil", "room":"s425", "absent":null, "date":null, "late":null},
						{"name":"Cess Mercado", "room":"s326", "absent":null, "date":null, "late":null},
						{"name":"Dalos Miguel", "room":"s542", "absent":null, "date":null, "late":null},
						{"name":"Beverly Ferrer", "room":"s522", "absent":null, "date":null, "late":null}
						]
					};
	localStorage.setItem("1230", JSON.stringify(sixthSched));
	var storedSixthSched = JSON.parse(localStorage.getItem("1230"));
//130
	var seventhSched ={ "time":"1:30-2:30",
						"data":[
						{"name":"Dalos Miguel", "room":"s326", "absent":null, "date":null, "late":null},
						{"name":"Laurence Balmeo", "room":"s522", "absent":null, "date":null, "late":null},
						{"name":"Ali Mangaliag", "room":"s523", "absent":null, "date":null, "late":null},
						{"name":"Jo Montes", "room":"s542", "absent":null, "date":null, "late":null},
						{"name":"Vicoy Ferrer", "room":"s425", "absent":null, "date":null, "late":null}
						]
					};
	localStorage.setItem("130", JSON.stringify(seventhSched));
	var storedSeventhSched = JSON.parse(localStorage.getItem("130"));
//230
	var eigthSched ={ "time":"2:30-3:30",
						"data":[
						{"name":"Mark Jeff Parra", "room":"s326", "absent":null, "date":null, "late":null},
						{"name":"Lambert Famorca", "room":"s542", "absent":null, "date":null, "late":null},
						{"name":"Jonathan Ramirez", "room":"s523", "absent":null, "date":null, "late":null},
						{"name":"Rhoderic Makil", "room":"s425", "absent":null, "date":null, "late":null},
						{"name":"Beverly Ferrer", "room":"s522", "absent":null, "date":null, "late":null}
						]
					};
	localStorage.setItem("230", JSON.stringify(eigthSched));
	var storedEigthSched = JSON.parse(localStorage.getItem("230"));
//330
	var ninthSched ={ "time":"3:30-4:30",
						"data":[
						{"name":"Beverly Ferrer", "room":"s522", "absent":null, "date":null, "late":null},
						{"name":"Mark Jeff Parra", "room":"s326", "absent":null, "date":null, "late":null},
						{"name":"Jo Montes", "room":"s542", "absent":null, "date":null, "late":null},
						{"name":"Randy Domantay", "room":"s523", "absent":null, "date":null, "late":null},
						{"name":"Rhoderic Makil", "room":"s425", "absent":null, "date":null, "late":null}
						]
					};
	localStorage.setItem("330", JSON.stringify(ninthSched));
	var storedNinthSched = JSON.parse(localStorage.getItem("330"));
//430
	var tenthSched ={ "time":"4:30-5:30",
						"data":[
						{"name":"Vicoy Ferrer", "room":"s326", "absent":null, "date":null, "late":null},
						{"name":"Beverly Ferrer", "room":"s522", "absent":null, "date":null, "late":null},
						{"name":"Randy Domantay", "room":"s542", "absent":null, "date":null, "late":null},
						{"name":"Rhoderic Makil", "room":"s425", "absent":null, "date":null, "late":null},
						{"name":"Ali Mangaliag", "room":"s523", "absent":null, "date":null, "late":null}
						]
					};
	localStorage.setItem("430", JSON.stringify(tenthSched));
	var storedTenthSched = JSON.parse(localStorage.getItem("430"));
//530
	var eleventhSched ={ "time":"5:30-6:30",
						"data":[
						{"name":"Ali Mangaliag", "room":"s523", "absent":null, "date":null, "late":null},
						{"name":"Jo Montes", "room":"s542", "absent":null, "date":null, "late":null},
						{"name":"Beverly Ferrer", "room":"s522", "absent":null, "date":null, "late":null},
						{"name":"Maria Concepcion Clemente", "room":"s326", "absent":null, "date":null, "late":null},
						{"name":"Rhoderic Makil", "room":"s425", "absent":null, "date":null, "late":null}
						]
					};
	localStorage.setItem("530", JSON.stringify(eleventhSched));
	var storedEleventhSched = JSON.parse(localStorage.getItem("530"));
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
	var ul = document.createElement("ul");
	ul.setAttribute("id", "myTable");
 	var li = document.createElement("li");
 	var liText = document.createTextNode(firstSched.time);
 	li.setAttribute("class", "btn");
 	li.setAttribute("onclick", "seven()");


    li.appendChild(liText);
    ul.appendChild(li);
  	document.body.appendChild(ul);
  	
  	// 830==========================================================
    var litext2 = document.createTextNode(secondSched.time);

    var li2 =document.createElement("li");
    li2.appendChild(litext2);
    ul.appendChild(li2);
  	li2.setAttribute("onclick", "eight()");
  	// 930==========================================================
  	var litext3 = document.createTextNode(thirdSched.time);

    var li3 =document.createElement("li");
    li3.appendChild(litext3);
    ul.appendChild(li3);
  	li3.setAttribute("onclick", "nine()");
  	// 1030==========================================================
  	var litext4 = document.createTextNode(fourthSched.time);

    var li4 =document.createElement("li");
    li4.appendChild(litext4);
    ul.appendChild(li4);
  	li4.setAttribute("onclick", "ten()");
  	// // 1130==========================================================
  	var litext5 = document.createTextNode(fifthSched.time);

    var li5 =document.createElement("li");
    li5.appendChild(litext5);
    ul.appendChild(li5);
  	li5.setAttribute("onclick", "eleven()");
  	// // 1230==========================================================
  	var litext6 = document.createTextNode(sixthSched.time);

    var li6 =document.createElement("li");
    li6.appendChild(litext6);
    ul.appendChild(li6);
  	li6.setAttribute("onclick", "twelve()");
  	// // 130==========================================================
  	var litext7 = document.createTextNode(seventhSched.time);

    var li7 =document.createElement("li");
    li7.appendChild(litext7);
    ul.appendChild(li7);
  	li7.setAttribute("onclick", "one()");
  	// // 230==========================================================
  	var litext8 = document.createTextNode(eigthSched.time);

    var li8 =document.createElement("li");
    li8.appendChild(litext8);
    ul.appendChild(li8);
  	li8.setAttribute("onclick", "two()");
  	// // 330==========================================================
  	var litext9 = document.createTextNode(ninthSched.time);

    var li9 =document.createElement("li");
    li9.appendChild(litext9);
    ul.appendChild(li9);
  	li9.setAttribute("onclick", "three()");
  	// // 430==========================================================
  	var litext10 = document.createTextNode(tenthSched.time);

    var li10 =document.createElement("li");
    li10.appendChild(litext10);
    ul.appendChild(li10);
  	li10.setAttribute("onclick", "four()");
  	// // 530==========================================================
  	var litext11 = document.createTextNode(eleventhSched.time);

    var li11 =document.createElement("li");
    li11.appendChild(litext11);
    ul.appendChild(li11);
  	li11.setAttribute("onclick", "nine()");
}

	

function back(){
	document.body.innerHTML = "<h1> BGONG UI </h1> <button onclick='startUI()'> CANCEL </button>";

}

function summary(){

}


