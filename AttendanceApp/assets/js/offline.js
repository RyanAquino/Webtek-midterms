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
						{"name":"Maria Concepcion Clemente", "room":"s326", "absent":null, "date":null, "late":null},
						{"name":"Beverly Ferrer", "room":"s522", "absent":null, "date":null, "late":null},
						{"name":"Jo Montes", "room":"s542", "absent":null, "date":null, "late":null},
						{"name":"Ali Mangaliag", "room":"s523", "absent":null, "date":null, "late":null},
						{"name":"Rhoderic Makil", "room":"s425", "absent":null, "date":null, "late":null}
						]
					};
	localStorage.setItem("830", JSON.stringify(secondSched));
	var storedSecondSched = JSON.parse(localStorage.getItem("830"));
//930
	var thirdSched ={ "time":"9:30-10:30",
						"data":[
						{"name":"Rhoderic Makil", "room":"s425", "absent":null, "date":null, "late":null},
						{"name":"Maria Concepcion Clemente", "room":"s326", "absent":null, "date":null, "late":null},
						{"name":"Jo Montes", "room":"s542", "absent":null, "date":null, "late":null}
						]
					};
	localStorage.setItem("930", JSON.stringify(thirdSched));
	var storedSecondSched = JSON.parse(localStorage.getItem("930"));

// END LOCAL STORAGE

//Syncing of localstorage
var firstSchedNew;


window.onload = function () {
	startUI();
}


function startUI(){
	document.body.innerHTML = "<h1 class='center courier-new'> WELCOME </h1>" +
								"<p class='center courier-new' id='info'> Today is: "+ today + "<br>Select Schedule: </p>";
								
	//GUIDE MO
	console.log(firstSched.time);
	console.log(firstSched.data[0].name);	



	document.backgroundColor ="red";
	//Div for arranging position
	var div1 = document.createElement("div");
 	div1.setAttribute("class", "row")
 	var div2 = document.createElement("div");
 	div2.setAttribute("class", "menu col-3 col-m-3");
 	//UL
 	var ul = document.createElement("ul");
	ul.setAttribute("id", "myTable");
    
    div2.appendChild(ul);
    div1.appendChild(div2);
  	document.body.appendChild(div1);

  	
  	// 730==========================================================
  	var liText = document.createTextNode(firstSched.time);

  	var li = document.createElement("li");
  	li.appendChild(liText);
  	ul.appendChild(li);
 	li.setAttribute("onclick", "seven()");
 	li.setAttribute("class", "btn");

  	// 830==========================================================
    var litext2 = document.createTextNode(secondSched.time);

    var li2 =document.createElement("li");
    li2.appendChild(litext2);
    ul.appendChild(li2);
  	li2.setAttribute("onclick", "eight()");
  	li2.setAttribute("class", "btn");

  	// 930==========================================================
  	var litext3 = document.createTextNode(thirdSched.time);

    var li3 =document.createElement("li");
    li3.appendChild(litext3);
    ul.appendChild(li3);
  	li3.setAttribute("onclick", "nine()");
  	li3.setAttribute("class", "btn");
}

	

function back(){
	document.body.innerHTML = "<h1> BGONG UI </h1> <button onclick='startUI()'> CANCEL </button>";


}
function seven(){
	console.log('seven');
	document.body.innerHTML = "<h1 class='heading'> 730 </h1><button onclick=startUI()> Back </button>";

	var table = document.createElement("table");
	var body = document.getElementsByTagName("body");
	var th1 = document.createElement('th');
	var th2 = document.createElement('th');
	var th3 = document.createElement('th');
	var th4 = document.createElement('th');

//table
	var thtext1 = document.createTextNode("Name");
	var thtext2 = document.createTextNode("Room");
	var thtext3 = document.createTextNode("Absent");
	var thtext4 = document.createTextNode("Late");

	th1.appendChild(thtext1);
	th2.appendChild(thtext2);
	th3.appendChild(thtext3);
	th4.appendChild(thtext4);

	table.appendChild(th1);
	table.appendChild(th2);
	table.appendChild(th3);
	table.appendChild(th4);


	table.setAttribute("border", "1");
	table.setAttribute("cellspacing", "0");
	table.setAttribute("cellpadding","0");

	var td1,td2,td3,text1,text2,tr,option1,option2;
	for(var i=0; i<firstSched.data.length; i++){
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");
		td3=document.createElement("td");
		td4=document.createElement("td");
		button = document.createElement("button");
		text1 = document.createTextNode(firstSched.data[i].name);
		text2 = document.createTextNode(firstSched.data[i].room);
		text3 = document.createTextNode("Absent");
		text4 = document.createTextNode("temp");
		td1.appendChild(text1);
		td2.appendChild(text2);
		button.appendChild(text3);
		td3.appendChild(button);
		td3.setAttribute("id", firstSched.data[i].absent);
		td4.appendChild(text4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);	
		table.appendChild(tr);
	 }

	document.body.appendChild(table);
}

function eight(){
	console.log('eight');
	document.body.innerHTML = "<h1 class='heading'> 830 </h1><br><button onclick=startUI()> Back </button>";

	var body = document.getElementsByTagName("body");
	var list,text;
	var ul = document.createElement(ul);
	ul.setAttribute("id", "list");


	for(var i=0; i<firstSched.data.length; i++){
		list=document.createElement("li");
		text = document.createTextNode(secondSched.data[i].name + "___________" + secondSched.data[i].room);
		list.appendChild(text);
		ul.appendChild(list);
	
	}
	document.body.appendChild(ul);
}

function nine(){
	console.log('nine');
	document.body.innerHTML = "<h1 class='heading'> 930 </h1><br><button onclick=startUI()> Back </button>";

	var body = document.getElementsByTagName("body");
	var list,text;
	var ul = document.createElement(ul);
	ul.setAttribute("id", "list");


	for(var i=0; i<firstSched.data.length; i++){
		list=document.createElement("li");
		text = document.createTextNode(secondSched.data[i].name + "___________" + secondSched.data[i].room);
		list.appendChild(text);
		ul.appendChild(list);

	}
	document.body.appendChild(ul);
}