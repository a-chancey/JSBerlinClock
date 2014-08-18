var BerlinClock = {	
	tick: function(){
		var date = new Date()
		var	hours = date.getHours()
		var	minutes = date.getMinutes()
		var	seconds = date.getSeconds();
		
		BerlinClock.reset();
		BerlinClock.updateHours(hours);
		BerlinClock.updateMinutes(minutes);
		BerlinClock.updateSeconds(seconds);
		BerlinClock.updateClock(hours, minutes, seconds);
	},
		reset: function(){
		var hoursOfFive = document.getElementById("hoursOfFive").children
			hoursOfOne = document.getElementById("hoursOfOne").children,
			minutesOfFive = document.getElementById("minutesOfFive").children,
			minutesOfOne = document.getElementById("minutesOfOne").children,

		
		hoursOfFive[0].classList.remove("red");
		hoursOfFive[1].classList.remove("red");
		hoursOfFive[2].classList.remove("red");
		hoursOfFive[3].classList.remove("red");
		hoursOfOne[0].classList.remove("red");
		hoursOfOne[1].classList.remove("red");
		hoursOfOne[2].classList.remove("red");
		hoursOfOne[3].classList.remove("red");
		minutesOfOne[0].classList.remove("yellow");
		minutesOfOne[1].classList.remove("yellow");
		minutesOfOne[2].classList.remove("yellow");
		minutesOfOne[3].classList.remove("yellow");
		
		minutesOfFive[0].classList.remove("red");
		minutesOfFive[1].classList.remove("red");
		minutesOfFive[2].classList.remove("red");
		minutesOfFive[3].classList.remove("red");
		minutesOfFive[4].classList.remove("red");
		minutesOfFive[5].classList.remove("red");
		minutesOfFive[6].classList.remove("red");
		minutesOfFive[7].classList.remove("red");
		minutesOfFive[8].classList.remove("red");
		minutesOfFive[9].classList.remove("red");
		minutesOfFive[10].classList.remove("red");
		minutesOfFive[0].classList.remove("yellow");
		minutesOfFive[1].classList.remove("yellow");
		minutesOfFive[2].classList.remove("yellow");
		minutesOfFive[3].classList.remove("yellow");
		minutesOfFive[4].classList.remove("yellow");
		minutesOfFive[5].classList.remove("yellow");
		minutesOfFive[6].classList.remove("yellow");
		minutesOfFive[7].classList.remove("yellow");
		minutesOfFive[8].classList.remove("yellow");
		minutesOfFive[9].classList.remove("yellow");
		minutesOfFive[10].classList.remove("yellow");
	},
		updateClock: function(hours, minutes, seconds){
		var fixTime = function(n){
		if(n < 10){
		return "0" + n;
	}
		return n;
	}
		hours = fixTime(hours);
		minutes = fixTime(minutes);
		seconds = fixTime(seconds);
		document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds;
	},
	updateSeconds: function(second) {
		var seconds = document.getElementById("seconds").children[0];
		if(second % 2 == 0) {
		seconds.classList.remove("yellow");
		} else {
		seconds.classList.add("yellow");
		}
	},
	updateHours: function(hour) {
	
		var hoursOfFive = document.getElementById("hoursOfFive").children;
		if (hour / 5 < 1) {
		hoursOfFive[0].classList.remove("red");
		hoursOfFive[1].classList.remove("red");
		hoursOfFive[2].classList.remove("red");
		hoursOfFive[3].classList.remove("red");
		} else if (hour / 5 >= 1 && hour / 5 < 2) {
		hoursOfFive[0].classList.add("red");
		hoursOfFive[1].classList.remove("red");
		hoursOfFive[2].classList.remove("red");
		hoursOfFive[3].classList.remove("red");
		} else if (hour / 5 >=2 && hour / 5 < 3) {
		hoursOfFive[0].classList.add("red");
		hoursOfFive[1].classList.add("red");
		hoursOfFive[2].classList.remove("red");
		hoursOfFive[3].classList.remove("red");
		} else if (hour / 5 >= 3 && hour / 5 < 4) {
		hoursOfFive[0].classList.add("red");
		hoursOfFive[1].classList.add("red");
		hoursOfFive[2].classList.add("red");
		hoursOfFive[3].classList.remove("red");
		} else {
		hoursOfFive[0].classList.add("red");
		hoursOfFive[1].classList.add("red");
		hoursOfFive[2].classList.add("red");
		hoursOfFive[3].classList.add("red");
		}
		var hoursOfOne = document.getElementById("hoursOfOne").children;
		if (hour % 5 == 0) {
		hoursOfOne[0].classList.remove("red");
		hoursOfOne[1].classList.remove("red");
		hoursOfOne[2].classList.remove("red");
		hoursOfOne[3].classList.remove("red");
		} else if (hour % 5 == 1 ) {
		hoursOfOne[0].classList.add("red");
		hoursOfOne[1].classList.remove("red");
		hoursOfOne[2].classList.remove("red");
		hoursOfOne[3].classList.remove("red");
		} else if (hour % 5 == 2) {
		hoursOfOne[0].classList.add("red");
		hoursOfOne[1].classList.add("red");
		hoursOfOne[2].classList.remove("red");
		hoursOfOne[3].classList.remove("red");
		} else if (hour % 5 == 3) {
		hoursOfOne[0].classList.add("red");
		hoursOfOne[1].classList.add("red");
		hoursOfOne[2].classList.add("red");
		hoursOfOne[3].classList.remove("red");
		} else if (hour % 5 == 4) {
		hoursOfOne[0].classList.add("red");
		hoursOfOne[1].classList.add("red");
		hoursOfOne[2].classList.add("red");
		hoursOfOne[3].classList.add("red");
		}

	},
	updateMinutes: function(minute) {
		var minutesOfFive = document.getElementById("minutesOfFive").children;
		if (minute / 5 < 1) {
		minutesOfFive[0].classList.remove("yellow");
		minutesOfFive[1].classList.remove("yellow");
		minutesOfFive[2].classList.remove("red");
		minutesOfFive[3].classList.remove("yellow");
		minutesOfFive[4].classList.remove("yellow");
		minutesOfFive[5].classList.remove("red");
		minutesOfFive[6].classList.remove("yellow");
		minutesOfFive[7].classList.remove("yellow");
		minutesOfFive[8].classList.remove("red");
		minutesOfFive[9].classList.remove("yellow");
		minutesOfFive[10].classList.remove("yellow");
		} else if (minute / 5 >= 1 && minute / 5 < 2) {
		minutesOfFive[0].classList.add("yellow");
		minutesOfFive[1].classList.remove("yellow");
		minutesOfFive[2].classList.remove("red");
		minutesOfFive[3].classList.remove("yellow");
		minutesOfFive[4].classList.remove("yellow");
		minutesOfFive[5].classList.remove("red");
		minutesOfFive[6].classList.remove("yellow");
		minutesOfFive[7].classList.remove("yellow");
		minutesOfFive[8].classList.remove("red");
		minutesOfFive[9].classList.remove("yellow");
		minutesOfFive[10].classList.remove("yellow");
		} else if (minute / 5 >= 2 && minute / 5 < 3) {
		minutesOfFive[0].classList.add("yellow");
		minutesOfFive[1].classList.add("yellow");
		minutesOfFive[2].classList.remove("red");
		minutesOfFive[3].classList.remove("yellow");
		minutesOfFive[4].classList.remove("yellow");
		minutesOfFive[5].classList.remove("red");
		minutesOfFive[6].classList.remove("yellow");
		minutesOfFive[7].classList.remove("yellow");
		minutesOfFive[8].classList.remove("red");
		minutesOfFive[9].classList.remove("yellow");
		minutesOfFive[10].classList.remove("yellow");
		} else if (minute / 5 >= 3 && minute / 5 < 4) {
		minutesOfFive[0].classList.add("yellow");
		minutesOfFive[1].classList.add("yellow");
		minutesOfFive[2].classList.add("red");
		minutesOfFive[3].classList.remove("yellow");
		minutesOfFive[4].classList.remove("yellow");
		minutesOfFive[5].classList.remove("red");
		minutesOfFive[6].classList.remove("yellow");
		minutesOfFive[7].classList.remove("yellow");
		minutesOfFive[8].classList.remove("red");
		minutesOfFive[9].classList.remove("yellow");
		minutesOfFive[10].classList.remove("yellow");
		} else if (minute / 5 >=4 && minute / 5 < 5){
		minutesOfFive[0].classList.add("yellow");
		minutesOfFive[1].classList.add("yellow");
		minutesOfFive[2].classList.add("red");
		minutesOfFive[3].classList.add("yellow");
		minutesOfFive[4].classList.remove("yellow");
		minutesOfFive[5].classList.remove("red");
		minutesOfFive[6].classList.remove("yellow");
		minutesOfFive[7].classList.remove("yellow");
		minutesOfFive[8].classList.remove("red");
		minutesOfFive[9].classList.remove("yellow");
		minutesOfFive[10].classList.remove("yellow");			
		} else if (minute / 5 >= 5 && minute / 5 < 6) {
		minutesOfFive[0].classList.add("yellow");
		minutesOfFive[1].classList.add("yellow");
		minutesOfFive[2].classList.add("red");
		minutesOfFive[3].classList.add("yellow");
		minutesOfFive[4].classList.add("yellow");
		minutesOfFive[5].classList.remove("red");
		minutesOfFive[6].classList.remove("yellow");
		minutesOfFive[7].classList.remove("yellow");
		minutesOfFive[8].classList.remove("red");
		minutesOfFive[9].classList.remove("yellow");
		minutesOfFive[10].classList.remove("yellow");
		} else if (minute / 5 >= 6 && minute / 5 < 7) {
		minutesOfFive[0].classList.add("yellow");
		minutesOfFive[1].classList.add("yellow");
		minutesOfFive[2].classList.add("red");
		minutesOfFive[3].classList.add("yellow");
		minutesOfFive[4].classList.add("yellow");
		minutesOfFive[5].classList.add("red");
		minutesOfFive[6].classList.remove("yellow");
		minutesOfFive[7].classList.remove("yellow");
		minutesOfFive[8].classList.remove("red");
		minutesOfFive[9].classList.remove("yellow");
		minutesOfFive[10].classList.remove("yellow");
		} else if (minute / 5 >= 7 && minute / 5 < 8) {
		minutesOfFive[0].classList.add("yellow");
		minutesOfFive[1].classList.add("yellow");
		minutesOfFive[2].classList.add("red");
		minutesOfFive[3].classList.add("yellow");
		minutesOfFive[4].classList.add("yellow");
		minutesOfFive[5].classList.add("red");
		minutesOfFive[6].classList.add("yellow");
		minutesOfFive[7].classList.remove("yellow");
		minutesOfFive[8].classList.remove("red");
		minutesOfFive[9].classList.remove("yellow");
		minutesOfFive[10].classList.remove("yellow");
		} else if (minute / 5 >=8 && minute / 5 < 9) {
		minutesOfFive[0].classList.add("yellow");
		minutesOfFive[1].classList.add("yellow");
		minutesOfFive[2].classList.add("red");
		minutesOfFive[3].classList.add("yellow");
		minutesOfFive[4].classList.add("yellow");
		minutesOfFive[5].classList.add("red");
		minutesOfFive[6].classList.add("yellow");
		minutesOfFive[7].classList.add("yellow");
		minutesOfFive[8].classList.remove("red");
		minutesOfFive[9].classList.remove("yellow");
		minutesOfFive[10].classList.remove("yellow");	
		} else if (minute / 5 >= 9 && minute / 5 < 10) {
		minutesOfFive[0].classList.add("yellow");
		minutesOfFive[1].classList.add("yellow");
		minutesOfFive[2].classList.add("red");
		minutesOfFive[3].classList.add("yellow");
		minutesOfFive[4].classList.add("yellow");
		minutesOfFive[5].classList.add("red");
		minutesOfFive[6].classList.add("yellow");
		minutesOfFive[7].classList.add("yellow");
		minutesOfFive[8].classList.add("red");
		minutesOfFive[9].classList.remove("yellow");
		minutesOfFive[10].classList.remove("yellow");
		} else if (minute / 5 >= 10 && minute / 5 < 11) {
		minutesOfFive[0].classList.add("yellow");
		minutesOfFive[1].classList.add("yellow");
		minutesOfFive[2].classList.add("red");
		minutesOfFive[3].classList.add("yellow");
		minutesOfFive[4].classList.add("yellow");
		minutesOfFive[5].classList.add("red");
		minutesOfFive[6].classList.add("yellow");
		minutesOfFive[7].classList.add("yellow");
		minutesOfFive[8].classList.add("red");
		minutesOfFive[9].classList.add("yellow");
		minutesOfFive[10].classList.remove("yellow");	
		} else {
		minutesOfFive[0].classList.add("yellow");
		minutesOfFive[1].classList.add("yellow");
		minutesOfFive[2].classList.add("red");
		minutesOfFive[3].classList.add("yellow");
		minutesOfFive[4].classList.add("yellow");
		minutesOfFive[5].classList.add("red");
		minutesOfFive[6].classList.add("yellow");
		minutesOfFive[7].classList.add("yellow");
		minutesOfFive[8].classList.add("red");
		minutesOfFive[9].classList.add("yellow");
		minutesOfFive[10].classList.add("yellow");
		}

		var minutesOfOne = document.getElementById("minutesOfOne").children;
		if (minute % 5 == 0) {
			minutesOfOne[0].classList.remove("yellow");
			minutesOfOne[1].classList.remove("yellow");
			minutesOfOne[2].classList.remove("yellow");
			minutesOfOne[3].classList.remove("yellow");
		} else if (minute % 5 == 1) {
			minutesOfOne[0].classList.add("yellow");
			minutesOfOne[1].classList.remove("yellow");
			minutesOfOne[2].classList.remove("yellow");
			minutesOfOne[3].classList.remove("yellow");
		} else if (minute % 5 == 2) {
			minutesOfOne[0].classList.add("yellow");
			minutesOfOne[1].classList.add("yellow");
			minutesOfOne[2].classList.remove("yellow");
			minutesOfOne[3].classList.remove("yellow");
		} else if (minute % 5 == 3) {
			minutesOfOne[0].classList.add("yellow");
			minutesOfOne[1].classList.add("yellow");
			minutesOfOne[2].classList.add("yellow");
			minutesOfOne[3].classList.remove("yellow");
		} else {
			minutesOfOne[0].classList.add("yellow");
			minutesOfOne[1].classList.add("yellow");
			minutesOfOne[2].classList.add("yellow");
			minutesOfOne[3].classList.add("yellow");
		}

	}
}

