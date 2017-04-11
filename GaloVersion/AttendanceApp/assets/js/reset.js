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
				alert("All schedules has been cleared");
				startUI();
	}
}