//A factorial function that utilizes a loop to count up and return the factorial sum of a number.
const firstFactorial1 = (num) => {
	let i = num;
	let ans = 1;

	for (i = 1; i <= num; i++) {
		ans = ans * i;
	}
	return ans;
};

//The same factorial function as above, but it's loop counts down to return the same result.
const firstFactorial2 = (num) => {
	let i = num;
	let ans = 1;

	for (i = num; i > 0; i--) {
		ans = ans * i;
	}
	return ans;
};

/* A test function that can call either of the factorial functions and checks 
if the answer equals a precomputed value. */
const testFunction = () => {
	//can test firstFactorial1 or 2 in the conditional statement.
	if (firstFactorial2(6) === 720) {
		return true;
	} else {
		return false;
	}
};

console.log(testFunction());
