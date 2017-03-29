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
}

	

function back(){
	document.body.innerHTML = "<h1> BGONG UI </h1> <button onclick='startUI()'> CANCEL </button>";

}

//dito ma store yung may mga absent/late
var firstSchedNew ={"time":"730-830",
					"data": [ ]
					};

function seven(){		
	console.log('seven');
	document.body.innerHTML = "<h1 class='heading'> 730 </h1><button onclick=startUI()> Back </button>";
//table
	var table = document.createElement("table");
	var body = document.getElementsByTagName("body");
	var th1 = document.createElement('th');
	var th2 = document.createElement('th');
	var th3 = document.createElement('th');
	var th4 = document.createElement('th');


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
	for(var i=0; i<storedFirstSched.data.length; i++){
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");
		td3=document.createElement("td");
		td4=document.createElement("td");
		button = document.createElement("button");
		text1 = document.createTextNode(storedFirstSched.data[i].name);
		text2 = document.createTextNode(storedFirstSched.data[i].room);
		text3 = document.createTextNode("Absent"+i);
		text4 = document.createTextNode("late"+i);
		td1.appendChild(text1);
		td2.appendChild(text2);
		button.appendChild(text3);
		td3.appendChild(button);
		button.setAttribute("id", "absent"+i);
		td4.appendChild(text4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);	
		table.appendChild(tr);
	 }
	var saveBtn = document.createElement('button');
	saveBtn.setAttribute("onclick", 'save()');
	document.body.appendChild(table);
	//MANUAL GAMING
		//730 row 1

		if(firstSchedNew.data[0]==undefined){
			document.getElementById("absent"+0).onclick = function() {
				
				alert("button "+storedFirstSched.data[0].name+" has been clicked");
				var x = confirm("are you sure?");
				if(x == true){ //store na sa bagong array tapos disable yung button
					alert('nice');
					firstSchedNew.data.push(storedFirstSched.data[0]);
					firstSchedNew.data[0].absent = 1;
					firstSchedNew.data[0].date = today;
					document.getElementById("absent"+0).setAttribute("disabled", "");
				}else{ // dont store anything
					alert('wew');
				}
			};
		}else{
			document.getElementById("absent"+0).setAttribute("disabled", "");
		}

		//2ndrow
		if(firstSchedNew.data[1]==undefined){
			document.getElementById("absent"+1).onclick = function() {
				
				alert("button "+storedFirstSched.data[1].name+" has been clicked");
				var x = confirm("are you sure?");
				if(x == true){ //store na sa bagong array tapos disable yung button
					alert('nice');
					firstSchedNew.data.push(storedFirstSched.data[1]);
					firstSchedNew.data[1].absent = 1; //problem di masave
					firstSchedNew.data[1].date = today;
					document.getElementById("absent"+1).setAttribute("disabled", "");
				}else{ // dont store anything
					alert('wew');
				}
			};
		}else{
			document.getElementById("absent"+1).setAttribute("disabled", "");
		}

		document.getElementById("absent"+2).onclick = function() {
			alert("button "+storedFirstSched.data[2].name+" has been clicked");
		};
		document.getElementById("absent"+3).onclick = function() {
			alert("button "+storedFirstSched.data[3].name+" has been clicked");
		};
		document.getElementById("absent"+4).onclick = function() {
			alert("button "+storedFirstSched.data[4].name+" has been clicked");
		};

		
	

}//end seven

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