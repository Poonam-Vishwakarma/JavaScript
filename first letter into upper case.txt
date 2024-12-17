//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

function uppercase(str){
  let arr=str.split(" ");
  let newarr=[];
  
  for(let x = 0; x<arr.length; x++){
    newarr.push(arr[x].charAt(0).toUpperCase()+arr[x].slice(1));
  }
  return newarr.join(" ");
}
console.log(uppercase("hello poonam how are you"));

