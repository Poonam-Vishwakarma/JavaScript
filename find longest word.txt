//Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
function longest_word(str){
  let arr=str.match(/\w[a-z]{0,}/gi);
  let result= arr[0];

  for(let i=0; i<arr.length; i++){
    if(result.length<arr[i].length){
      result=arr[i];
    }
  }
  return result;
}
console.log(longest_word("hello poonam vishwakrma"));
  

  