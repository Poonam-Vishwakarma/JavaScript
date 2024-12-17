//Write a JavaScript function that returns a string that has letters in alphabetical order
function alphabetical_order(str){
  return str.split("").sort().join("");
}
console.log(alphabetical_order("poonam"));