
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
		

		for(var i = 0; i < storedAbsentLate730.data.length; i++){
		if(storedAbsentLate730.data[i].absent != undefined && storedAbsentLate730.data[i].late == undefined){
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");		
		td3=document.createElement("td");		
		td4=document.createElement("td");		
		
		text1 = document.createTextNode(storedAbsentLate730.time);
		text2 = document.createTextNode(storedAbsentLate730.data[i].name);
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
				
		}else if (storedAbsentLate730.data[i].absent == undefined && storedAbsentLate730.data[i].late != undefined) {
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");
		td3=document.createElement("td");		
		td4=document.createElement("td");		

		text1 = document.createTextNode(storedAbsentLate730.time);
		text2 = document.createTextNode(storedAbsentLate730.data[i].name);
		text3 = document.createTextNode("------");
		text4 = document.createTextNode(storedAbsentLate730.data[i].late+" minutes");

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
	 	
	 	
	 	for(var i = 0; i < storedAbsentLate830.data.length; i++){
		if(storedAbsentLate830.data[i].absent != undefined && storedAbsentLate830.data[i].late == undefined){
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");		
		td3=document.createElement("td");		
		td4=document.createElement("td");		
		
		text1 = document.createTextNode(storedAbsentLate830.time);
		text2 = document.createTextNode(storedAbsentLate830.data[i].name);
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
						
		}else if (storedAbsentLate830.data[i].absent == undefined && storedAbsentLate830.data[i].late != undefined) {
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");
		td3=document.createElement("td");		
		td4=document.createElement("td");		

		text1 = document.createTextNode(storedAbsentLate830.time);
		text2 = document.createTextNode(storedAbsentLate830.data[i].name);
		text3 = document.createTextNode("------");
		text4 = document.createTextNode(storedAbsentLate830.data[i].late+" minutes");

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
	 	
	 	for(var i = 0; i < storedAbsentLate930.data.length; i++){
		if(storedAbsentLate930.data[i].absent != undefined && storedAbsentLate930.data[i].late == undefined){
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");		
		td3=document.createElement("td");		
		td4=document.createElement("td");		
		
		text1 = document.createTextNode(storedAbsentLate930.time);
		text2 = document.createTextNode(storedAbsentLate930.data[i].name);
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
		}else if (storedAbsentLate930.data[i].absent == undefined && storedAbsentLate930.data[i].late != undefined) {
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");
		td3=document.createElement("td");		
		td4=document.createElement("td");		

		text1 = document.createTextNode(storedAbsentLate930.time);
		text2 = document.createTextNode(storedAbsentLate930.data[i].name);
		text3 = document.createTextNode("------");
		text4 = document.createTextNode(storedAbsentLate930.data[i].late+" minutes");

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
	 	
	 	for(var i = 0; i < storedAbsentLate1030.data.length; i++){
		if(storedAbsentLate1030.data[i].absent != undefined && storedAbsentLate1030.data[i].late == undefined){
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");		
		td3=document.createElement("td");		
		td4=document.createElement("td");		
		
		text1 = document.createTextNode(storedAbsentLate1030.time);
		text2 = document.createTextNode(storedAbsentLate1030.data[i].name);
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
		}else if (storedAbsentLate1030.data[i].absent == undefined && storedAbsentLate1030.data[i].late != undefined) {
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");
		td3=document.createElement("td");		
		td4=document.createElement("td");		

		text1 = document.createTextNode(storedAbsentLate1030.time);
		text2 = document.createTextNode(storedAbsentLate1030.data[i].name);
		text3 = document.createTextNode("------");
		text4 = document.createTextNode(storedAbsentLate1030.data[i].late+" minutes");

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
	 	
	 	for(var i = 0; i < storedAbsentLate1130.data.length; i++){
		if(storedAbsentLate1130.data[i].absent != undefined && storedAbsentLate1130.data[i].late == undefined){
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");		
		td3=document.createElement("td");		
		td4=document.createElement("td");		
		
		text1 = document.createTextNode(storedAbsentLate1130.time);
		text2 = document.createTextNode(storedAbsentLate1130.data[i].name);
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
		}else if (storedAbsentLate1130.data[i].absent == undefined && storedAbsentLate1130.data[i].late != undefined) {
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");
		td3=document.createElement("td");		
		td4=document.createElement("td");		

		text1 = document.createTextNode(storedAbsentLate1130.time);
		text2 = document.createTextNode(storedAbsentLate1130.data[i].name);
		text3 = document.createTextNode("------");
		text4 = document.createTextNode(storedAbsentLate1130.data[i].late+" minutes");

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
	 	
	 	for(var i = 0; i < storedAbsentLate1230.data.length; i++){
		if(storedAbsentLate1230.data[i].absent != undefined && storedAbsentLate1230.data[i].late == undefined){
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");		
		td3=document.createElement("td");		
		td4=document.createElement("td");

		text1 = document.createTextNode(storedAbsentLate1230.time);
		text2 = document.createTextNode(storedAbsentLate1230.data[i].name);
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
		}else if (storedAbsentLate1230.data[i].absent == undefined && storedAbsentLate1230.data[i].late != undefined) {
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");
		td3=document.createElement("td");		
		td4=document.createElement("td");		

		text1 = document.createTextNode(storedAbsentLate1230.time);
		text2 = document.createTextNode(storedAbsentLate1230.data[i].name);
		text3 = document.createTextNode("------");
		text4 = document.createTextNode(storedAbsentLate1230.data[i].late+" minutes");

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
	 	
	 	for(var i = 0; i < storedAbsentLate130.data.length; i++){
		if(storedAbsentLate130.data[i].absent != undefined && storedAbsentLate130.data[i].late == undefined){
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");		
		td3=document.createElement("td");		
		td4=document.createElement("td");		
		
		text1 = document.createTextNode(storedAbsentLate130.time);
		text2 = document.createTextNode(storedAbsentLate130.data[i].name);
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
		}else if (storedAbsentLate130.data[i].absent == undefined && storedAbsentLate130.data[i].late != undefined) {
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");
		td3=document.createElement("td");		
		td4=document.createElement("td");		

		text1 = document.createTextNode(storedAbsentLate130.time);
		text2 = document.createTextNode(storedAbsentLate130.data[i].name);
		text3 = document.createTextNode("------");
		text4 = document.createTextNode(storedAbsentLate130.data[i].late+" minutes");

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
	 	
	 	for(var i = 0; i < storedAbsentLate230.data.length; i++){
		if(storedAbsentLate230.data[i].absent != undefined && storedAbsentLate230.data[i].late == undefined){
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");		
		td3=document.createElement("td");		
		td4=document.createElement("td");		
		
		text1 = document.createTextNode(storedAbsentLate230.time);
		text2 = document.createTextNode(storedAbsentLate230.data[i].name);
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

		text1 = document.createTextNode(storedAbsentLate230.time);
		text2 = document.createTextNode(storedAbsentLate230.data[i].name);
		text3 = document.createTextNode("------");
		text4 = document.createTextNode(storedAbsentLate230.data[i].late+" minutes");

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
	 	
	 	for(var i = 0; i < storedAbsentLate330.data.length; i++){
		if(storedAbsentLate330.data[i].absent != undefined && storedAbsentLate330.data[i].late == undefined){
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");		
		td3=document.createElement("td");		
		td4=document.createElement("td");		
		
		text1 = document.createTextNode(storedAbsentLate330.time);
		text2 = document.createTextNode(storedAbsentLate330.data[i].name);
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
		}else if (storedAbsentLate330.data[i].absent == undefined && storedAbsentLate330.data[i].late != undefined) {
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");
		td3=document.createElement("td");		
		td4=document.createElement("td");		

		text1 = document.createTextNode(storedAbsentLate330.time);
		text2 = document.createTextNode(storedAbsentLate330.data[i].name);
		text3 = document.createTextNode("------");
		text4 = document.createTextNode(storedAbsentLate330.data[i].late+" minutes");

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
	 	
	 	for(var i = 0; i < storedAbsentLate430.data.length; i++){
		if(storedAbsentLate430.data[i].absent != undefined && storedAbsentLate430.data[i].late == undefined){
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");		
		td3=document.createElement("td");		
		td4=document.createElement("td");		
		
		text1 = document.createTextNode(storedAbsentLate430.time);
		text2 = document.createTextNode(storedAbsentLate430.data[i].name);
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
		}else if (storedAbsentLate430.data[i].absent == undefined && storedAbsentLate430.data[i].late != undefined) {
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");
		td3=document.createElement("td");		
		td4=document.createElement("td");		

		text1 = document.createTextNode(storedAbsentLate430.time);
		text2 = document.createTextNode(storedAbsentLate430.data[i].name);
		text3 = document.createTextNode("------");
		text4 = document.createTextNode(storedAbsentLate430.data[i].late+" minutes");

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
	 	
	 	for(var i = 0; i < storedAbsentLate530.data.length; i++){
		if(storedAbsentLate530.data[i].absent != undefined && storedAbsentLate530.data[i].late == undefined){
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");		
		td3=document.createElement("td");		
		td4=document.createElement("td");		
		
		text1 = document.createTextNode(storedAbsentLate530.time);
		text2 = document.createTextNode(storedAbsentLate530.data[i].name);
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
		}else if (storedAbsentLate530.data[i].absent == undefined && storedAbsentLate530.data[i].late != undefined) {
		tr=document.createElement("tr");
		td1=document.createElement("td");
		td2=document.createElement("td");
		td3=document.createElement("td");		
		td4=document.createElement("td");		

		text1 = document.createTextNode(storedAbsentLate530.time);
		text2 = document.createTextNode(storedAbsentLate530.data[i].name);
		text3 = document.createTextNode("------");
		text4 = document.createTextNode(storedAbsentLate530.data[i].late+" minutes");

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
