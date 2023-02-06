function censor() {
  let original_text = document.getElementById("original").value;
  let text_to_be_scrambled = document.getElementById("bad").value;
  var word_list2 = text_to_be_scrambled.split(" ");
  //  
  for (let word of word_list2) {
    if (original_text.includes(word)) {
      original_text = original_text.replace(word,word[0]+"*".repeat(word.length -1))
    }
  }
  document.getElementById("result").textContent = original_text;
 // console.log(original_text)
  //console.log(text_to_be_scrambled)
} 
//censor("My name is simi","simi")


// function censor(original_text, text_to_be_scrambled){
//   const originalWords = original_text.split(" ");
//   const scrambleWords = text_to_be_scrambled.split(" ");
//   const scrambledWords = originalWords.map(word =>{
//     let newWord = word;  
//     scrambleWords.forEach(scrambleWord => {
//       if(newWord.includes(scrambleWord)){
//         newWord = newWord.replace(scrambleWord, scrambleWord[0]+(scrambleWord.replace(/[a-zA-Z]/g, "*")))
//       }      
//     });
//     return newWord;
//   })
// }


function myFunction(e) {
  e.preventDefault();
 
  let answer = censor(words, badWords);
  
}

var btn = document.getElementById("submission");
btn.addEventListener("click", censor);
