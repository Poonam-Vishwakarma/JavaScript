//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
//Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.

function countvowel(str){
  let vowel="aeiouAeIOu";
  let count=0;
  for(let i=0; i<str.length; i++){
    if(vowel.indexOf(str[i])!==-1){
      count+=1;
    }
  }
  return count;

}
console.log(countvowel("hello poonam you are cute"));

