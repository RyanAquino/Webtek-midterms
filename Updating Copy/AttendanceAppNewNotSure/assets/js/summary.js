
function summary(){
		
		
		var body = document.getElementsByTagName("body");
		var table = document.createElement("table");
		table.setAttribute("border", "1");
		table.setAttribute("cellspacing", "0");
		table.setAttribute("cellpadding","0");
		var th1 = document.createElement('th');
		var th2 = document.createElement('th');
		var th3 = document.createElement('th');
		var th4 = document.createElement('th');
		
		var thtext1 = document.createTextNode("Time");
		var thtext2 = document.createTextNode("Name");
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
		

		for(var i = 0; i < firstSchedNew.data.length; i++){
		if(firstSchedNew.data[i].absent != undefined && firstSchedNew.data[i].late == undefined){
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");		
		td3=document.createElement("td");		
		td4=document.createElement("td");		
		
		text1 = document.createTextNode(firstSchedNew.time);
		text2 = document.createTextNode(firstSchedNew.data[i].name);
		text3 = document.createTextNode("absent");
		text4 = document.createTextNode("----------");

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		td4.appendChild(text4);

		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);


		table.appendChild(tr);
				
		}else if (firstSchedNew.data[i].absent == undefined && firstSchedNew.data[i].late != undefined) {
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");
		td3=document.createElement("td");		
		td4=document.createElement("td");		

		text1 = document.createTextNode(firstSchedNew.time);
		text2 = document.createTextNode(firstSchedNew.data[i].name);
		text3 = document.createTextNode("------");
		text4 = document.createTextNode(firstSchedNew.data[i].late+" minutes");

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		td4.appendChild(text4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		table.appendChild(tr);
				
		}
	 	}
	 	
	 	
	 	for(var i = 0; i < secondSchedNew.data.length; i++){
		if(secondSchedNew.data[i].absent != undefined && secondSchedNew.data[i].late == undefined){
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");		
		td3=document.createElement("td");		
		td4=document.createElement("td");		
		
		text1 = document.createTextNode(secondSchedNew.time);
		text2 = document.createTextNode(secondSchedNew.data[i].name);
		text3 = document.createTextNode("absent");
		text4 = document.createTextNode("----------");

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		td4.appendChild(text4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		table.appendChild(tr);
						
		}else if (secondSchedNew.data[i].absent == undefined && secondSchedNew.data[i].late != undefined) {
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");
		td3=document.createElement("td");		
		td4=document.createElement("td");		

		text1 = document.createTextNode(secondSchedNew.time);
		text2 = document.createTextNode(secondSchedNew.data[i].name);
		text3 = document.createTextNode("------");
		text4 = document.createTextNode(secondSchedNew.data[i].late+" minutes");

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		td4.appendChild(text4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		table.appendChild(tr);		
		}
	 	}
	 	
	 	for(var i = 0; i < thirdSchedNew.data.length; i++){
		if(thirdSchedNew.data[i].absent != undefined && thirdSchedNew.data[i].late == undefined){
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");		
		td3=document.createElement("td");		
		td4=document.createElement("td");		
		
		text1 = document.createTextNode(thirdSchedNew.time);
		text2 = document.createTextNode(thirdSchedNew.data[i].name);
		text3 = document.createTextNode("absent");
		text4 = document.createTextNode("----------");

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		td4.appendChild(text4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		table.appendChild(tr);			
		}else if (thirdSchedNew.data[i].absent == undefined && thirdSchedNew.data[i].late != undefined) {
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");
		td3=document.createElement("td");		
		td4=document.createElement("td");		

		text1 = document.createTextNode(thirdSchedNew.time);
		text2 = document.createTextNode(thirdSchedNew.data[i].name);
		text3 = document.createTextNode("------");
		text4 = document.createTextNode(thirdSchedNew.data[i].late+" minutes");

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		td4.appendChild(text4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		table.appendChild(tr);			
		}
	 	}
	 	
	 	for(var i = 0; i < fourthSchedNew.data.length; i++){
		if(fourthSchedNew.data[i].absent != undefined && fourthSchedNew.data[i].late == undefined){
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");		
		td3=document.createElement("td");		
		td4=document.createElement("td");		
		
		text1 = document.createTextNode(fourthSchedNew.time);
		text2 = document.createTextNode(fourthSchedNew.data[i].name);
		text3 = document.createTextNode("absent");
		text4 = document.createTextNode("----------");

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		td4.appendChild(text4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		table.appendChild(tr);			
		}else if (fourthSchedNew.data[i].absent == undefined && fourthSchedNew.data[i].late != undefined) {
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");
		td3=document.createElement("td");		
		td4=document.createElement("td");		

		text1 = document.createTextNode(fourthSchedNew.time);
		text2 = document.createTextNode(fourthSchedNew.data[i].name);
		text3 = document.createTextNode("------");
		text4 = document.createTextNode(fourthSchedNew.data[i].late+" minutes");

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		td4.appendChild(text4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		table.appendChild(tr);		
		}
	 	}
	 	
	 	for(var i = 0; i < fifthSchedNew.data.length; i++){
		if(fifthSchedNew.data[i].absent != undefined && fifthSchedNew.data[i].late == undefined){
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");		
		td3=document.createElement("td");		
		td4=document.createElement("td");		
		
		text1 = document.createTextNode(fifthSchedNew.time);
		text2 = document.createTextNode(fifthSchedNew.data[i].name);
		text3 = document.createTextNode("absent");
		text4 = document.createTextNode("----------");

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		td4.appendChild(text4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		table.appendChild(tr);			
		}else if (fifthSchedNew.data[i].absent == undefined && fifthSchedNew.data[i].late != undefined) {
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");
		td3=document.createElement("td");		
		td4=document.createElement("td");		

		text1 = document.createTextNode(fifthSchedNew.time);
		text2 = document.createTextNode(fifthSchedNew.data[i].name);
		text3 = document.createTextNode("------");
		text4 = document.createTextNode(fifthSchedNew.data[i].late+" minutes");

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		td4.appendChild(text4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		table.appendChild(tr);			
		}
	 	}
	 	
	 	for(var i = 0; i < sixthSchedNew.data.length; i++){
		if(sixthSchedNew.data[i].absent != undefined && sixthSchedNew.data[i].late == undefined){
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");		
		td3=document.createElement("td");		
		td4=document.createElement("td");

		text1 = document.createTextNode(sixthSchedNew.time);
		text2 = document.createTextNode(sixthSchedNew.data[i].name);
		text3 = document.createTextNode("absent");
		text4 = document.createTextNode("----------");

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		td4.appendChild(text4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		table.appendChild(tr);			
		}else if (sixthSchedNew.data[i].absent == undefined && sixthSchedNew.data[i].late != undefined) {
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");
		td3=document.createElement("td");		
		td4=document.createElement("td");		

		text1 = document.createTextNode(sixthSchedNew.time);
		text2 = document.createTextNode(sixthSchedNew.data[i].name);
		text3 = document.createTextNode("------");
		text4 = document.createTextNode(sixthSchedNew.data[i].late+" minutes");

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		td4.appendChild(text4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		table.appendChild(tr);			
		}
	 	}
	 	
	 	for(var i = 0; i < seventhSchedNew.data.length; i++){
		if(seventhSchedNew.data[i].absent != undefined && seventhSchedNew.data[i].late == undefined){
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");		
		td3=document.createElement("td");		
		td4=document.createElement("td");		
		
		text1 = document.createTextNode(seventhSchedNew.time);
		text2 = document.createTextNode(seventhSchedNew.data[i].name);
		text3 = document.createTextNode("absent");
		text4 = document.createTextNode("----------");

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		td4.appendChild(text4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		table.appendChild(tr);			
		}else if (seventhSchedNew.data[i].absent == undefined && seventhSchedNew.data[i].late != undefined) {
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");
		td3=document.createElement("td");		
		td4=document.createElement("td");		

		text1 = document.createTextNode(seventhSchedNew.time);
		text2 = document.createTextNode(seventhSchedNew.data[i].name);
		text3 = document.createTextNode("------");
		text4 = document.createTextNode(seventhSchedNew.data[i].late+" minutes");

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		td4.appendChild(text4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		table.appendChild(tr);			
		}
	 	}
	 	
	 	for(var i = 0; i < eightSchedNew.data.length; i++){
		if(eightSchedNew.data[i].absent != undefined && eightSchedNew.data[i].late == undefined){
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");		
		td3=document.createElement("td");		
		td4=document.createElement("td");		
		
		text1 = document.createTextNode(eightSchedNew.time);
		text2 = document.createTextNode(eightSchedNew.data[i].name);
		text3 = document.createTextNode("absent");
		text4 = document.createTextNode("----------");

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		td4.appendChild(text4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		table.appendChild(tr);			
		}else if (eigthSchedNew.data[i].absent == undefined && eigthSchedNew.data[i].late != undefined) {
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");
		td3=document.createElement("td");		
		td4=document.createElement("td");		

		text1 = document.createTextNode(eightSchedNew.time);
		text2 = document.createTextNode(eightSchedNew.data[i].name);
		text3 = document.createTextNode("------");
		text4 = document.createTextNode(eightSchedNew.data[i].late+" minutes");

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		td4.appendChild(text4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		table.appendChild(tr);			
		}
	 	}
	 	
	 	for(var i = 0; i < ninthSchedNew.data.length; i++){
		if(ninthSchedNew.data[i].absent != undefined && ninthSchedNew.data[i].late == undefined){
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");		
		td3=document.createElement("td");		
		td4=document.createElement("td");		
		
		text1 = document.createTextNode(ninthSchedNew.time);
		text2 = document.createTextNode(ninthSchedNew.data[i].name);
		text3 = document.createTextNode("absent");
		text4 = document.createTextNode("----------");

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		td4.appendChild(text4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		table.appendChild(tr);			
		}else if (ninthSchedNew.data[i].absent == undefined && ninthSchedNew.data[i].late != undefined) {
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");
		td3=document.createElement("td");		
		td4=document.createElement("td");		

		text1 = document.createTextNode(ninthSchedNew.time);
		text2 = document.createTextNode(ninthSchedNew.data[i].name);
		text3 = document.createTextNode("------");
		text4 = document.createTextNode(ninthSchedNew.data[i].late+" minutes");

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		td4.appendChild(text4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		table.appendChild(tr);			
		}
	 	}
	 	
	 	for(var i = 0; i < tenthSchedNew.data.length; i++){
		if(tenthSchedNew.data[i].absent != undefined && tenthSchedNew.data[i].late == undefined){
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");		
		td3=document.createElement("td");		
		td4=document.createElement("td");		
		
		text1 = document.createTextNode(tenthSchedNew.time);
		text2 = document.createTextNode(tenthSchedNew.data[i].name);
		text3 = document.createTextNode("absent");
		text4 = document.createTextNode("----------");

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		td4.appendChild(text4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		table.appendChild(tr);			
		}else if (tenthSchedNew.data[i].absent == undefined && tenthSchedNew.data[i].late != undefined) {
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");
		td3=document.createElement("td");		
		td4=document.createElement("td");		

		text1 = document.createTextNode(tenthSchedNew.time);
		text2 = document.createTextNode(tenthSchedNew.data[i].name);
		text3 = document.createTextNode("------");
		text4 = document.createTextNode(tenthSchedNew.data[i].late+" minutes");

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		td4.appendChild(text4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		table.appendChild(tr);			
		}
	 	}
	 	
	 	for(var i = 0; i < eleventhSchedNew.data.length; i++){
		if(eleventhSchedNew.data[i].absent != undefined && eleventhSchedNew.data[i].late == undefined){
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");		
		td3=document.createElement("td");		
		td4=document.createElement("td");		
		
		text1 = document.createTextNode(eleventhSchedNew.time);
		text2 = document.createTextNode(eleventhSchedNew.data[i].name);
		text3 = document.createTextNode("absent");
		text4 = document.createTextNode("----------");

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		td4.appendChild(text4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		table.appendChild(tr);			
		}else if (eleventhSchedNew.data[i].absent == undefined && eleventhSchedNew.data[i].late != undefined) {
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");
		td3=document.createElement("td");		
		td4=document.createElement("td");		

		text1 = document.createTextNode(eleventhSchedNew.time);
		text2 = document.createTextNode(eleventhSchedNew.data[i].name);
		text3 = document.createTextNode("------");
		text4 = document.createTextNode(eleventhSchedNew.data[i].late+" minutes");

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		td4.appendChild(text4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		table.appendChild(tr);			
		}	
	 	}
	 	document.body.appendChild(table);
	}
