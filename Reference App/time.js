var times = [
		{Time: "7:30-8:30"},
		{Time: "8:30-9:30"},
		{Time: "9:30-10:30"},
		{Time: "10:30-11:30"},
		{Time: "11:30-12:30"},
			];
		for(var i = 0; i < times.length; i++)	{
		console.log(times[i].Time);
		}

localStorage.setItem("times", JSON.stringify(times));
var storedTimes = JSON.parse(localStorage.getItem("times"));