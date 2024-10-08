function searchWordInString(sentence, word) {
   
    let sentenceArray = sentence.split(" ");
    
  
    for (let i = 0; i < sentenceArray.length; i++) {
        if (sentenceArray[i] === word) {
            return i; 
        }
    }
    return -1; 
}

let sentence = "My fav shows are Fleabag and Fleabag season 2";
let wordToFind = "Fleabag";

let index = searchWordInString(sentence, wordToFind);

if (index !== -1) {
    console.log(`The word "${wordToFind}" is found at index ${index}.`);
} else {
    console.log(`The word "${wordToFind}" is not found.`);
}