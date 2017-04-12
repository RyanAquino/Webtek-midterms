	function summaryGalo(){

		var seven = localStorage.getItem("absentLate730");
		var eight = localStorage.getItem("absentLate830");
		var nine = localStorage.getItem("absentLate930");
		var ten = localStorage.getItem("absentLate1030");
		var eleven = localStorage.getItem("absentLate1130");
		var twelve = localStorage.getItem("absentLate1230");
		var one = localStorage.getItem("absentLate130");
		var two = localStorage.getItem("absentLate230");
		var three = localStorage.getItem("absentLate330");
		var four = localStorage.getItem("absentLate430");
		var five = localStorage.getItem("absentLate530");
//modal
		var div = document.createElement("div");
		div.setAttribute("class", "modal");
		div.setAttribute("id", "modal");

		if(seven!=null){
			var sevenStored = JSON.parse(seven);
			console.log("SEVENMALAMAN");
		}
		if(eight!=null){
			var eightStored = JSON.parse(eight);
		}
		if(nine!=null){
			var nineStored = JSON.parse(nine);
		}
		if(ten!=null){
			var tenStored = JSON.parse(ten);
		}
		if(eleven!=null){
			var elevenStored = JSON.parse(eleven);
		}
		if(twelve!=null){
			var twelveStored = JSON.parse(twelve);
		}
		if(one!=null){
			var oneStored = JSON.parse(one);
		}
		if(two!=null){
			var twoStored = JSON.parse(two);
		}
		if(three!=null){
			var threeStored = JSON.parse(three);
		}
		if(four!=null){
			var fourStored = JSON.parse(four);
		}
		if(five!=null){
			var fiveStored = JSON.parse(five);
		}
}		
		