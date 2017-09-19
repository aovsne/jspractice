// Title Case a Sentence
function titleCase(str){
	
	// lets first make the whole sentence into lowercase and split the word
	// and then map the word to replace the first letter of each word to Uppercase.
	str = str.toLowerCase().split(' ').map(function(word){
		return word.replace(word[0], word[0].toUpperCase())
	})

	// lets join all the words to make a sentence
	return str.join(' ')
}

console.log(titleCase("I'm a little Boy and you are one Big ass guy!"))



// Largest number in array
function largestOfFour(arr) {
  var largestNumber = [0,0,0,0]

  for(i = 0; i < arr.length; i++){

  	for(u = 0; u < arr[i].length; u++){
  		if(arr[i][u] > largestNumber[i]){
  			largestNumber[i] = arr[i][u]
  		}
  	}
  }
  console.log(largestNumber);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// CONFIRM THE STRING END
// using the substring() method to get the result
function confirmEnd(str, target){
  // so basically it is saying if the word or letter of the last sentence of string is equal to the value of parameter target, return true or else return false
  if(str.substr(-target.length) = target){
    return true
  }else{
    return false
  }

}

console.log("bastian", 'n')


// REPEAT A STRING repeat a string
function repeat(str, lolo){
  var repeatedString = ''
  // lets use the while loop to get the accurate result
  while(lolo>0){
    repeatedString += str 
    lolo--
  }
  console.log(repeat('abc', 4))

}

// TRUNCATE(shortning) A STRING



