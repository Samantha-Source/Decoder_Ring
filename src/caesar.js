// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6



//casesar() paramaters
// input - inputed text to be encoded/decoded
// shift - how much each letter is shifted by positive # = shift to right; negative # =shift to left
// encode - whether to encode or decode the message(by default it is set to true)

// If shift value isn't present, 0, less than -25, or greater than 25 function should return false
// Spaces & nonalphabetic symbols should be maintained throughout
// Capital letters should be ignored
// If a letter is shifted "off" the alphabet it should wrap around (e.g. z shifted 3 = c)

// Check if shift is within paramaters otherwise throw false
// Change all letters to lowercase
// Have a variable to hold the result as we go through each letter and add it to the output string


const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    
    if (!shift || shift < -25 || shift > 25 || shift === 0)    // if shift does not meet requirements return false
     {return false};
     
    if (encode === false) {       //if encode is set to false invert the shift number
      shift = shift * -1
    };

    const inputLC = input.toLowerCase();    //set all letters in input to lower case
    const arrayIn = inputLC.split("");       //puts all characters into an array

    let numericalValue = [];               //make an array of the numerical value for each letter
    const anotherVar = arrayIn.forEach((let)=>{
      numericalValue.push(let.charCodeAt(0));
    });

    let modedValue = [];              // shifts the number by the shift only if is between the a-z #s (97-122); this will leave all special symbols untouched
    let moded = numericalValue.forEach((letter)=>{
      if (letter >= 97 && letter <= 122) {   
        if (letter + shift <= 122 && letter + shift >= 97) {           //if new numerical value will be between 97-122 push it to the output
            modedValue.push(letter+shift);
        } else
          if (letter+shift > 122) {                //if new numerical value will be greater than 122 subtract 26 to bring it back around to the beginning of the alphabet
            modedValue.push(letter+shift-26);
        } else
          if (letter + shift < 97) {            //if new numerical value will be less than 97 add 26 to bring it back around to the end of the alphabet
            modedValue.push(letter+shift+26);
          }
      } else {
        modedValue.push(letter);           //if numerical value was not between 97-122 to begin with push it to the ouput as is to keep it's non alpha value
      }
    });

    //changes from numerical values back into alphanumeric
    let output = ""
    modedValue.forEach((char)=>{
      output += String.fromCharCode(char);
    })
    return output;
  }
  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };
