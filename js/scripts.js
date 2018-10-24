//- This program will recognize a vowel with a true/false statement.
//     Input example: "a"
//     Output Example: "true"
//
// - This program will recognize a vowel in a word with a true/false statement
//     Input Example: "cat"
//     Output Example: "true"
//
// - For words beginning with a vowel, add "way" to the end.
//  Input Example: "apple"
//  Output Example: "appleway"

// -  For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
//     Input Example: Start
//     Output Example: artstay
//
// -  If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
//     Input Example: squirt
//     Output Example: irtsquay
//
// -  For words beginning with "y", treat "y" as a consonant.
//     Input Example: your
//     Output Example: ouyay



  //Add master function

  function determineIfVowel(word) {
    if (word === "a" || word ===  "e"  || word ===  "i"  || word ===  "o"  || word ===  "u") {
      return true;
    }
    else {
      return false;
    }
  }

  function determineIfWordHasAVowel(word) {
    var inputCharAt = word.charAt(0);

    if (determineIfVowel(inputCharAt)) {
      return true;
    }
    else {
      return false;
    }
  }

  function determineIfConstanants(word) {
    var inputWordSplit = word.split("");
    var splicedWord = inputWordSplit.splice(2);

    for (var i = 0; i < 1; i++) {
      if (determineIfVowel(inputWordSplit) === false) {
      return splicedWord.join('') + "ay";
      }
    }
    return word;
  }

  function addAyToEndOfSingleVowel(word) {
    if (determineIfWordHasAVowel(word) === true) {
     return word + "way"
   } else {
     return word;
   }
  }




$(document).ready(function() {
  $("#userInput").submit(function(event) {
  console.log(determineIfVowel($("input#words").val()));
  console.log(determineIfWordHasAVowel($("input#words").val()));
  console.log(determineIfConstanants($("input#words").val()));
  console.log(addAyToEndOfSingleVowel($("input#words").val()));

  event.preventDefault();
  });
});
