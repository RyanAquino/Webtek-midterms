var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
today = mm+'/'+dd+'/'+yyyy;

//global variables
var saveChecker730 = true;

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
//1030
	var fourthSched ={ "time":"10:30-11:30",
						"data":[
						{"name":"Rhoderic Makil", "room":"s425", "absent":null, "date":null, "late":null},
						{"name":"Maria Concepcion Clemente", "room":"s326", "absent":null, "date":null, "late":null},
						{"name":"Jo Montes", "room":"s542", "absent":null, "date":null, "late":null}
						]
					};
	localStorage.setItem("1030", JSON.stringify(fourthSched));
	var storedFourthSched = JSON.parse(localStorage.getItem("1030"));
//1130	
	var fifthSched ={ "time":"11:30-12:30",
						"data":[
						{"name":"Rhoderic Makil", "room":"s425", "absent":null, "date":null, "late":null},
						{"name":"Maria Concepcion Clemente", "room":"s326", "absent":null, "date":null, "late":null},
						{"name":"Jo Montes", "room":"s542", "absent":null, "date":null, "late":null}
						]
					};
	localStorage.setItem("1130", JSON.stringify(fifthSched));
	var storedFifthSched = JSON.parse(localStorage.getItem("1130"));
//1230
	var sixthSched ={ "time":"12:30-1:30",
						"data":[
						{"name":"Rhoderic Makil", "room":"s425", "absent":null, "date":null, "late":null},
						{"name":"Maria Concepcion Clemente", "room":"s326", "absent":null, "date":null, "late":null},
						{"name":"Jo Montes", "room":"s542", "absent":null, "date":null, "late":null}
						]
					};
	localStorage.setItem("1230", JSON.stringify(sixthSched));
	var storedSixthSched = JSON.parse(localStorage.getItem("1230"));
//130
	var seventhSched ={ "time":"1:30-2:30",
						"data":[
						{"name":"Rhoderic Makil", "room":"s425", "absent":null, "date":null, "late":null},
						{"name":"Maria Concepcion Clemente", "room":"s326", "absent":null, "date":null, "late":null},
						{"name":"Jo Montes", "room":"s542", "absent":null, "date":null, "late":null}
						]
					};
	localStorage.setItem("130", JSON.stringify(seventhSched));
	var storedSeventhSched = JSON.parse(localStorage.getItem("130"));
//230
	var eigthSched ={ "time":"2:30-3:30",
						"data":[
						{"name":"Rhoderic Makil", "room":"s425", "absent":null, "date":null, "late":null},
						{"name":"Maria Concepcion Clemente", "room":"s326", "absent":null, "date":null, "late":null},
						{"name":"Jo Montes", "room":"s542", "absent":null, "date":null, "late":null}
						]
					};
	localStorage.setItem("230", JSON.stringify(eigthSched));
	var storedEigthSched = JSON.parse(localStorage.getItem("230"));
//330
	var ninthSched ={ "time":"3:30-4:30",
						"data":[
						{"name":"Rhoderic Makil", "room":"s425", "absent":null, "date":null, "late":null},
						{"name":"Maria Concepcion Clemente", "room":"s326", "absent":null, "date":null, "late":null},
						{"name":"Jo Montes", "room":"s542", "absent":null, "date":null, "late":null}
						]
					};
	localStorage.setItem("330", JSON.stringify(ninthSched));
	var storedNinthSched = JSON.parse(localStorage.getItem("330"));
//430
	var tenthSched ={ "time":"4:30-5:30",
						"data":[
						{"name":"Rhoderic Makil", "room":"s425", "absent":null, "date":null, "late":null},
						{"name":"Maria Concepcion Clemente", "room":"s326", "absent":null, "date":null, "late":null},
						{"name":"Jo Montes", "room":"s542", "absent":null, "date":null, "late":null}
						]
					};
	localStorage.setItem("430", JSON.stringify(tenthSched));
	var storedTenthSched = JSON.parse(localStorage.getItem("430"));
//530
	var eleventhSched ={ "time":"5:30-6:30",
						"data":[
						{"name":"Rhoderic Makil", "room":"s425", "absent":null, "date":null, "late":null},
						{"name":"Maria Concepcion Clemente", "room":"s326", "absent":null, "date":null, "late":null},
						{"name":"Jo Montes", "room":"s542", "absent":null, "date":null, "late":null}
						]
					};
	localStorage.setItem("530", JSON.stringify(eleventhSched));
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
  	// 1130==========================================================
  	var litext5 = document.createTextNode(fifthSched.time);

    var li5 =document.createElement("li");
    li5.appendChild(litext5);
    ul.appendChild(li5);
  	li5.setAttribute("onclick", "eleven()");
  	// 1230==========================================================
  	var litext6 = document.createTextNode(sixthSched.time);

    var li6 =document.createElement("li");
    li6.appendChild(litext6);
    ul.appendChild(li6);
  	li6.setAttribute("onclick", "twelve()");
  	// 130==========================================================
  	var litext7 = document.createTextNode(seventhSched.time);

    var li7 =document.createElement("li");
    li7.appendChild(litext7);
    ul.appendChild(li7);
  	li7.setAttribute("onclick", "one()");
  	// 230==========================================================
  	var litext8 = document.createTextNode(eigthSched.time);

    var li8 =document.createElement("li");
    li8.appendChild(litext8);
    ul.appendChild(li8);
  	li8.setAttribute("onclick", "two()");
  	// 330==========================================================
  	var litext9 = document.createTextNode(ninthSched.time);

    var li9 =document.createElement("li");
    li9.appendChild(litext9);
    ul.appendChild(li3);
  	li9.setAttribute("onclick", "three()");
  	// 430==========================================================
  	var litext10 = document.createTextNode(tenthSched.time);

    var li10 =document.createElement("li");
    li10.appendChild(litext10);
    ul.appendChild(li10);
  	li10.setAttribute("onclick", "four()");
  	// 530==========================================================
  	var litext11 = document.createTextNode(eleventhSched.time);

    var li11 =document.createElement("li");
    li11.appendChild(litext11);
    ul.appendChild(li11);
  	li11.setAttribute("onclick", "nine()");
}

	

function back(){
	document.body.innerHTML = "<h1> BGONG UI </h1> <button onclick='startUI()'> CANCEL </button>";

}

//dito ma store yung may mga absent/late
var firstSchedNew ={"time":"730-830",
					"data": [ ]
					};


function seven(){	
if(localStorage.getItem("saveChecker730")!="false"){	
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
		var thtext4 = document.createTextNode("Late(minutes)");

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

		var td1,td2,td3,text1,text2,tr,input;
		for(var i=0; i<storedFirstSched.data.length; i++){
			tr=document.createElement("tr");
			td1=document.createElement("td");
			td2=document.createElement("td");
			td3=document.createElement("td");
			td4=document.createElement("td");
			button = document.createElement("button");
			button2 = document.createElement("button");
			button2.setAttribute("id", "button2"+i);
			input = document.createElement("input")
			input.setAttribute("type", "number");
			input.setAttribute("id", "late"+i) //input nang late
			text1 = document.createTextNode(storedFirstSched.data[i].name);
			text2 = document.createTextNode(storedFirstSched.data[i].room);
			text3 = document.createTextNode("Absent"+i);
			text4 = document.createTextNode("late"+i)
			td1.appendChild(text1);
			td2.appendChild(text2);
			button.appendChild(text3);
			button2.appendChild(text4);
			td3.appendChild(button);
			button.setAttribute("id", "absent"+i);
			button2.setAttribute("id", "latebtn"+i); //submit button nang late
			td4.appendChild(input);
			td4.appendChild(button2);
			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);	
			table.appendChild(tr);
		 }
		document.body.appendChild(table);
		//MANUAL GAMING
			//730 row 1

			if(firstSchedNew.data[0]==undefined){
				//ABSENT================
				document.getElementById("absent"+0).onclick = function() {
					
					alert("button "+storedFirstSched.data[0].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						firstSchedNew.data.push(storedFirstSched.data[0]);
						firstSchedNew.data[firstSchedNew.data.length-1].absent = 1;
						firstSchedNew.data[firstSchedNew.data.length-1].date = today;
						document.getElementById("absent"+0).setAttribute("disabled", "");
						document.getElementById("late"+0).setAttribute("disabled", "");
						document.getElementById("latebtn"+0).setAttribute("disabled", "");
					}else{ // dont store anything
						alert('wew');
					}
				};
				//LATE=================
				document.getElementById("latebtn"+0).onclick = function() {
					
					alert("button "+storedFirstSched.data[0].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+0).value;
						firstSchedNew.data.push(storedFirstSched.data[0]);
						firstSchedNew.data[firstSchedNew.data.length-1].late = lateValue;
						firstSchedNew.data[firstSchedNew.data.length-1].date = today;
						document.getElementById("absent"+0).setAttribute("disabled", "");
						document.getElementById("late"+0).setAttribute("disabled", "");
						document.getElementById("latebtn"+0).setAttribute("disabled", "");
					}else{ // dont store anything
						alert('wew');
					}
				};
			}else{
				document.getElementById("absent"+0).setAttribute("disabled", "");
				document.getElementById("late"+0).setAttribute("disabled", "");
				document.getElementById("latebtn"+0).setAttribute("disabled", "");
			}

			//2ndrow
			if(firstSchedNew.data[1]==undefined){
				//ABSENT==============
				document.getElementById("absent"+1).onclick = function() {
					
					alert("button "+storedFirstSched.data[1].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						alert('nice');
						firstSchedNew.data.push(storedFirstSched.data[1]);
						firstSchedNew.data[firstSchedNew.data.length-1].absent = 1; //problem di masave
						firstSchedNew.data[firstSchedNew.data.length-1].date = today;
						document.getElementById("absent"+1).setAttribute("disabled", "");
						document.getElementById("late"+1).setAttribute("disabled", "");
						document.getElementById("latebtn"+1).setAttribute("disabled", "");
					}else{ // dont store anything
						alert('wew');
					}
				};
				//LATE=================
				document.getElementById("latebtn"+1).onclick = function() {
					
					alert("button "+storedFirstSched.data[1].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+1).value;
						firstSchedNew.data.push(storedFirstSched.data[1]);
						firstSchedNew.data[firstSchedNew.data.length-1].late = lateValue;
						firstSchedNew.data[firstSchedNew.data.length-1].date = today;
						document.getElementById("absent"+1).setAttribute("disabled", "");
						document.getElementById("late"+1).setAttribute("disabled", "");
						document.getElementById("latebtn"+1).setAttribute("disabled", "");
					}else{ // dont store anything
						alert('wew');
					}
				};

			}else{
				document.getElementById("absent"+1).setAttribute("disabled", "");
				document.getElementById("late"+1).setAttribute("disabled", "");
				document.getElementById("latebtn"+1).setAttribute("disabled", "");
			}
			//3rdrow
			if(firstSchedNew.data[2]==undefined){
				//ABSENT ============
				document.getElementById("absent"+2).onclick = function() {
					
					alert("button "+storedFirstSched.data[2].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						alert('nice');
						firstSchedNew.data.push(storedFirstSched.data[2]);
						firstSchedNew.data[firstSchedNew.data.length-1].absent = 1; //problem di masave
						firstSchedNew.data[firstSchedNew.data.length-1].date = today;
						document.getElementById("absent"+2).setAttribute("disabled", "");
						document.getElementById("late"+2).setAttribute("disabled", "");
						document.getElementById("latebtn"+2).setAttribute("disabled", "");
					}else{ // dont store anything
						alert('wew');
					}
				};
				//LATE=================
				document.getElementById("latebtn"+2).onclick = function() {
					
					alert("button "+storedFirstSched.data[2].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+2).value;
						firstSchedNew.data.push(storedFirstSched.data[2]);
						firstSchedNew.data[firstSchedNew.data.length-1].late = lateValue;
						firstSchedNew.data[firstSchedNew.data.length-1].date = today;
						document.getElementById("absent"+2).setAttribute("disabled", "");
						document.getElementById("late"+2).setAttribute("disabled", "");
						document.getElementById("latebtn"+2).setAttribute("disabled", "");
					}else{ // dont store anything
						alert('wew');
					}
				};
			}else{
				document.getElementById("absent"+2).setAttribute("disabled", "");
				document.getElementById("late"+2).setAttribute("disabled", "");
				document.getElementById("latebtn"+2).setAttribute("disabled", "");
			}
			//4throw
			if(firstSchedNew.data[3]==undefined){
				///ABSENT ============
				document.getElementById("absent"+3).onclick = function() {
					
					alert("button "+storedFirstSched.data[3].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						alert('nice');
						firstSchedNew.data.push(storedFirstSched.data[3]);
						firstSchedNew.data[firstSchedNew.data.length-1].absent = 1; //problem di masave
						firstSchedNew.data[firstSchedNew.data.length-1].date = today;
						document.getElementById("absent"+3).setAttribute("disabled", "");
						document.getElementById("late"+3).setAttribute("disabled", "");
						document.getElementById("latebtn"+3).setAttribute("disabled", "");
					}else{ // dont store anything
						alert('wew');
					}
				};
				//LATE=================
				document.getElementById("latebtn"+3).onclick = function() {
					
					alert("button "+storedFirstSched.data[3].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+3).value;
						firstSchedNew.data.push(storedFirstSched.data[3]);
						firstSchedNew.data[firstSchedNew.data.length-1].late = lateValue;
						firstSchedNew.data[firstSchedNew.data.length-1].date = today;
						document.getElementById("absent"+3).setAttribute("disabled", "");
						document.getElementById("late"+3).setAttribute("disabled", "");
						document.getElementById("latebtn"+3).setAttribute("disabled", "");
					}else{ // dont store anything
						alert('wew');
					}
				};

			}else{
				document.getElementById("absent"+3).setAttribute("disabled", "");
				document.getElementById("late"+3).setAttribute("disabled", "");
				document.getElementById("latebtn"+3).setAttribute("disabled", "");
			}
			//5throw
			if(firstSchedNew.data[4]==undefined){
				//ABSENT =====
				document.getElementById("absent"+4).onclick = function() {
					
					alert("button "+storedFirstSched.data[4].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						alert('nice');
						firstSchedNew.data.push(storedFirstSched.data[4]);
						firstSchedNew.data[firstSchedNew.data.length-1].absent = 1; //problem di masave
						firstSchedNew.data[firstSchedNew.data.length-1].date = today;
						document.getElementById("absent"+4).setAttribute("disabled", "");
						document.getElementById("late"+4).setAttribute("disabled", "");
						document.getElementById("latebtn"+4).setAttribute("disabled", "");
					}else{ // dont store anything
						alert('wew');
					}
				};
				//LATE=================
				document.getElementById("latebtn"+4).onclick = function() {
					
					alert("button "+storedFirstSched.data[4].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+4).value;
						firstSchedNew.data.push(storedFirstSched.data[4]);
						firstSchedNew.data[firstSchedNew.data.length-1].late = lateValue;
						firstSchedNew.data[firstSchedNew.data.length-1].date = today;
						document.getElementById("absent"+4).setAttribute("disabled", "");
						document.getElementById("late"+4).setAttribute("disabled", "");
						document.getElementById("latebtn"+4).setAttribute("disabled", "");
					}else{ // dont store anything
						alert('wew');
					}
				};
			}else{
				document.getElementById("absent"+4).setAttribute("disabled", "");
				document.getElementById("late"+4).setAttribute("disabled", "");
				document.getElementById("latebtn"+4).setAttribute("disabled", "");
			}
			savebtn = document.createElement("button");
			savebtntxt = document.createTextNode("Save");
			savebtn.appendChild(savebtntxt);
			savebtn.setAttribute("id", "savebtn");
			document.body.appendChild(savebtn);


			document.getElementById("savebtn").onclick = function(){
				var y = confirm("Are you sure you want to save? You cannot undo is process");
				if(y == true){
					console.log('YAN KA NANAMAN');
					  localStorage.setItem("absentLate730", JSON.stringify(firstSchedNew));
					  storedAbsentLate730 = JSON.parse(localStorage.getItem("absentLate730"));
					 saveChecker730=false;
					 localStorage.setItem("saveChecker730", "false");
					 startUI();
				}
			}
	}else{
		alert("You Already Checked that schedule!");
	}		
	
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