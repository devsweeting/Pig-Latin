//- This program will recognize a vowel with a true/false statement.
//     Input example: "a"
//     Output Example: "true"
//
// - This program will recognize a vowel in a word with a true/false statement
//     Input Example: "cat"
//     Output Example: "true"
//
// - This program will add "ay" to single-letter words beginning with a vowel
//     Input Example: "I"
//     Output Example: "Iay"
//
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
  console.log(inputCharAt);
  if (determineIfVowel(inputCharAt)) {
    return true;
  }
  else {
    return false;
  }
}

// function pigLatin(sentence) {
//   // var newSentence = []
//   var splitSentence = sentence.split(" ");
//   console.log(splitSentence);
//   for (var i = 0; i < splitSentence.length; i++) {
//
//    if(splitSentence[i].charAt(0) === "q") {
//      var eachChar = splitSentence[i].split("");
//      console.log(eachChar);
//      eachChar.shift();
//      console.log(eachChar);
//      eachChar.push("way");
//      splitSentence.push(eachChar.join(''));
//    }
  //   if (sentenceArray.charAt(0)includes(vowel)) {
  //     sentenceArray.charAt(0) = "way"
  //   }
  //   return firstCharacter;
// }
//
// return splitSentence
// }

$(document).ready(function() {
  $("#userInput").submit(function(event) {

  console.log(determineIfVowel($("input#words").val()));
  console.log(determineIfWordHasAVowel($("input#words").val()));

  event.preventDefault();
  });
// var userSentence = pigLatin("The quick brown fox jumps over the lazy dog");
// console.log(userSentence);
});
