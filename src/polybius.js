// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  const encodeAlpha = {" ":" ", "a": "11", "b":"21", "c":"31", "d":"41", "e":"51", "f":"12", "g":"22", "h":"32", "i":"42", "j":"42", "k":"52", "l":"13", "m":"23", "n":"33", "o":"43", "p":"53", "q":"14", "r":"24", "s":"34", "t":"44", "u":"54", "v":"15", "w":"25", "x":"35", "y":"45", "z":"55"}

  const decodeAlpha = {"  ":" ", "11":"a", "21":"b", "31":"c", "41":"d", "51":"e", "12":"f", "22":"g", "32":"h", "42":"(i/j)", "52":"k", "13":"l", "23":"m", "33":"n", "43":"o", "53":"p", "14":"q", "24":"r", "34":"s", "44":"t", "54":"u", "15":"v", "25":"w", "35":"x", "45":"y", "55":"z"}


  function polybius(input, encode = true) {
    //BELOW THIS LINE FOR DECODING
    if(encode === false) {
      let output = "";
      // return false if decoding and string length is not an even number
      const noSpaces = input.replaceAll(` `, ``);   //remove all spaces
      if (noSpaces.length % 2 != 0) {   //if what is left is an even length it will not have a remainder when divided by 2; if it does it is not even -> return false
      return false;
      } else {
        let doubleSpace = input.replaceAll(` `, `  `); //replace all spaces with double spaces to keep a consistency of each 2digits being a number code
        for (let i = 0; i < doubleSpace.length-1; i++) {
          if (i % 2 == 0) {   //look at only the even numbers to be able to make double digit keys
            let number = doubleSpace[i];    //key number position 1
            let number2 = doubleSpace[i+1]; //key number position 2
            let theNumber = number + number2; //key
            let out = decodeAlpha[theNumber];
            output += out;
          }
        }
        return output;
      }
    } ///BELOW THIS LINE FOR ENCODING
    else
   if (encode === true) { 
      
      let output = "";
        const lowerCase = input.toLowerCase();    // ignore uppercase letters
        for (let i = 0; i < lowerCase.length; i++) {
          let letter = lowerCase[i];    //Find the matching key and add the appropriate value to the output string
          let out = encodeAlpha[letter];
          output += out;
        }
        return output;
   }
  } return {
    polybius,
  };
})();


module.exports = { polybius: polybiusModule.polybius };
