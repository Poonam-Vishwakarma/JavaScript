  function isPalindrome(str){
   let rev=str.split("").reverse().join("");
   
   if(rev==str){
    return true;
   }
   return false;
  }
  let str1="poonam";
console.log(isPalindrome(str1));