describe("BerlinClock", function(){
	var red = "red",
		yellow = "yellow",
		none = "";
	beforeEach(function(){
		affix("div#seconds div");
		affix("div#hoursOfFive div+div+div+div");
		affix("div#hoursOfOne div+div+div+div");
		affix("div#minutesOfFive div+div+div+div+div+div+div+div+div+div+div");
		affix("div#minutesOfOne div+div+div+div");
		affix("div#clock");
	});

	describe("updateSeconds", function(){
		it("marks the seconds as yellow when the second is odd", function(){
			BerlinClock.updateSeconds(1);
			var seconds = document.getElementById("seconds").children[0];
			expect(seconds.className).toBe("yellow");
		});

		it("marks the seconds as white when the second is even", function(){
			BerlinClock.updateSeconds(2);
			var seconds = document.getElementById("seconds").children[0];
			expect(seconds.className).toBe("");
		});
	});
	
	describe("updateHours", function(){
		describe("the hour is 0", function(){
			it("has hoursOfFive as [O O O O]", function(){
				BerlinClock.updateHours(0);
				var hoursOfFive = document.getElementById("hoursOfFive").children;
				expect(hoursOfFive[0].className).toBe("");
				expect(hoursOfFive[1].className).toBe("");
				expect(hoursOfFive[2].className).toBe("");
				expect(hoursOfFive[3].className).toBe("");
			});
			it("has hoursOfOne as [O O O O]", function(){
				BerlinClock.updateHours(0);
				var hoursOfOne = document.getElementById("hoursOfOne").children;
				expect(hoursOfOne[0].className).toBe("");
				expect(hoursOfOne[1].className).toBe("");
				expect(hoursOfOne[2].className).toBe("");
				expect(hoursOfOne[3].className).toBe("");
			});
		});
		describe("the hour is 1", function(){
			it("has hoursOfFive as [O O O O]", function(){
				BerlinClock.updateHours(1);
				var hoursOfFive = document.getElementById("hoursOfFive").children;
				expect(hoursOfFive[0].className).toBe("");
				expect(hoursOfFive[1].className).toBe("");
				expect(hoursOfFive[2].className).toBe("");
				expect(hoursOfFive[3].className).toBe("");
			});
			it("has hoursOfOne as [R O O O]", function(){
				BerlinClock.updateHours(1);
				var hoursOfOne = document.getElementById("hoursOfOne").children;
				expect(hoursOfOne[0].className).toBe("red");
				expect(hoursOfOne[1].className).toBe("");
				expect(hoursOfOne[2].className).toBe("");
				expect(hoursOfOne[3].className).toBe("");
			});
		});
		describe("the hour is 2", function(){
			it("has hoursOfFive as [O O O O]", function(){
				BerlinClock.updateHours(2);
				var hoursOfFive = document.getElementById("hoursOfFive").children;
				expect(hoursOfFive[0].className).toBe("");
				expect(hoursOfFive[1].className).toBe("");
				expect(hoursOfFive[2].className).toBe("");
				expect(hoursOfFive[3].className).toBe("");
			});
			it("has hoursOfOne as [R R O O]", function(){
				BerlinClock.updateHours(2);
				var hoursOfOne = document.getElementById("hoursOfOne").children;
				expect(hoursOfOne[0].className).toBe("red");
				expect(hoursOfOne[1].className).toBe("red");
				expect(hoursOfOne[2].className).toBe("");
				expect(hoursOfOne[3].className).toBe("");
			});
		});
		describe("the hour is 3", function(){
			it("has hoursOfFive as [O O O O]", function(){
				BerlinClock.updateHours(3);
				var hoursOfFive = document.getElementById("hoursOfFive").children;
				expect(hoursOfFive[0].className).toBe("");
				expect(hoursOfFive[1].className).toBe("");
				expect(hoursOfFive[2].className).toBe("");
				expect(hoursOfFive[3].className).toBe("");
			});
			it("has hoursOfOne as [R R R O]", function(){
				BerlinClock.updateHours(3);
				var hoursOfOne = document.getElementById("hoursOfOne").children;
				expect(hoursOfOne[0].className).toBe("red");
				expect(hoursOfOne[1].className).toBe("red");
				expect(hoursOfOne[2].className).toBe("red");
				expect(hoursOfOne[3].className).toBe("");
			});
		});
		describe("the hour is 4", function(){
			it("has hoursOfFive as [O O O O]", function(){
				BerlinClock.updateHours(4);
				var hoursOfFive = document.getElementById("hoursOfFive").children;
				expect(hoursOfFive[0].className).toBe("");
				expect(hoursOfFive[1].className).toBe("");
				expect(hoursOfFive[2].className).toBe("");
				expect(hoursOfFive[3].className).toBe("");
			});
			it("has hoursOfOne as [R R R R]", function(){
				BerlinClock.updateHours(4);
				var hoursOfOne = document.getElementById("hoursOfOne").children;
				expect(hoursOfOne[0].className).toBe("red");
				expect(hoursOfOne[1].className).toBe("red");
				expect(hoursOfOne[2].className).toBe("red");
				expect(hoursOfOne[3].className).toBe("red");
			});
		});
		describe("the hour is 5", function(){
			it("has hoursOfFive as [R O O O]", function(){
				BerlinClock.updateHours(5);
				var hoursOfFive = document.getElementById("hoursOfFive").children;
				expect(hoursOfFive[0].className).toBe("red");
				expect(hoursOfFive[1].className).toBe("");
				expect(hoursOfFive[2].className).toBe("");
				expect(hoursOfFive[3].className).toBe("");
			});
			it("has hoursOfOne as [O O O O]", function(){
				BerlinClock.updateHours(5);
				var hoursOfOne = document.getElementById("hoursOfOne").children;
				expect(hoursOfOne[0].className).toBe("");
				expect(hoursOfOne[1].className).toBe("");
				expect(hoursOfOne[2].className).toBe("");
				expect(hoursOfOne[3].className).toBe("");
			});
		});
		describe("the hour is 6", function(){
			it("has hoursOfFive as [R O O O]", function(){
				BerlinClock.updateHours(6);
				var hoursOfFive = document.getElementById("hoursOfFive").children;
				expect(hoursOfFive[0].className).toBe("red");
				expect(hoursOfFive[1].className).toBe("");
				expect(hoursOfFive[2].className).toBe("");
				expect(hoursOfFive[3].className).toBe("");
		});	
			it("has hoursOfOne as [R O O O]", function(){
				BerlinClock.updateHours(6);
				var hoursOfOne = document.getElementById("hoursOfOne").children;
				expect(hoursOfOne[0].className).toBe("red");
				expect(hoursOfOne[1].className).toBe("");
				expect(hoursOfOne[2].className).toBe("");
				expect(hoursOfOne[3].className).toBe("");
			});
		});
		describe("the hour is 7", function(){
			it("has hoursOfFive as [R O O O]", function(){
				BerlinClock.updateHours(7);
				var hoursOfFive = document.getElementById("hoursOfFive").children;
				expect(hoursOfFive[0].className).toBe("red");
				expect(hoursOfFive[1].className).toBe("");
				expect(hoursOfFive[2].className).toBe("");
				expect(hoursOfFive[3].className).toBe("");
			});
			
			it("has hoursOfOne as [R R O O]", function(){
				BerlinClock.updateHours(7);
				var hoursOfOne = document.getElementById("hoursOfOne").children;
				expect(hoursOfOne[0].className).toBe("red");
				expect(hoursOfOne[1].className).toBe("red");
				expect(hoursOfOne[2].className).toBe("");
				expect(hoursOfOne[3].className).toBe("");
			});
		});
		describe("the hour is 8", function(){
			it("has hoursOfFive as [R O O O]", function(){
				BerlinClock.updateHours(8);
				var hoursOfFive = document.getElementById("hoursOfFive").children;
				expect(hoursOfFive[0].className).toBe("red");
				expect(hoursOfFive[1].className).toBe("");
				expect(hoursOfFive[2].className).toBe("");
				expect(hoursOfFive[3].className).toBe("");
			});
			
			it("has hoursOfOne as [R R R O]", function(){
				BerlinClock.updateHours(8);
				var hoursOfOne = document.getElementById("hoursOfOne").children;
				expect(hoursOfOne[0].className).toBe("red");
				expect(hoursOfOne[1].className).toBe("red");
				expect(hoursOfOne[2].className).toBe("red");
				expect(hoursOfOne[3].className).toBe("");
			});
		});
		describe("the hour is 9", function(){
			it("has hoursOfFive as [R O O O]", function(){
				BerlinClock.updateHours(9);
				var hoursOfFive = document.getElementById("hoursOfFive").children;
				expect(hoursOfFive[0].className).toBe("red");
				expect(hoursOfFive[1].className).toBe("");
				expect(hoursOfFive[2].className).toBe("");
				expect(hoursOfFive[3].className).toBe("");
			});
			it("has hoursOfOne as [R R R R]", function(){
				BerlinClock.updateHours(9);
				var hoursOfOne = document.getElementById("hoursOfOne").children
				expect(hoursOfOne[0].className).toBe("red");
				expect(hoursOfOne[1].className).toBe("red");
				expect(hoursOfOne[2].className).toBe("red");
				expect(hoursOfOne[3].className).toBe("red");
			});
		});
		describe("the hour is 10", function(){
			it("has hoursOfFive as [R R O O]", function(){
				BerlinClock.updateHours(10);
				var hoursOfFive = document.getElementById("hoursOfFive").children;
				expect(hoursOfFive[0].className).toBe("red");
				expect(hoursOfFive[1].className).toBe("red");
				expect(hoursOfFive[2].className).toBe("");
				expect(hoursOfFive[3].className).toBe("");
			});
			it("has hoursOfOne as [O O O O]", function(){
				BerlinClock.updateHours(10);
				var hoursOfOne = document.getElementById("hoursOfOne").children;
				expect(hoursOfOne[0].className).toBe("");
				expect(hoursOfOne[1].className).toBe("");
				expect(hoursOfOne[2].className).toBe("");
				expect(hoursOfOne[3].className).toBe("");
			});
		});
		describe("the hour is 11", function(){
			it("has hoursOfFive as [R R O O]", function(){
				BerlinClock.updateHours(11);
				var hoursOfFive = document.getElementById("hoursOfFive").children;
				expect(hoursOfFive[0].className).toBe("red");
				expect(hoursOfFive[1].className).toBe("red");
				expect(hoursOfFive[2].className).toBe("");
				expect(hoursOfFive[3].className).toBe("");
			});
			it("has hoursOfOne as [R O O O]", function(){
				BerlinClock.updateHours(11);
				var hoursOfOne = document.getElementById("hoursOfOne").children;
				expect(hoursOfOne[0].className).toBe("red");
				expect(hoursOfOne[1].className).toBe("");
				expect(hoursOfOne[2].className).toBe("");
				expect(hoursOfOne[3].className).toBe("");
			});
		});
		describe("the hour is 12", function(){
			it("has hoursOfFive as [R R O O]", function(){
				BerlinClock.updateHours(12);
				var hoursOfFive = document.getElementById("hoursOfFive").children;
				expect(hoursOfFive[0].className).toBe("red");
				expect(hoursOfFive[1].className).toBe("red");
				expect(hoursOfFive[2].className).toBe("");
				expect(hoursOfFive[3].className).toBe("");
			});
			it("has hoursOfOne as [R R O O]", function(){
				BerlinClock.updateHours(12);
				var hoursOfOne = document.getElementById("hoursOfOne").children;
				expect(hoursOfOne[0].className).toBe("red");
				expect(hoursOfOne[1].className).toBe("red");
				expect(hoursOfOne[2].className).toBe("");
				expect(hoursOfOne[3].className).toBe("");
			});
		});
		describe("the hour is 13", function(){
			it("has hoursOfFive as [R R O O]", function(){
				BerlinClock.updateHours(13);
				var hoursOfFive = document.getElementById("hoursOfFive").children;
				expect(hoursOfFive[0].className).toBe("red");
				expect(hoursOfFive[1].className).toBe("red");
				expect(hoursOfFive[2].className).toBe("");
				expect(hoursOfFive[3].className).toBe("");			
			});
			it("has hoursOfOne as [R R R O]", function(){
				BerlinClock.updateHours(13);
				var hoursOfOne = document.getElementById("hoursOfOne").children;
				expect(hoursOfOne[0].className).toBe("red");
				expect(hoursOfOne[1].className).toBe("red");
				expect(hoursOfOne[2].className).toBe("red");
				expect(hoursOfOne[3].className).toBe("");
			});
		});
		describe("the hour is 14", function(){
			it("has hoursOfFive as [R R O O]", function(){
				BerlinClock.updateHours(14);
				var hoursOfFive = document.getElementById("hoursOfFive").children;
				expect(hoursOfFive[0].className).toBe("red");
				expect(hoursOfFive[1].className).toBe("red");
				expect(hoursOfFive[2].className).toBe("");
				expect(hoursOfFive[3].className).toBe("");			
			});
			it("has hoursOfOne as [R R R R]", function(){
				BerlinClock.updateHours(14);
				var hoursOfOne = document.getElementById("hoursOfOne").children;
				expect(hoursOfOne[0].className).toBe("red");
				expect(hoursOfOne[1].className).toBe("red");
				expect(hoursOfOne[2].className).toBe("red");
				expect(hoursOfOne[3].className).toBe("red");
			});
		});
		describe("the hour is 15", function(){
			it("has hoursOfFive as [R R R O]", function(){
				BerlinClock.updateHours(15);
				var hoursOfFive = document.getElementById("hoursOfFive").children;
				expect(hoursOfFive[0].className).toBe("red");
				expect(hoursOfFive[1].className).toBe("red");
				expect(hoursOfFive[2].className).toBe("red");
				expect(hoursOfFive[3].className).toBe("");
			});
			it("has hoursOfOne as [O O O O]", function(){
				BerlinClock.updateHours(15);
				var hoursOfOne = document.getElementById("hoursOfOne").children;
				expect(hoursOfOne[0].className).toBe("");
				expect(hoursOfOne[1].className).toBe("");
				expect(hoursOfOne[2].className).toBe("");
				expect(hoursOfOne[3].className).toBe("");
			});
		});
		describe("the hour is 16", function(){
			it("has hoursOfFive as [R R R O]", function(){
				BerlinClock.updateHours(16);
				var hoursOfFive = document.getElementById("hoursOfFive").children;
				expect(hoursOfFive[0].className).toBe("red");
				expect(hoursOfFive[1].className).toBe("red");
				expect(hoursOfFive[2].className).toBe("red");
				expect(hoursOfFive[3].className).toBe("");
			});
			it("has hoursOfOne as [R O O O]", function(){
				BerlinClock.updateHours(16);
				var hoursOfOne = document.getElementById("hoursOfOne").children;
				expect(hoursOfOne[0].className).toBe("red");
				expect(hoursOfOne[1].className).toBe("");
				expect(hoursOfOne[2].className).toBe("");
				expect(hoursOfOne[3].className).toBe("");			
			});
		});
		describe("the hour is 17", function(){
			it("has hoursOfFive as [R R R O]", function(){
				BerlinClock.updateHours(17);
				var hoursOfFive = document.getElementById("hoursOfFive").children;
				expect(hoursOfFive[0].className).toBe("red");
				expect(hoursOfFive[1].className).toBe("red");
				expect(hoursOfFive[2].className).toBe("red");
				expect(hoursOfFive[3].className).toBe("");
			});
			it("has hoursOfOne as [R R O O]", function(){
			BerlinClock.updateHours(17);
			var hoursOfOne = document.getElementById("hoursOfOne").children;
			expect(hoursOfOne[0].className).toBe("red");
			expect(hoursOfOne[1].className).toBe("red");
			expect(hoursOfOne[2].className).toBe("");
			expect(hoursOfOne[3].className).toBe("");
			});
		});
		describe("the hour is 18", function(){
			it("has hoursOfFive as [R R R O]", function(){
				BerlinClock.updateHours(18);
				var hoursOfFive = document.getElementById("hoursOfFive").children;
				expect(hoursOfFive[0].className).toBe("red");
				expect(hoursOfFive[1].className).toBe("red");
				expect(hoursOfFive[2].className).toBe("red");
				expect(hoursOfFive[3].className).toBe("");
			});	
			it("has hoursOfOne as [R R R O]", function(){
			BerlinClock.updateHours(18);
			var hoursOfOne = document.getElementById("hoursOfOne").children;
			expect(hoursOfOne[0].className).toBe("red");
			expect(hoursOfOne[1].className).toBe("red");
			expect(hoursOfOne[2].className).toBe("red");
			expect(hoursOfOne[3].className).toBe("");
			});
		});
		describe("the hour is 19", function(){
			it("has hoursOfFive as [R R R O]", function(){
				BerlinClock.updateHours(19);
				var hoursOfFive = document.getElementById("hoursOfFive").children;
				expect(hoursOfFive[0].className).toBe("red");
				expect(hoursOfFive[1].className).toBe("red");
				expect(hoursOfFive[2].className).toBe("red");
				expect(hoursOfFive[3].className).toBe("");
			});
			it("has hoursOfOne as [R R R R]", function(){
			BerlinClock.updateHours(19);
			var hoursOfOne = document.getElementById("hoursOfOne").children;
			expect(hoursOfOne[0].className).toBe("red");
			expect(hoursOfOne[1].className).toBe("red");
			expect(hoursOfOne[2].className).toBe("red");
			expect(hoursOfOne[3].className).toBe("red");
			});
		});
		describe("the hour is 20", function(){
			it("has hoursOfFive as [R R R R]", function(){
				BerlinClock.updateHours(20);
				var hoursOfFive = document.getElementById("hoursOfFive").children;
				expect(hoursOfFive[0].className).toBe("red");
				expect(hoursOfFive[1].className).toBe("red");
				expect(hoursOfFive[2].className).toBe("red");
				expect(hoursOfFive[3].className).toBe("red");			
			});
			it("has hoursOfOne as [O O O O]", function(){
				BerlinClock.updateHours(20);
				var hoursOfOne = document.getElementById("hoursOfOne").children;
				expect(hoursOfOne[0].className).toBe("");
				expect(hoursOfOne[1].className).toBe("");
				expect(hoursOfOne[2].className).toBe("");
				expect(hoursOfOne[3].className).toBe("");
			});
		});
		describe("the hour is 21", function(){
			it("has hoursOfFive as [R R R R]", function(){
				BerlinClock.updateHours(21);
				var hoursOfFive = document.getElementById("hoursOfFive").children;
				expect(hoursOfFive[0].className).toBe("red");
				expect(hoursOfFive[1].className).toBe("red");
				expect(hoursOfFive[2].className).toBe("red");
				expect(hoursOfFive[3].className).toBe("red");
			});
			it("has hoursOfOne as [R O O O]", function(){
				BerlinClock.updateHours(21);
				var hoursOfOne = document.getElementById("hoursOfOne").children;
				expect(hoursOfOne[0].className).toBe("red");
				expect(hoursOfOne[1].className).toBe("");
				expect(hoursOfOne[2].className).toBe("");
				expect(hoursOfOne[3].className).toBe("");
			});
		});
		describe("the hour is 22", function(){
			it("has hoursOfFive as [R R R R]", function(){
				BerlinClock.updateHours(22);
				var hoursOfFive = document.getElementById("hoursOfFive").children;
				expect(hoursOfFive[0].className).toBe("red");
				expect(hoursOfFive[1].className).toBe("red");
				expect(hoursOfFive[2].className).toBe("red");
				expect(hoursOfFive[3].className).toBe("red");			
			});
			it("has hoursOfOne as [R R O O]", function(){
				BerlinClock.updateHours(22);
				var hoursOfOne = document.getElementById("hoursOfOne").children;
				expect(hoursOfOne[0].className).toBe("red");
				expect(hoursOfOne[1].className).toBe("red");
				expect(hoursOfOne[2].className).toBe("");
				expect(hoursOfOne[3].className).toBe("");			
			});
		});
		describe("the hour is 23", function(){
			it("has hoursOfFive as [R R R R]", function(){
				BerlinClock.updateHours(23);
				var hoursOfFive = document.getElementById("hoursOfFive").children;
				expect(hoursOfFive[0].className).toBe("red");
				expect(hoursOfFive[1].className).toBe("red");
				expect(hoursOfFive[2].className).toBe("red");
				expect(hoursOfFive[3].className).toBe("red");			
			});
			it("has hoursOfOne as [R R R O]", function(){
				BerlinClock.updateHours(23);
				var hoursOfOne = document.getElementById("hoursOfOne").children;
				expect(hoursOfOne[0].className).toBe("red");
				expect(hoursOfOne[1].className).toBe("red");
				expect(hoursOfOne[2].className).toBe("red");
				expect(hoursOfOne[3].className).toBe("");			
			});
		});
	});
	describe("updateMinutes", function(){
		describe("the minute is 0", function(){
			it("has minutesOfFive as [O O O O O O O O O O O]", function(){
				BerlinClock.updateMinutes(0);
				var minutesOfFive = document.getElementById("minutesOfFive").children;
				expect(minutesOfFive[0].className).toBe("");
				expect(minutesOfFive[1].className).toBe("");
				expect(minutesOfFive[2].className).toBe("");
				expect(minutesOfFive[3].className).toBe("");
				expect(minutesOfFive[4].className).toBe("");
				expect(minutesOfFive[5].className).toBe("");
				expect(minutesOfFive[6].className).toBe("");
				expect(minutesOfFive[7].className).toBe("");
				expect(minutesOfFive[8].className).toBe("");
				expect(minutesOfFive[9].className).toBe("");
				expect(minutesOfFive[10].className).toBe("");
			});
			it("has minutesOfOne as [O O O O]", function(){
				BerlinClock.updateMinutes(0);
				var minutesOfOne = document.getElementById("minutesOfOne").children;
				expect(minutesOfOne[0].className).toBe("");
				expect(minutesOfOne[1].className).toBe("");
				expect(minutesOfOne[2].className).toBe("");
				expect(minutesOfOne[3].className).toBe("");
			})
		});	
		describe("the minute is 1", function(){
			it("has minutesOfFive as [O O O O O O O O O O O]", function(){
				BerlinClock.updateMinutes(1);
				var minutesOfFive = document.getElementById("minutesOfFive").children;
				expect(minutesOfFive[0].className).toBe("");
				expect(minutesOfFive[1].className).toBe("");
				expect(minutesOfFive[2].className).toBe("");
				expect(minutesOfFive[3].className).toBe("");
				expect(minutesOfFive[4].className).toBe("");
				expect(minutesOfFive[5].className).toBe("");
				expect(minutesOfFive[6].className).toBe("");
				expect(minutesOfFive[7].className).toBe("");
				expect(minutesOfFive[8].className).toBe("");
				expect(minutesOfFive[9].className).toBe("");
				expect(minutesOfFive[10].className).toBe("");
			});
			it("has minutesOfOne as [Y O O O]", function(){
				BerlinClock.updateMinutes(1);
				var minutesOfOne = document.getElementById("minutesOfOne").children;
				expect(minutesOfOne[0].className).toBe("yellow");
				expect(minutesOfOne[1].className).toBe("");
				expect(minutesOfOne[2].className).toBe("");
				expect(minutesOfOne[3].className).toBe("");
			})
		});
		describe("the minute is 2", function(){
			it("has minutesOfFive as [O O O O O O O O O O O]", function(){
				BerlinClock.updateMinutes(2);
				var minutesOfFive = document.getElementById("minutesOfFive").children;
				expect(minutesOfFive[0].className).toBe("");
				expect(minutesOfFive[1].className).toBe("");
				expect(minutesOfFive[2].className).toBe("");
				expect(minutesOfFive[3].className).toBe("");
				expect(minutesOfFive[4].className).toBe("");
				expect(minutesOfFive[5].className).toBe("");
				expect(minutesOfFive[6].className).toBe("");
				expect(minutesOfFive[7].className).toBe("");
				expect(minutesOfFive[8].className).toBe("");
				expect(minutesOfFive[9].className).toBe("");
				expect(minutesOfFive[10].className).toBe("");
			});
			it("has minutesOfOne as [Y Y O O]", function(){
				BerlinClock.updateMinutes(2);
				var minutesOfOne = document.getElementById("minutesOfOne").children;
				expect(minutesOfOne[0].className).toBe("yellow");
				expect(minutesOfOne[1].className).toBe("yellow");
				expect(minutesOfOne[2].className).toBe("");
				expect(minutesOfOne[3].className).toBe("");
			})
		});
		describe("the minute is 3", function(){
			it("has minutesOfFive as [O O O O O O O O O O O]", function(){
				BerlinClock.updateMinutes(3);
				var minutesOfFive = document.getElementById("minutesOfFive").children;
				expect(minutesOfFive[0].className).toBe("");
				expect(minutesOfFive[1].className).toBe("");
				expect(minutesOfFive[2].className).toBe("");
				expect(minutesOfFive[3].className).toBe("");
				expect(minutesOfFive[4].className).toBe("");
				expect(minutesOfFive[5].className).toBe("");
				expect(minutesOfFive[6].className).toBe("");
				expect(minutesOfFive[7].className).toBe("");
				expect(minutesOfFive[8].className).toBe("");
				expect(minutesOfFive[9].className).toBe("");
				expect(minutesOfFive[10].className).toBe("");
			});
			it("has minutesOfOne as [Y Y Y O]", function(){
				BerlinClock.updateMinutes(3);
				var minutesOfOne = document.getElementById("minutesOfOne").children;
				expect(minutesOfOne[0].className).toBe("yellow");
				expect(minutesOfOne[1].className).toBe("yellow");
				expect(minutesOfOne[2].className).toBe("yellow");
				expect(minutesOfOne[3].className).toBe("");
			})
		});
		describe("the minute is 4", function(){
			it("has minutesOfFive as [O O O O O O O O O O O]", function(){
				BerlinClock.updateMinutes(4);
				var minutesOfFive = document.getElementById("minutesOfFive").children;
				expect(minutesOfFive[0].className).toBe("");
				expect(minutesOfFive[1].className).toBe("");
				expect(minutesOfFive[2].className).toBe("");
				expect(minutesOfFive[3].className).toBe("");
				expect(minutesOfFive[4].className).toBe("");
				expect(minutesOfFive[5].className).toBe("");
				expect(minutesOfFive[6].className).toBe("");
				expect(minutesOfFive[7].className).toBe("");
				expect(minutesOfFive[8].className).toBe("");
				expect(minutesOfFive[9].className).toBe("");
				expect(minutesOfFive[10].className).toBe("");
			});
			it("has minutesOfOne as [Y Y Y Y]", function(){
				BerlinClock.updateMinutes(4);
				var minutesOfOne = document.getElementById("minutesOfOne").children;
				expect(minutesOfOne[0].className).toBe("yellow");
				expect(minutesOfOne[1].className).toBe("yellow");
				expect(minutesOfOne[2].className).toBe("yellow");
				expect(minutesOfOne[3].className).toBe("yellow");
			})
		});
		describe("the minute is 5", function(){
			it("has minutesOfFive as [Y O O O O O O O O O O]", function(){
				BerlinClock.updateMinutes(5);
				var minutesOfFive = document.getElementById("minutesOfFive").children;
				expect(minutesOfFive[0].className).toBe("yellow");
				expect(minutesOfFive[1].className).toBe("");
				expect(minutesOfFive[2].className).toBe("");
				expect(minutesOfFive[3].className).toBe("");
				expect(minutesOfFive[4].className).toBe("");
				expect(minutesOfFive[5].className).toBe("");
				expect(minutesOfFive[6].className).toBe("");
				expect(minutesOfFive[7].className).toBe("");
				expect(minutesOfFive[8].className).toBe("");
				expect(minutesOfFive[9].className).toBe("");
				expect(minutesOfFive[10].className).toBe("");
			});
			it("has minutesOfOne as [O O O O]", function(){
				BerlinClock.updateMinutes(5);
				var minutesOfOne = document.getElementById("minutesOfOne").children;
				expect(minutesOfOne[0].className).toBe("");
				expect(minutesOfOne[1].className).toBe("");
				expect(minutesOfOne[2].className).toBe("");
				expect(minutesOfOne[3].className).toBe("");
			})
		});
		describe("the minute is 10", function(){
			it("has minutesOfFive as [Y Y O O O O O O O O O]", function(){
				BerlinClock.updateMinutes(10);
				var minutesOfFive = document.getElementById("minutesOfFive").children;
				expect(minutesOfFive[0].className).toBe("yellow");
				expect(minutesOfFive[1].className).toBe("yellow");
				expect(minutesOfFive[2].className).toBe("");
				expect(minutesOfFive[3].className).toBe("");
				expect(minutesOfFive[4].className).toBe("");
				expect(minutesOfFive[5].className).toBe("");
				expect(minutesOfFive[6].className).toBe("");
				expect(minutesOfFive[7].className).toBe("");
				expect(minutesOfFive[8].className).toBe("");
				expect(minutesOfFive[9].className).toBe("");
				expect(minutesOfFive[10].className).toBe("");
			});
			it("has minutesOfOne as [O O O O]", function(){
				BerlinClock.updateMinutes(10);
				var minutesOfOne = document.getElementById("minutesOfOne").children;
				expect(minutesOfOne[0].className).toBe("");
				expect(minutesOfOne[1].className).toBe("");
				expect(minutesOfOne[2].className).toBe("");
				expect(minutesOfOne[3].className).toBe("");
			})
		});
		describe("the minute is 15", function(){
			it("has minutesOfFive as [Y Y R O O O O O O O O]", function(){
				BerlinClock.updateMinutes(15);
				var minutesOfFive = document.getElementById("minutesOfFive").children;
				expect(minutesOfFive[0].className).toBe("yellow");
				expect(minutesOfFive[1].className).toBe("yellow");
				expect(minutesOfFive[2].className).toBe("red");
				expect(minutesOfFive[3].className).toBe("");
				expect(minutesOfFive[4].className).toBe("");
				expect(minutesOfFive[5].className).toBe("");
				expect(minutesOfFive[6].className).toBe("");
				expect(minutesOfFive[7].className).toBe("");
				expect(minutesOfFive[8].className).toBe("");
				expect(minutesOfFive[9].className).toBe("");
				expect(minutesOfFive[10].className).toBe("");
			});
			it("has minutesOfOne as [O O O O]", function(){
				BerlinClock.updateMinutes(15);
				var minutesOfOne = document.getElementById("minutesOfOne").children;
				expect(minutesOfOne[0].className).toBe("");
				expect(minutesOfOne[1].className).toBe("");
				expect(minutesOfOne[2].className).toBe("");
				expect(minutesOfOne[3].className).toBe("");
			})
		});
		describe("the minute is 20", function(){
			it("has minutesOfFive as [Y Y R Y O O O O O O O]", function(){
				BerlinClock.updateMinutes(20);
				var minutesOfFive = document.getElementById("minutesOfFive").children;
				expect(minutesOfFive[0].className).toBe("yellow");
				expect(minutesOfFive[1].className).toBe("yellow");
				expect(minutesOfFive[2].className).toBe("red");
				expect(minutesOfFive[3].className).toBe("yellow");
				expect(minutesOfFive[4].className).toBe("");
				expect(minutesOfFive[5].className).toBe("");
				expect(minutesOfFive[6].className).toBe("");
				expect(minutesOfFive[7].className).toBe("");
				expect(minutesOfFive[8].className).toBe("");
				expect(minutesOfFive[9].className).toBe("");
				expect(minutesOfFive[10].className).toBe("");
			});
			it("has minutesOfOne as [O O O O]", function(){
				BerlinClock.updateMinutes(20);
				var minutesOfOne = document.getElementById("minutesOfOne").children;
				expect(minutesOfOne[0].className).toBe("");
				expect(minutesOfOne[1].className).toBe("");
				expect(minutesOfOne[2].className).toBe("");
				expect(minutesOfOne[3].className).toBe("");			
			})
		});
		describe("the minute is 25", function(){
			it("has minutesOfFive as [Y Y R Y Y O O O O O O]", function(){
				BerlinClock.updateMinutes(25);
				var minutesOfFive = document.getElementById("minutesOfFive").children;
				expect(minutesOfFive[0].className).toBe("yellow");
				expect(minutesOfFive[1].className).toBe("yellow");
				expect(minutesOfFive[2].className).toBe("red");
				expect(minutesOfFive[3].className).toBe("yellow");
				expect(minutesOfFive[4].className).toBe("yellow");
				expect(minutesOfFive[5].className).toBe("");
				expect(minutesOfFive[6].className).toBe("");
				expect(minutesOfFive[7].className).toBe("");
				expect(minutesOfFive[8].className).toBe("");
				expect(minutesOfFive[9].className).toBe("");
				expect(minutesOfFive[10].className).toBe("");
			});
			it("has minutesOfOne as [O O O O]", function(){
				BerlinClock.updateMinutes(25);
				var minutesOfOne = document.getElementById("minutesOfOne").children;
				expect(minutesOfOne[0].className).toBe("");
				expect(minutesOfOne[1].className).toBe("");
				expect(minutesOfOne[2].className).toBe("");
				expect(minutesOfOne[3].className).toBe("");	
			})
		});
		describe("the minute is 30", function(){
			it("has minutesOfFive as [Y Y R Y Y R O O O O O]", function(){
				BerlinClock.updateMinutes(30);
				var minutesOfFive = document.getElementById("minutesOfFive").children;
				expect(minutesOfFive[0].className).toBe("yellow");
				expect(minutesOfFive[1].className).toBe("yellow");
				expect(minutesOfFive[2].className).toBe("red");
				expect(minutesOfFive[3].className).toBe("yellow");
				expect(minutesOfFive[4].className).toBe("yellow");
				expect(minutesOfFive[5].className).toBe("red");
				expect(minutesOfFive[6].className).toBe("");
				expect(minutesOfFive[7].className).toBe("");
				expect(minutesOfFive[8].className).toBe("");
				expect(minutesOfFive[9].className).toBe("");
				expect(minutesOfFive[10].className).toBe("");
			});
			it("has minutesOfOne as [O O O O]", function(){
				BerlinClock.updateMinutes(30);
				var minutesOfOne = document.getElementById("minutesOfOne").children;
				expect(minutesOfOne[0].className).toBe("");
				expect(minutesOfOne[1].className).toBe("");
				expect(minutesOfOne[2].className).toBe("");
				expect(minutesOfOne[3].className).toBe("");
			})
		});
		describe("the minute is 35", function(){
			it("has minutesOfFive as [Y Y R Y Y R Y O O O O]", function(){
				BerlinClock.updateMinutes(35);
				var minutesOfFive = document.getElementById("minutesOfFive").children;
				expect(minutesOfFive[0].className).toBe("yellow");
				expect(minutesOfFive[1].className).toBe("yellow");
				expect(minutesOfFive[2].className).toBe("red");
				expect(minutesOfFive[3].className).toBe("yellow");
				expect(minutesOfFive[4].className).toBe("yellow");
				expect(minutesOfFive[5].className).toBe("red");
				expect(minutesOfFive[6].className).toBe("yellow");
				expect(minutesOfFive[7].className).toBe("");
				expect(minutesOfFive[8].className).toBe("");
				expect(minutesOfFive[9].className).toBe("");
				expect(minutesOfFive[10].className).toBe("");				
			});
			it("has minutesOfOne as [O O O O]", function(){
				BerlinClock.updateMinutes(35);
				var minutesOfOne = document.getElementById("minutesOfOne").children;
				expect(minutesOfOne[0].className).toBe("");
				expect(minutesOfOne[1].className).toBe("");
				expect(minutesOfOne[2].className).toBe("");
				expect(minutesOfOne[3].className).toBe("");
			})
		});	
		describe("the minute is 40", function(){
			it("has minutesOfFive as [Y Y R Y Y R Y Y O O O]", function(){
				BerlinClock.updateMinutes(40);
				var minutesOfFive = document.getElementById("minutesOfFive").children;
				expect(minutesOfFive[0].className).toBe("yellow");
				expect(minutesOfFive[1].className).toBe("yellow");
				expect(minutesOfFive[2].className).toBe("red");
				expect(minutesOfFive[3].className).toBe("yellow");
				expect(minutesOfFive[4].className).toBe("yellow");
				expect(minutesOfFive[5].className).toBe("red");
				expect(minutesOfFive[6].className).toBe("yellow");
				expect(minutesOfFive[7].className).toBe("yellow");
				expect(minutesOfFive[8].className).toBe("");
				expect(minutesOfFive[9].className).toBe("");
				expect(minutesOfFive[10].className).toBe("");				
			});
			it("has minutesOfOne as [O O O O]", function(){
				BerlinClock.updateMinutes(40);
				var minutesOfOne = document.getElementById("minutesOfOne").children;
				expect(minutesOfOne[0].className).toBe("");
				expect(minutesOfOne[1].className).toBe("");
				expect(minutesOfOne[2].className).toBe("");
				expect(minutesOfOne[3].className).toBe("");
			})
		});	
		describe("the minute is 45", function(){
			it("has minutesOfFive as [Y Y R Y Y R Y Y R O O]", function(){
				BerlinClock.updateMinutes(45);
				var minutesOfFive = document.getElementById("minutesOfFive").children;
				expect(minutesOfFive[0].className).toBe("yellow");
				expect(minutesOfFive[1].className).toBe("yellow");
				expect(minutesOfFive[2].className).toBe("red");
				expect(minutesOfFive[3].className).toBe("yellow");
				expect(minutesOfFive[4].className).toBe("yellow");
				expect(minutesOfFive[5].className).toBe("red");
				expect(minutesOfFive[6].className).toBe("yellow");
				expect(minutesOfFive[7].className).toBe("yellow");
				expect(minutesOfFive[8].className).toBe("red");
				expect(minutesOfFive[9].className).toBe("");
				expect(minutesOfFive[10].className).toBe("");
			});
			it("has minutesOfOne as [O O O O]", function(){
				BerlinClock.updateMinutes(45);
				var minutesOfOne = document.getElementById("minutesOfOne").children;
				expect(minutesOfOne[0].className).toBe("");
				expect(minutesOfOne[1].className).toBe("");
				expect(minutesOfOne[2].className).toBe("");
				expect(minutesOfOne[3].className).toBe("");
			})
		});	
		describe("the minute is 50", function(){
			it("has minutesOfFive as [Y Y R Y Y R Y Y R Y O]", function(){
				BerlinClock.updateMinutes(50);
				var minutesOfFive = document.getElementById("minutesOfFive").children;
				expect(minutesOfFive[0].className).toBe("yellow");
				expect(minutesOfFive[1].className).toBe("yellow");
				expect(minutesOfFive[2].className).toBe("red");
				expect(minutesOfFive[3].className).toBe("yellow");
				expect(minutesOfFive[4].className).toBe("yellow");
				expect(minutesOfFive[5].className).toBe("red");
				expect(minutesOfFive[6].className).toBe("yellow");
				expect(minutesOfFive[7].className).toBe("yellow");
				expect(minutesOfFive[8].className).toBe("red");
				expect(minutesOfFive[9].className).toBe("yellow");
				expect(minutesOfFive[10].className).toBe("");

			});
			it("has minutesOfOne as [O O O O]", function(){
				BerlinClock.updateMinutes(50);
				var minutesOfOne = document.getElementById("minutesOfOne").children;
				expect(minutesOfOne[0].className).toBe("");
				expect(minutesOfOne[1].className).toBe("");
				expect(minutesOfOne[2].className).toBe("");
				expect(minutesOfOne[3].className).toBe("");
			})
		});	
		describe("the minute is 55", function(){
			it("has minutesOfFive as [Y Y R Y Y R Y Y R Y Y]", function(){
				BerlinClock.updateMinutes(55);
				var minutesOfFive = document.getElementById("minutesOfFive").children;
				expect(minutesOfFive[0].className).toBe("yellow");
				expect(minutesOfFive[1].className).toBe("yellow");
				expect(minutesOfFive[2].className).toBe("red");
				expect(minutesOfFive[3].className).toBe("yellow");
				expect(minutesOfFive[4].className).toBe("yellow");
				expect(minutesOfFive[5].className).toBe("red");
				expect(minutesOfFive[6].className).toBe("yellow");
				expect(minutesOfFive[7].className).toBe("yellow");
				expect(minutesOfFive[8].className).toBe("red");
				expect(minutesOfFive[9].className).toBe("yellow");
				expect(minutesOfFive[10].className).toBe("yellow");
			});
			it("has minutesOfOne as [O O O O]", function(){
				BerlinClock.updateMinutes(55);
				var minutesOfOne = document.getElementById("minutesOfOne").children;
				expect(minutesOfOne[0].className).toBe("");
				expect(minutesOfOne[1].className).toBe("");
				expect(minutesOfOne[2].className).toBe("");
				expect(minutesOfOne[3].className).toBe("");
			})
		});	
	});
	describe("updateClock", function(){
		it("adds a leading 0 to seconds when the second is 0", function(){
			BerlinClock.updateClock(0, 0, 0);
			var time = document.getElementById("clock").innerHTML;
			expect(time).toBe("00:00:00");
		});
		it("adds a leading 0 to seconds when the second is 9", function(){
			BerlinClock.updateClock(0, 0, 9);
			var time = document.getElementById("clock").innerHTML;
			expect(time).toBe("00:00:09");
		});
		it("adds a leading 0 to minutes when the minute is 0", function(){
			BerlinClock.updateClock(0, 0, 0);
			var time = document.getElementById("clock").innerHTML;
			expect(time).toBe("00:00:00");
		});
		it("adds a leading 0 to minutes when the minute is 9", function(){
			BerlinClock.updateClock(0, 9, 0);
			var time = document.getElementById("clock").innerHTML;
			expect(time).toBe("00:09:00");
		});
		it("adds a leading 0 to hours when the hour is 0", function(){
			BerlinClock.updateClock(0, 0, 0);
			var time = document.getElementById("clock").innerHTML;
			expect(time).toBe("00:00:00");
		});
		it("adds a leading 0 to hours when the hour is 9", function(){
			BerlinClock.updateClock(9, 0, 0);
			var time = document.getElementById("clock").innerHTML;
			expect(time).toBe("09:00:00");
		});
	});
});