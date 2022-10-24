// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6




//3 paramaters: input(text to be encoded/decoded) ; 
//              alphabet(substitution alphabet); 
//              encode(endocde or deocde; default=true)
//
//
//input could include spaces and letters as well as special characters
//spaces should be maintained throughout
//capital letters ignored
//all the characters in the alphabet parameter must be unique otherwise it should return false

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];

  function substitution(input, alphabet = "", encode = true) {
    //if the length of the alphabet is not exactly 26 characters return false
    if (alphabet.length != 26) {    
      return false;
    };

    //put the translation alphabet into an array in all lower case
    const alphabetArray = Array.from(alphabet.toLowerCase());

    //if the characters of the alphabet are not all unique return false
    for (let idx = 0; idx < alphabetArray.length; idx++) {
      for (let idxMatch = idx + 1; idxMatch < alphabetArray.length; idxMatch++) {
        if (alphabetArray[idx] === alphabetArray[idxMatch]) {
          return false;
        };
      };
    };
  
    //put the input into an array in all lower case letters
    const inputArray = Array.from(input.toLowerCase());
    
    alphabetArray.push(" "); // add an additional alphabet array item of " "

    //compile an array of the index number for each letter

//DECODING
  if (encode === false) {
    let numbers = [];
    for (let idx = 0; idx < inputArray.length; idx++) {
      for (let idxMatch = 0; idxMatch < alphabetArray.length; idxMatch++) {
        if(inputArray[idx] === alphabetArray[idxMatch]){
          numbers.push(alphabetArray.indexOf(alphabetArray[idxMatch]))
        };
      };
    };
    let output = [];
    numbers.forEach((number)=>{
      output.push(alpha[number])
    });
    return output.join("");
  };




//ENCODING
  //  convert each number from the number array into it's new alphabet value
    if (encode === true) {
      let numbers = [];
      for (let idx = 0; idx < inputArray.length; idx++) {
        for (let idxMatch = 0; idxMatch<alpha.length; idxMatch++) {
          if (inputArray[idx] === alpha[idxMatch]){
            numbers.push(alpha.indexOf(alpha[idxMatch]))
        }
      }
  }
    let output = [];  //for each index number convert to its letter and push into new array
    numbers.forEach((number) => {
      output.push(alphabetArray[number])
    })
    return output.join("")  //join the letters of the array into one string
  }






  } //<== end of the function

  //DONT EDIT BELOW THIS
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
