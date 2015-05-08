// #1 - Write a function addNumbers that takes a single string parameter and searches for all the numbers in the string, adds them together, then returns the sum. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol.

var addNumbers = function(str){
    // split argument into an array of each character, setup some blank variables
	var strArr = str.split('');
	var numArr = [];
	var totalVal = 0;

    // Loop over array, if there's a number push it into the array
	for(var i=0 ; i<strArr.length ; i++){
		if(parseInt(strArr[i]) >= 0){
			numArr.push(strArr[i]);
		}
        // if current iteration of strArr is not a number & the previous was, add the series of numbers in the array to totalVal and reset the numArr
		if(isNaN(strArr[i]) === true && parseInt(strArr[i-1]) >= 0){
			totalVal += parseInt(numArr.join(''));
			numArr = [];
		}
        // if current iteration of strArr is not a number, reset the numArr
		if(isNaN(strArr[i]) === true){
			numArr = [];
		}
	}

	return totalVal;

};

console.log(addNumbers("88Hello 3World!"));


// #2 - Write a function longestWord that takes a single string parameter and returns the largest word in the string. If there are two or more words that are the same length, it returns the first word from the string with that length. Ignore punctuation and assume the input sentence will not be empty.

var longestWord = function(str){
    // split the passed string into an array at each word (space)
	var strArr = str.split(" ");
    // the answer will be the zero-th index of the ans array if a longer word is not found
	var ans = strArr[0];

	for(var i=0 ; i<strArr.length ; i++){
        // while looping, if current word is longer than ans, replace it's value
		if(strArr[i].length > ans.length){
			ans = strArr[i];
		}
	}
	return ans;
};

console.log(longestWord('Hello my spirit animal is an Elephant'));


// #3 - Bonus: Write a function averageStringNumbers that takes a single string parameter and searches for all the numbers in the string, adds them together, then returns that final number divided by the total amount of letters in the string. For example: if str is "Hello6 9World 2, Nic8e D7ay!" the output should be 2. First if you add up all the numbers, 6 + 9 + 2 + 8 + 7 you get 32. Then there are 17 letters in the string. 32 / 17 = 1.882, and the final answer should be rounded to the nearest whole number, so the answer is 2. Only single digit numbers separated by spaces will be used throughout the whole string (So this won't ever be the case: hello44444 world). Each string will also have at least one letter.

var averageStringNumbers = function(str){
    // split the argument string into an array at each character
    var strArr = str.split('');
    var numArr = [];
    var alphaArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var letterArr = [];
    var ans = 0;
    // if the i-th item in the array is a number, it gets pushed into numArr and is converted to a number rather than a string representation of a number
    for(var i=0 ; i<strArr.length ; i++){
        if(parseInt(strArr[i]) >= 0){
            numArr.push(Number(strArr[i]));
        }
    // Add contents of number array and place it in ans
    ans = numArr.reduce(function(p,c){
        return p+c;
    })
    // check to see if items in strArr are in alphaArr, if so push them into letterArr
    for(var j=0 ; j<strArr.length ; j++){
        if(alphaArr.indexOf(strArr[j].toLowerCase())>=0){
            letterArr.push(strArr[j]);
        }
    }
    // Take ans & divide it by length of letterArr and then round it
    ans = Math.round(ans/(letterArr.length));
    return(ans);
};
console.log(averageStringNumbers("Hello6 9World 2, Nic8e D7ay!"));






