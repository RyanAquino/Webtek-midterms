function one(){	
if(localStorage.getItem("saveChecker130")!="false"){	
		console.log('one');
		document.body.innerHTML = "<h1 class='heading'> 130 </h1><button onclick=startUI()> Back </button>";
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
		for(var i=0; i<storedSeventhSched.data.length; i++){
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
			text1 = document.createTextNode(storedSeventhSched.data[i].name);
			text2 = document.createTextNode(storedSeventhSched.data[i].room);
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
			//130 row 1

			if(seventhSchedNew.data[0]==undefined){
				//ABSENT================
				document.getElementById("absent"+0).onclick = function() {
					
					alert("button "+storedSeventhSched.data[0].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("with substitute");
						if(y){
							console.log('nice');
							seventhSchedNew.data.push(storedSeventhSched.data[0]);
							seventhSchedNew.data[seventhSchedNew.data.length-1]["substitute"] = true;
							seventhSchedNew.data[seventhSchedNew.data.length-1]["absent"] = 1;
							seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+0).setAttribute("disabled", "");
							document.getElementById("late"+0).setAttribute("disabled", "");
							document.getElementById("latebtn"+0).setAttribute("disabled", "");
						}else{
							console.log('nice');
							seventhSchedNew.data.push(storedSeventhSched.data[0]);
							seventhSchedNew.data[seventhSchedNew.data.length-1]["absent"] = 1;
							seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+0).setAttribute("disabled", "");
							document.getElementById("late"+0).setAttribute("disabled", "");
							document.getElementById("latebtn"+0).setAttribute("disabled", "");
						}
						
					}else{ // dont store anything
						alert('wew');
					}
				};
				//LATE=================
				document.getElementById("latebtn"+0).onclick = function() {
					
					alert("button "+storedSeventhSched.data[0].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+0).value;
						seventhSchedNew.data.push(storedSeventhSched.data[0]);
						seventhSchedNew.data[seventhSchedNew.data.length-1]["late"] = lateValue;
						seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
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
			if(seventhSchedNew.data[1]==undefined){
				//ABSENT==============
				document.getElementById("absent"+1).onclick = function() {
					
					alert("button "+storedSeventhSched.data[1].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("with substitute");
						if(y){
							alert('nice');
							seventhSchedNew.data.push(storedSeventhSched.data[1]);
							seventhSchedNew.data[seventhSchedNew.data.length-1]["substitute"] = true;
							seventhSchedNew.data[seventhSchedNew.data.length-1]["absent"] = 1; //problem di masave
							seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+1).setAttribute("disabled", "");
							document.getElementById("late"+1).setAttribute("disabled", "");
							document.getElementById("latebtn"+1).setAttribute("disabled", "");
						}else{
							seventhSchedNew.data.push(storedSeventhSched.data[1]);
							seventhSchedNew.data[seventhSchedNew.data.length-1]["absent"] = 1; //problem di masave
							seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+1).setAttribute("disabled", "");
							document.getElementById("late"+1).setAttribute("disabled", "");
							document.getElementById("latebtn"+1).setAttribute("disabled", "");
						}
						
					}else{ // dont store anything
						alert('wew');
					}
				};
				//LATE=================
				document.getElementById("latebtn"+1).onclick = function() {
					
					alert("button "+storedSeventhSched.data[1].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+1).value;
						seventhSchedNew.data.push(storedSeventhSched.data[1]);
						seventhSchedNew.data[seventhSchedNew.data.length-1]["late"] = lateValue;
						seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
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
			if(seventhSchedNew.data[2]==undefined){
				//ABSENT ============
				document.getElementById("absent"+2).onclick = function() {
					
					alert("button "+storedSeventhSched.data[2].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("with substitute");
						if(y){
							alert('nice');
							seventhSchedNew.data.push(storedSeventhSched.data[2]);
							seventhSchedNew.data[seventhSchedNew.data.length-1]["substitute"] = true; 
							seventhSchedNew.data[seventhSchedNew.data.length-1]["absent"] = 1; //problem di masave
							seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+2).setAttribute("disabled", "");
							document.getElementById("late"+2).setAttribute("disabled", "");
							document.getElementById("latebtn"+2).setAttribute("disabled", "");
						}else{
							alert('nice');
							seventhSchedNew.data.push(storedSeventhSched.data[2]);
							seventhSchedNew.data[seventhSchedNew.data.length-1]["absent"] = 1; //problem di masave
							seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+2).setAttribute("disabled", "");
							document.getElementById("late"+2).setAttribute("disabled", "");
							document.getElementById("latebtn"+2).setAttribute("disabled", "");
						}
				
					}else{ // dont store anything
						alert('wew');
					}
				};
				//LATE=================
				document.getElementById("latebtn"+2).onclick = function() {
					
					alert("button "+storedSeventhSched.data[2].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+2).value;
						seventhSchedNew.data.push(storedSeventhSched.data[2]);
						seventhSchedNew.data[seventhSchedNew.data.length-1]["late"] = lateValue;
						seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
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
			if(seventhSchedNew.data[3]==undefined){
				///ABSENT ============
				document.getElementById("absent"+3).onclick = function() {
					
					alert("button "+storedSeventhSched.data[3].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("with substitute");
						if(y){
							alert('nice');
							seventhSchedNew.data.push(storedSeventhSched.data[3]);
							seventhSchedNew.data[seventhSchedNew.data.length-1]["substitute"] = true;
							seventhSchedNew.data[seventhSchedNew.data.length-1]["absent"] = 1; //problem di masave
							seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+3).setAttribute("disabled", "");
							document.getElementById("late"+3).setAttribute("disabled", "");
							document.getElementById("latebtn"+3).setAttribute("disabled", "");
						}else{
							alert('nice');
							seventhSchedNew.data.push(storedSeventhSched.data[3]);
							seventhSchedNew.data[seventhSchedNew.data.length-1]["absent"] = 1; //problem di masave
							seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+3).setAttribute("disabled", "");
							document.getElementById("late"+3).setAttribute("disabled", "");
							document.getElementById("latebtn"+3).setAttribute("disabled", "");
						}
						
					}else{ // dont store anything
						alert('wew');
					}
				};
				//LATE=================
				document.getElementById("latebtn"+3).onclick = function() {
					
					alert("button "+storedSeventhSched.data[3].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+3).value;
						seventhSchedNew.data.push(storedSeventhSched.data[3]);
						seventhSchedNew.data[seventhSchedNew.data.length-1]["late"] = lateValue;
						seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
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
			if(seventhSchedNew.data[4]==undefined){
				//ABSENT =====
				document.getElementById("absent"+4).onclick = function() {
					
					alert("button "+storedSeventhSched.data[4].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("with substitute");
						if(y){
							alert('nice');
							seventhSchedNew.data.push(storedSeventhSched.data[4]);
							seventhSchedNew.data[seventhSchedNew.data.length-1]["substitute"] = true;
							seventhSchedNew.data[seventhSchedNew.data.length-1]["absent"] = 1; //problem di masave
							seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+4).setAttribute("disabled", "");
							document.getElementById("late"+4).setAttribute("disabled", "");
							document.getElementById("latebtn"+4).setAttribute("disabled", "");
						}else{
							alert('nice');
							seventhSchedNew.data.push(storedSeventhSched.data[4]);
							seventhSchedNew.data[seventhSchedNew.data.length-1]["absent"] = 1; //problem di masave
							seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+4).setAttribute("disabled", "");
							document.getElementById("late"+4).setAttribute("disabled", "");
							document.getElementById("latebtn"+4).setAttribute("disabled", "");
						}
						
					}else{ // dont store anything
						alert('wew');
					}
				};
				//LATE=================
				document.getElementById("latebtn"+4).onclick = function() {
					
					alert("button "+storedSeventhSched.data[4].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+4).value;
						seventhSchedNew.data.push(storedSeventhSched.data[4]);
						seventhSchedNew.data[seventhSchedNew.data.length-1]["late"] = lateValue;
						seventhSchedNew.data[seventhSchedNew.data.length-1]["date"] = today;
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
					  localStorage.setItem("absentLate130", JSON.stringify(seventhSchedNew));
					  storedAbsentLate130 = JSON.parse(localStorage.getItem("absentLate130"));
					 saveChecker130=false;
					 localStorage.setItem("saveChecker130", "false");
					 startUI();
				}
			}
	}else{
		alert("You Already Checked that schedule!");
	}		
	
}
function two(){	
if(localStorage.getItem("saveChecker230")!="false"){	
		console.log('two');
		document.body.innerHTML = "<h1 class='heading'> 230 </h1><button onclick=startUI()> Back </button>";
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
		for(var i=0; i<storedEigthSched.data.length; i++){
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
			text1 = document.createTextNode(storedEigthSched.data[i].name);
			text2 = document.createTextNode(storedEigthSched.data[i].room);
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
			//230 row 1

			if(eigthSchedNew.data[0]==undefined){
				//ABSENT================
				document.getElementById("absent"+0).onclick = function() {
					
					alert("button "+storedEigthSched.data[0].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("with substitute");
						if(y){
							console.log('nice');
							eigthSchedNew.data.push(storedEigthSched.data[0]);
							eigthSchedNew.data[eigthSchedNew.data.length-1]["substitute"] = true;
							eigthSchedNew.data[eigthSchedNew.data.length-1]["absent"] = 1;
							eigthSchedNew.data[eigthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+0).setAttribute("disabled", "");
							document.getElementById("late"+0).setAttribute("disabled", "");
							document.getElementById("latebtn"+0).setAttribute("disabled", "");
						}else{
							console.log('nice');
							eigthSchedNew.data.push(storedEigthSched.data[0]);
							eigthSchedNew.data[eigthSchedNew.data.length-1]["absent"] = 1;
							eigthSchedNew.data[eigthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+0).setAttribute("disabled", "");
							document.getElementById("late"+0).setAttribute("disabled", "");
							document.getElementById("latebtn"+0).setAttribute("disabled", "");

						}
						
					}else{ // dont store anything
						alert('wew');
					}
				};
				//LATE=================
				document.getElementById("latebtn"+0).onclick = function() {
					
					alert("button "+storedEigthSched.data[0].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+0).value;
						eigthSchedNew.data.push(storedEigthSched.data[0]);
						eigthSchedNew.data[eigthSchedNew.data.length-1]["late"] = lateValue;
						eigthSchedNew.data[eigthSchedNew.data.length-1]["date"] = today;
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
			if(eigthSchedNew.data[1]==undefined){
				//ABSENT==============
				document.getElementById("absent"+1).onclick = function() {
					
					alert("button "+storedEigthSched.data[1].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("with substitute");
						if(y){
							alert('nice');
							eigthSchedNew.data.push(storedEigthSched.data[1]);
							eigthSchedNew.data[eigthSchedNew.data.length-1]["substitute"] = true;
							eigthSchedNew.data[eigthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							eigthSchedNew.data[eigthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+1).setAttribute("disabled", "");
							document.getElementById("late"+1).setAttribute("disabled", "");
							document.getElementById("latebtn"+1).setAttribute("disabled", "");
						}else{
							alert('nice');
							eigthSchedNew.data.push(storedEigthSched.data[1]);
							eigthSchedNew.data[eigthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							eigthSchedNew.data[eigthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+1).setAttribute("disabled", "");
							document.getElementById("late"+1).setAttribute("disabled", "");
							document.getElementById("latebtn"+1).setAttribute("disabled", "");
						}
						
					}else{ // dont store anything
						alert('wew');
					}
				};
				//LATE=================
				document.getElementById("latebtn"+1).onclick = function() {
					
					alert("button "+storedEigthSched.data[1].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+1).value;
						eigthSchedNew.data.push(storedEigthSched.data[1]);
						eigthSchedNew.data[eigthSchedNew.data.length-1]["late"] = lateValue;
						eigthSchedNew.data[eigthSchedNew.data.length-1]["date"] = today;
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
			if(eigthSchedNew.data[2]==undefined){
				//ABSENT ============
				document.getElementById("absent"+2).onclick = function() {
					
					alert("button "+storedEigthSched.data[2].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("with substitute");
						if(y){
							alert('nice');
							eigthSchedNew.data.push(storedEigthSched.data[2]);
							eigthSchedNew.data[eigthSchedNew.data.length-1]["substitute"] = true;
							eigthSchedNew.data[eigthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							eigthSchedNew.data[eigthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+2).setAttribute("disabled", "");
							document.getElementById("late"+2).setAttribute("disabled", "");
							document.getElementById("latebtn"+2).setAttribute("disabled", "");
						}else{
							alert('nice');
							eigthSchedNew.data.push(storedEigthSched.data[2]);
							eigthSchedNew.data[eigthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							eigthSchedNew.data[eigthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+2).setAttribute("disabled", "");
							document.getElementById("late"+2).setAttribute("disabled", "");
							document.getElementById("latebtn"+2).setAttribute("disabled", "");
						}
						
					}else{ // dont store anything
						alert('wew');
					}
				};
				//LATE=================
				document.getElementById("latebtn"+2).onclick = function() {
					
					alert("button "+storedEigthSched.data[2].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+2).value;
						eigthSchedNew.data.push(storedEigthSched.data[2]);
						eigthSchedNew.data[eigthSchedNew.data.length-1]["late"] = lateValue;
						eigthSchedNew.data[eigthSchedNew.data.length-1]["date"] = today;
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
			if(eigthSchedNew.data[3]==undefined){
				///ABSENT ============
				document.getElementById("absent"+3).onclick = function() {
					
					alert("button "+storedEigthSched.data[3].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("with substitute");
						if(y){
							alert('nice');
							eigthSchedNew.data.push(storedEigthSched.data[3]);
							eigthSchedNew.data[eigthSchedNew.data.length-1]["substitute"] = true;
							eigthSchedNew.data[eigthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							eigthSchedNew.data[eigthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+3).setAttribute("disabled", "");
							document.getElementById("late"+3).setAttribute("disabled", "");
							document.getElementById("latebtn"+3).setAttribute("disabled", "");
						}else{
							eigthSchedNew.data.push(storedEigthSched.data[3]);
							eigthSchedNew.data[eigthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							eigthSchedNew.data[eigthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+3).setAttribute("disabled", "");
							document.getElementById("late"+3).setAttribute("disabled", "");
							document.getElementById("latebtn"+3).setAttribute("disabled", "");
						}
						
					}else{ // dont store anything
						alert('wew');
					}
				};
				//LATE=================
				document.getElementById("latebtn"+3).onclick = function() {
					
					alert("button "+storedEigthSched.data[3].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+3).value;
						eigthSchedNew.data.push(storedEigthSched.data[3]);
						eigthSchedNew.data[eigthSchedNew.data.length-1]["late"] = lateValue;
						eigthSchedNew.data[eigthSchedNew.data.length-1]["date"] = today;
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
			if(eigthSchedNew.data[4]==undefined){
				//ABSENT =====
				document.getElementById("absent"+4).onclick = function() {
					
					alert("button "+storedEigthSched.data[4].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						var y = confirm("with substitute");
						if(y){
							alert('nice');
							eigthSchedNew.data.push(storedEigthSched.data[4]);
							eigthSchedNew.data[eigthSchedNew.data.length-1]["substitute"] = true;
							eigthSchedNew.data[eigthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							eigthSchedNew.data[eigthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+4).setAttribute("disabled", "");
							document.getElementById("late"+4).setAttribute("disabled", "");
							document.getElementById("latebtn"+4).setAttribute("disabled", "");
						}else{
							alert('nice');
							eigthSchedNew.data.push(storedEigthSched.data[4]);
							eigthSchedNew.data[eigthSchedNew.data.length-1]["absent"] = 1; //problem di masave
							eigthSchedNew.data[eigthSchedNew.data.length-1]["date"] = today;
							document.getElementById("absent"+4).setAttribute("disabled", "");
							document.getElementById("late"+4).setAttribute("disabled", "");
							document.getElementById("latebtn"+4).setAttribute("disabled", "");
						}
						
					}else{ // dont store anything
						alert('wew');
					}
				};
				//LATE=================
				document.getElementById("latebtn"+4).onclick = function() {
					
					alert("button "+storedEigthSched.data[4].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+4).value;
						eigthSchedNew.data.push(storedEigthSched.data[4]);
						eigthSchedNew.data[eigthSchedNew.data.length-1]["late"] = lateValue;
						eigthSchedNew.data[eigthSchedNew.data.length-1]["date"] = today;
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
					  localStorage.setItem("absentLate230", JSON.stringify(eigthSchedNew));
					  storedAbsentLate230 = JSON.parse(localStorage.getItem("absentLate230"));
					 saveChecker230=false;
					 localStorage.setItem("saveChecker230", "false");
					 startUI();
				}
			}
	}else{
		alert("You Already Checked that schedule!");
	}		
	
}