function three(){	
if(localStorage.getItem("saveChecker330")!="false"){	
		console.log('three');
		document.body.innerHTML = "<h1 class='heading'> 330 </h1><button onclick=startUI()> Back </button>";
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
		for(var i=0; i<storedNinthSched.data.length; i++){
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
			text1 = document.createTextNode(storedNinthSched.data[i].name);
			text2 = document.createTextNode(storedNinthSched.data[i].room);
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
			//330 row 1

			if(ninthSchedNew.data[0]==undefined){
				//ABSENT================
				document.getElementById("absent"+0).onclick = function() {
					
					alert("button "+storedNinthSched.data[0].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						ninthSchedNew.data.push(storedNinthSched.data[0]);
						ninthSchedNew.data[ninthSchedNew.data.length-1].absent = 1;
						ninthSchedNew.data[ninthSchedNew.data.length-1].date = today;
						document.getElementById("absent"+0).setAttribute("disabled", "");
						document.getElementById("late"+0).setAttribute("disabled", "");
						document.getElementById("latebtn"+0).setAttribute("disabled", "");
					}else{ // dont store anything
						alert('wew');
					}
				};
				//LATE=================
				document.getElementById("latebtn"+0).onclick = function() {
					
					alert("button "+storedNinthSched.data[0].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+0).value;
						ninthSchedNew.data.push(storedNinthSched.data[0]);
						ninthSchedNew.data[ninthSchedNew.data.length-1].late = lateValue;
						ninthSchedNew.data[ninthSchedNew.data.length-1].date = today;
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
			if(ninthSchedNew.data[1]==undefined){
				//ABSENT==============
				document.getElementById("absent"+1).onclick = function() {
					
					alert("button "+storedNinthSched.data[1].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						alert('nice');
						ninthSchedNew.data.push(storedNinthSched.data[1]);
						ninthSchedNew.data[ninthSchedNew.data.length-1].absent = 1; //problem di masave
						ninthSchedNew.data[ninthSchedNew.data.length-1].date = today;
						document.getElementById("absent"+1).setAttribute("disabled", "");
						document.getElementById("late"+1).setAttribute("disabled", "");
						document.getElementById("latebtn"+1).setAttribute("disabled", "");
					}else{ // dont store anything
						alert('wew');
					}
				};
				//LATE=================
				document.getElementById("latebtn"+1).onclick = function() {
					
					alert("button "+storedNinthSched.data[1].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+1).value;
						ninthSchedNew.data.push(storedNinthSched.data[1]);
						ninthSchedNew.data[ninthSchedNew.data.length-1].late = lateValue;
						ninthSchedNew.data[ninthSchedNew.data.length-1].date = today;
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
			if(ninthSchedNew.data[2]==undefined){
				//ABSENT ============
				document.getElementById("absent"+2).onclick = function() {
					
					alert("button "+storedNinthSched.data[2].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						alert('nice');
						ninthSchedNew.data.push(storedNinthSched.data[2]);
						ninthSchedNew.data[ninthSchedNew.data.length-1].absent = 1; //problem di masave
						ninthSchedNew.data[ninthSchedNew.data.length-1].date = today;
						document.getElementById("absent"+2).setAttribute("disabled", "");
						document.getElementById("late"+2).setAttribute("disabled", "");
						document.getElementById("latebtn"+2).setAttribute("disabled", "");
					}else{ // dont store anything
						alert('wew');
					}
				};
				//LATE=================
				document.getElementById("latebtn"+2).onclick = function() {
					
					alert("button "+storedNinthSched.data[2].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+2).value;
						ninthSchedNew.data.push(storedNinthSched.data[2]);
						ninthSchedNew.data[ninthSchedNew.data.length-1].late = lateValue;
						ninthSchedNew.data[ninthSchedNew.data.length-1].date = today;
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
			if(ninthSchedNew.data[3]==undefined){
				///ABSENT ============
				document.getElementById("absent"+3).onclick = function() {
					
					alert("button "+storedNinthSched.data[3].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						alert('nice');
						ninthSchedNew.data.push(storedNinthSched.data[3]);
						ninthSchedNew.data[ninthSchedNew.data.length-1].absent = 1; //problem di masave
						ninthSchedNew.data[ninthSchedNew.data.length-1].date = today;
						document.getElementById("absent"+3).setAttribute("disabled", "");
						document.getElementById("late"+3).setAttribute("disabled", "");
						document.getElementById("latebtn"+3).setAttribute("disabled", "");
					}else{ // dont store anything
						alert('wew');
					}
				};
				//LATE=================
				document.getElementById("latebtn"+3).onclick = function() {
					
					alert("button "+storedNinthSched.data[3].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+3).value;
						ninthSchedNew.data.push(storedNinthSched.data[3]);
						ninthSchedNew.data[ninthSchedNew.data.length-1].late = lateValue;
						ninthSchedNew.data[ninthSchedNew.data.length-1].date = today;
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
			if(ninthSchedNew.data[4]==undefined){
				//ABSENT =====
				document.getElementById("absent"+4).onclick = function() {
					
					alert("button "+storedNinthSched.data[4].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						alert('nice');
						ninthSchedNew.data.push(storedNinthSched.data[4]);
						ninthSchedNew.data[ninthSchedNew.data.length-1].absent = 1; //problem di masave
						ninthSchedNew.data[ninthSchedNew.data.length-1].date = today;
						document.getElementById("absent"+4).setAttribute("disabled", "");
						document.getElementById("late"+4).setAttribute("disabled", "");
						document.getElementById("latebtn"+4).setAttribute("disabled", "");
					}else{ // dont store anything
						alert('wew');
					}
				};
				//LATE=================
				document.getElementById("latebtn"+4).onclick = function() {
					
					alert("button "+storedNinthSched.data[4].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+4).value;
						ninthSchedNew.data.push(storedNinthSched.data[4]);
						ninthSchedNew.data[ninthSchedNew.data.length-1].late = lateValue;
						ninthSchedNew.data[ninthSchedNew.data.length-1].date = today;
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
					  localStorage.setItem("absentLate330", JSON.stringify(ninthSchedNew));
					  storedAbsentLate330 = JSON.parse(localStorage.getItem("absentLate330"));
					 saveChecker330=false;
					 localStorage.setItem("saveChecker330", "false");
					 startUI();
				}
			}
	}else{
		alert("You Already Checked that schedule!");
	}		
	
}
function four(){	
if(localStorage.getItem("saveChecker430")!="false"){	
		console.log('four');
		document.body.innerHTML = "<h1 class='heading'> 430 </h1><button onclick=startUI()> Back </button>";
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
		for(var i=0; i<storedTenthSched.data.length; i++){
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
			text1 = document.createTextNode(storedTenthSched.data[i].name);
			text2 = document.createTextNode(storedTenthSched.data[i].room);
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
			//430 row 1

			if(tenthSchedNew.data[0]==undefined){
				//ABSENT================
				document.getElementById("absent"+0).onclick = function() {
					
					alert("button "+storedTenthSched.data[0].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						tenthSchedNew.data.push(storedTenthSched.data[0]);
						tenthSchedNew.data[tenthSchedNew.data.length-1].absent = 1;
						tenthSchedNew.data[tenthSchedNew.data.length-1].date = today;
						document.getElementById("absent"+0).setAttribute("disabled", "");
						document.getElementById("late"+0).setAttribute("disabled", "");
						document.getElementById("latebtn"+0).setAttribute("disabled", "");
					}else{ // dont store anything
						alert('wew');
					}
				};
				//LATE=================
				document.getElementById("latebtn"+0).onclick = function() {
					
					alert("button "+storedTenthSched.data[0].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+0).value;
						tenthSchedNew.data.push(storedTenthSched.data[0]);
						tenthSchedNew.data[tenthSchedNew.data.length-1].late = lateValue;
						tenthSchedNew.data[tenthSchedNew.data.length-1].date = today;
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
			if(tenthSchedNew.data[1]==undefined){
				//ABSENT==============
				document.getElementById("absent"+1).onclick = function() {
					
					alert("button "+storedTenthSched.data[1].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						alert('nice');
						tenthSchedNew.data.push(storedTenthSched.data[1]);
						tenthSchedNew.data[tenthSchedNew.data.length-1].absent = 1; //problem di masave
						tenthSchedNew.data[tenthSchedNew.data.length-1].date = today;
						document.getElementById("absent"+1).setAttribute("disabled", "");
						document.getElementById("late"+1).setAttribute("disabled", "");
						document.getElementById("latebtn"+1).setAttribute("disabled", "");
					}else{ // dont store anything
						alert('wew');
					}
				};
				//LATE=================
				document.getElementById("latebtn"+1).onclick = function() {
					
					alert("button "+storedTenthSched.data[1].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+1).value;
						tenthSchedNew.data.push(storedTenthSched.data[1]);
						tenthSchedNew.data[tenthSchedNew.data.length-1].late = lateValue;
						tenthSchedNew.data[tenthSchedNew.data.length-1].date = today;
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
			if(tenthSchedNew.data[2]==undefined){
				//ABSENT ============
				document.getElementById("absent"+2).onclick = function() {
					
					alert("button "+storedTenthSched.data[2].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						alert('nice');
						tenthSchedNew.data.push(storedTenthSched.data[2]);
						tenthSchedNew.data[tenthSchedNew.data.length-1].absent = 1; //problem di masave
						tenthSchedNew.data[tenthSchedNew.data.length-1].date = today;
						document.getElementById("absent"+2).setAttribute("disabled", "");
						document.getElementById("late"+2).setAttribute("disabled", "");
						document.getElementById("latebtn"+2).setAttribute("disabled", "");
					}else{ // dont store anything
						alert('wew');
					}
				};
				//LATE=================
				document.getElementById("latebtn"+2).onclick = function() {
					
					alert("button "+storedTenthSched.data[2].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+2).value;
						tenthSchedNew.data.push(storedTenthSched.data[2]);
						tenthSchedNew.data[tenthSchedNew.data.length-1].late = lateValue;
						tenthSchedNew.data[tenthSchedNew.data.length-1].date = today;
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
			if(tenthSchedNew.data[3]==undefined){
				///ABSENT ============
				document.getElementById("absent"+3).onclick = function() {
					
					alert("button "+storedTenthSched.data[3].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						alert('nice');
						tenthSchedNew.data.push(storedTenthSched.data[3]);
						tenthSchedNew.data[tenthSchedNew.data.length-1].absent = 1; //problem di masave
						tenthSchedNew.data[tenthSchedNew.data.length-1].date = today;
						document.getElementById("absent"+3).setAttribute("disabled", "");
						document.getElementById("late"+3).setAttribute("disabled", "");
						document.getElementById("latebtn"+3).setAttribute("disabled", "");
					}else{ // dont store anything
						alert('wew');
					}
				};
				//LATE=================
				document.getElementById("latebtn"+3).onclick = function() {
					
					alert("button "+storedTenthSched.data[3].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+3).value;
						tenthSchedNew.data.push(storedTenthSched.data[3]);
						tenthSchedNew.data[tenthSchedNew.data.length-1].late = lateValue;
						tenthSchedNew.data[tenthSchedNew.data.length-1].date = today;
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
			if(tenthSchedNew.data[4]==undefined){
				//ABSENT =====
				document.getElementById("absent"+4).onclick = function() {
					
					alert("button "+storedTenthSched.data[4].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						alert('nice');
						tenthSchedNew.data.push(storedTenthSched.data[4]);
						tenthSchedNew.data[tenthSchedNew.data.length-1].absent = 1; //problem di masave
						tenthSchedNew.data[tenthSchedNew.data.length-1].date = today;
						document.getElementById("absent"+4).setAttribute("disabled", "");
						document.getElementById("late"+4).setAttribute("disabled", "");
						document.getElementById("latebtn"+4).setAttribute("disabled", "");
					}else{ // dont store anything
						alert('wew');
					}
				};
				//LATE=================
				document.getElementById("latebtn"+4).onclick = function() {
					
					alert("button "+storedTenthSched.data[4].name+" has been clicked");
					var x = confirm("are you sure?");
					if(x == true){ //store na sa bagong array tapos disable yung button
						console.log('nice');
						var lateValue = document.getElementById('late'+4).value;
						tenthSchedNew.data.push(storedTenthSched.data[4]);
						tenthSchedNew.data[tenthSchedNew.data.length-1].late = lateValue;
						tenthSchedNew.data[tenthSchedNew.data.length-1].date = today;
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
					  localStorage.setItem("absentLate430", JSON.stringify(tenthSchedNew));
					  storedAbsentLate430 = JSON.parse(localStorage.getItem("absentLate430"));
					 saveChecker430=false;
					 localStorage.setItem("saveChecker430", "false");
					 startUI();
				}
			}
	}else{
		alert("You Already Checked that schedule!");
	}		
	
}