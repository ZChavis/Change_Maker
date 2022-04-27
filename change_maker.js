var $ = function(id) {
    return document.getElementById(id);
};
// Created function for setting the values within each applicable text box.
function makeChange(value) {
// Captures the entered value and stores it in a variable.
	var cents = parseInt($("cents").value);
// Does the math, sets the variable value, and displays the value of quarters in the appropriate text box using the Math.floor method to avoid decimals and not skew the later results.
	var quarters = $("quarters");
		quarters.value = Math.floor(cents / 25);
// Does the math, sets the variable value, and displays the value of dimes in the appropriate text box using the Math.floor method to avoid decimals and not skew the later results.
	var dimes = $("dimes");
		dimes.value = (Math.floor((cents - (quarters.value * 25)) / 10));
// Does the math, sets the variable value, and displays the value of nickels in the appropriate text box using the Math.floor method to avoid decimals and not skew the later results.
	var nickels = $("nickels");
		nickels.value = (Math.floor((cents - (quarters.value * 25) - (dimes.value * 10)) / 5));
// Does the math, sets the variable value, and displays the value of pennies in the appropriate text box using the Math.floor method to avoid decimals.
	var pennies = $("pennies");
		pennies.value = (Math.floor((cents - (quarters.value * 25) - (dimes.value * 10) - (nickels.value *5))));
	
}

// Function that validates the user's entry.
function processEntry() {
// Captures the entered value and stores it in a variable.
	var cents = parseInt($("cents").value);
// Validates that the entered value is within parameters. If so, it runs the function to display the change.
	if (cents > 0 && cents <= 99) {
		makeChange();
	}
// Validates that the entered value is within parameters. If not, an appropriate alert is displayed.
	else if (cents < 0 || cents > 99) {
		alert("You've entered an invalid number");
	}
// A catch-all of sorts for if text or other values are entered that aren't within the appropriate parameters. If the value is not within the appropriate parameters, an appropriate alert is displayed.
	else {
		alert("Please enter a valid number");
	}
}

// Captures the ID of the on-screen button and stores it in a variable.
var calcButton = $("calculate")

// Sets an event-handler to run all of the appropriate functions once the appropriate button is clicked.
calcButton.onclick = processEntry;