
var userArray = [];
var vowels = ["a", "e", "i", "o", "u"]

function determineIfVowel(word) {
  var newWord = word.split()
  for (var i = 0; i < word.length[1]; i++) {
    if vowels.indexOf(newWord[i])

  }
}
  {
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

  //Add master function
  function masterFunction(word){
    var splitSentence = word.split(" ")
    console.log(splitSentence);
    for (var i = 0; i < splitSentence.length; i++) {
      if (determineIfWordHasAVowel(splitSentence[i]) === true) {
         userArray.push(addAyToEndOfSingleVowel(splitSentence[i]));
      } else if (determineIfConstanants(splitSentence[i]) === true) {
        console.log("It got here");
      }
    }
    return splitSentence;
  }



$(document).ready(function() {
  $("#userInput").submit(function(event) {
  console.log(masterFunction($("input#words").val()));
  console.log(userArray.join(" "));

  console.log(determineIfWordHasAVowel($("input#words").val()));
  console.log(determineIfConstanants($("input#words").val()));
  console.log(addAyToEndOfSingleVowel($("input#words").val()));

  event.preventDefault();
  });
});
