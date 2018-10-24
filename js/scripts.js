
var vowels = ["a","e","i","o","u"];

function pigLatin(sentence) {
  // var newSentence = []
  var splitSentence = sentence.split(" ");
  console.log(splitSentence);
  for (var i = 0; i < splitSentence.length; i++) {

   if(splitSentence[i].charAt(0) === "q") {
     var eachChar = splitSentence[i].split("");
     console.log(eachChar);
     eachChar.shift();
     console.log(eachChar);
     eachChar.push("way");
     splitSentence.push(eachChar.join(''));
   }
  //   if (sentenceArray.charAt(0)includes(vowel)) {
  //     sentenceArray.charAt(0) = "way"
  //   }
  //   return firstCharacter;
}

return splitSentence
}



$(document).ready(function() {
var userSentence = pigLatin("The quick brown fox jumps over the lazy dog");
console.log(userSentence);
});
