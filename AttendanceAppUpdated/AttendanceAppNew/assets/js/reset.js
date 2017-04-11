function reset(){
	var conf = confirm("Are you sure you want to reset everything?");
	if(conf == true){
				firstSchedNew.data.length = 0;
				secondSchedNew.data.length = 0;
				thirdSchedNew.data.length = 0;
				fourthSchedNew.data.length = 0;
				fifthSchedNew.data.length = 0;
				sixthSchedNew.data.length = 0;
				seventhSchedNew.data.length = 0;
				eightSchedNew.data.length = 0;
				ninthSchedNew.data.length = 0;	
				tenthSchedNew.data.length = 0;
				eleventhSchedNew.data.length = 0;
				storedAbsentLate730.data.length = 0;
				storedAbsentLate830.data.length = 0;
				storedAbsentLate930.data.length = 0;
				storedAbsentLate1030.data.length = 0;
				storedAbsentLate1130.data.length = 0;
				storedAbsentLate1230.data.length = 0;
				storedAbsentLate130.data.length = 0;
				storedAbsentLate230.data.length = 0;
				storedAbsentLate330.data.length = 0;
				storedAbsentLate430.data.length = 0;
				storedAbsentLate530.data.length = 0;
				localStorage.setItem("saveChecker730", "true");
				localStorage.setItem("saveChecker830", "true");
				localStorage.setItem("saveChecker930", "true");
				localStorage.setItem("saveChecker1030", "true");
				localStorage.setItem("saveChecker1130", "true");
				localStorage.setItem("saveChecker1230", "true");
				localStorage.setItem("saveChecker130", "true");
				localStorage.setItem("saveChecker230", "true");
				localStorage.setItem("saveChecker330", "true");
				localStorage.setItem("saveChecker430", "true");
				localStorage.setItem("saveChecker530", "true");

				alert("All schedules has been cleared");
				startUI();
	}
}