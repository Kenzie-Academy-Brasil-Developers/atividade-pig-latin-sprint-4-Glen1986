const body = document.getElementById("body");
const cuadro = document.createElement("form");
const box = document.createElement("input");
const title= document.createElement("h2");
const result = document.createElement("p");
const button = document.createElement("button");

const vogals = "a,e,i,o,u".split(",")

body.appendChild(cuadro);
body.appendChild(button);

box.id = "palabra"
box.type = "text";
//box.setAttribute("value", "")
box.setAttribute("placeholder", "input")
box.getAttribute("value" )
box.value = "";

cuadro.setAttribute("type", "post");
cuadro.appendChild(box);

button.classList.add("button")
button.type = "send"
button.innerText = "Button"
button.id = "button";

const clickButton = document.querySelector("#button")

function showResults(a, b) {
  cuadro.appendChild(title);
  cuadro.appendChild(result);
  title.innerText = a;
  result.innerText = b;
}

/*  
    STEP # 1: Encode words that begin with a vowel sound from english to pig latin
    For words that begin with vowel sounds, one just adds "yay" to the end.

    For example:
        "eat" becomes "eatyay"
        "omelet" becomes "omeletyay" 
*/

function encodeVowelWord(word) {
 let referencia = palabra.value;
 let adFinal = "yay";
 let total = referencia;
  if(vogals.includes(referencia.split("")[0])){
     total = referencia + adFinal;
    showResults("vocalPig", total);
      return total;
   }else{
encodeConsonantWord();
     }
}


/*  
    STEP # 2: Encode words that begin with a consonant sound from english to pig latin.
    For words that begin with consonant sounds, all letters before the initial vowel 
    are placed at the end of the word sequence, preceded by a hyphen "-". Then, "ay" is added. 
    
    For example:
        "latin" becomes "atin-lay"
        "cheers" becomes "eers-chay"
*/
function encodeConsonantWord(word) {
 let referencia = palabra.value;
 let adFinal = "yay";
 let trato = referencia.split("");
 let prima = trato[0];
 let segua = trato[1];
 let delta = trato[0]+trato[1];
 let final = ""

  for (let i = 0; i < vogals.length; i++ ){
    
     let palabra = trato.shift();
     let result = referencia.substring(1); 
     let strin = trato.join(",");
if(prima == "c" && segua == "h") {
console.log(delta)
  encodeWord(); 
}else if( prima !== vogals[i] && segua !== "h" ){
       final = result + prima +"-"+ adFinal;
 //     console.log(strin);
 //     console.log(referencia);
      showResults("consonantPig", final);
    }
  }
    return final;
   
}

/*  
    STEP # 3: Decide whether a given word starts with a vowel sound or consonant sound,
    and call encodeVowelWord(word) or encodeConsonantWord(word) when relevant.

    For example:
        "eat" becomes "eatyay" because it starts with a vowel "e"
        "omelet" becomes "omeletyay" because it starts with a vowel "o"
        "latin" becomes "atin-lay" because it starts with a consonant "l""
        "cheers" becomes "eers-chay" because it starts with a consonant cluster "ch"
        "you" becomes "ou-yay" because it starts with a consonant "y"
*/
function encodeWord(word) {
 let referencia = palabra.value;
 let demas = "ay" 
 let final = "";
 let ultima = "";
 let ch = referencia.substring(0,2);   
      final = referencia.slice(2);
      ultima = final+"-"+ch+demas;
      showResults("consChPig", ultima);
  return ultima; // replace this!
}

/*
    STEP # 4: Encode a full sentence or paragraph from english to pig latin.
*/

function encodeText(text) {
 let referencia = palabra.value.split(" ");
  showResults("texto", referencia)
  return referencia; // replace this!
}

/*
    STEP # 5: Create a web form where users can input any message in plain english
    and get it encoded into pig latin.
*/

/*  
    STEP # 6: Decode pig latin words into words that begin with a vowel sound. 
    In other words, do the reverse of encodeVowelWord.

    For example:
        "eatyay" becomes "eat"
        "omeletyay" becomes "omelet" 
*/
function decodeVowelWord(word) {
  return ''; // replace this!
}

/*  
    STEP # 7: Decode pig latin words into words that begin with a consonant sound. 
    In other words, do the reverse of encodeConsonantWord.
    
    For example:
        "atin-lay" becomes "latin"
        "eers-chay" becomes "cheers"
*/
function decodeConsonantWord(word) {
  return ''; // replace this!
}

/*  
    STEP # 8: Decide whether a given word starts with a vowel sound or consonant sound,
    and call decodeVowelWord(word) or decodeConsonantWord(word) when relevant.
    In other words, do the reverse of encodeWord.

    For example:
        "eatyay" becomes "eat" because it ends with "yay"
        "omeletyay" becomes "omelet" because it ends with "yay"
        "atin-lay" becomes "latin" because it ends with a hyphen, a consonant sound, and an "ay"
        "eers-chay" becomes "cheers" because it ends with a hyphen, a consonant sound, and an "ay"
        "ou-yay" becomes "you" because it ends with a hyphen, a consonant sound, and an "ay"
*/
function decodeWord(word) {
  return ''; // replace this!
}

/*
    STEP # 9: Decode a full sentence or paragraph pig latin to english.
*/
function decodeText(text) {
  return ''; // replace this!
}
const key = document.addEventListener("keydown", (event) =>{
  let keyName = event.key
  if(keyName == "Enter"){
  event.preventDefault();
//    encodeWord();
    encodeVowelWord();
    encodeText();
  }
// console.log(event) 
} )
clickButton.addEventListener("click", function(){
    const palabra = document.getElementById("palabra").value;
//    encodeWord();
    encodeVowelWord();
    encodeText();
    //showResults(palabra, "palabra");
})

/*
    STEP # 10: Create a web form where users can input any message in pig latin and get it 
    decoded into plain english.
*/

/*
    BONUS: Go back to encodeText and decodeText and modify it so it can gracefully handle punctuation 
    such as '.', ',', '?'
*/

/* ===============
   Below are some helper variables and functions that are already programmed to help check your progress. YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE. 
   =============== */

const testVowelWords = {
  eat: 'eatyay',
  omelet: 'omeletyay',
  are: 'areyay',
  egg: 'eggyay',
  explain: 'explainyay',
  always: 'alwaysyay',
  ends: 'endsyay',
  every: 'everyyay',
  another: 'anotheryay',
  under: 'underyay',
  island: 'islandyay',
  elegant: 'elegantyay',
};
