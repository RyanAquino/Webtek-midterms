//global
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	today = mm+'/'+dd+'/'+yyyy;
	document.getElementById('today').innerHTML = today + "<br> Select Schedule";

//LOCAL STORAGE
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

// END LOCAL STORAGE
document.getElementById('firstSched').innerHTML=firstSched.time;

//730 records
var td1,td2,td3,td4,text1,text2,tex3,text4,absent,late;
var records = document.getElementById('records');
for (var i = 0; i<firstSched.data.length; i++){
	td1=document.createElement("td");
	td2=document.createElement("td");
	td3=document.createElement("td");
	td4=document.createElement("td");
	absent=document.createElement("input");
	absent.setAttribute('type', 'radio');
	late=document.createElement("input");
	late.setAttribute('type','text');

	text1=document.createTextNode(firstSched.data[i].name);
	text2=document.createTextNode(firstSched.data[i].room);

	td1.appendChild(text1);
	td2.appendChild(text2);
	td3.appendChild(absent);
	td4.appendChild(late);
}



//methods
function seven(){
	alert('you clicked me');
}