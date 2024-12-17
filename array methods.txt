  
 //array methods
 let fruit1=["papaya","mango","grapes","apple"];
 let fruit2=["tomato","chiku","banana"];
 console.log(fruit1);
 fruit1.push("drangonfruit");//add element at the end of an array
 console.log(fruit1);
fruit1.pop();//delete element at the end of an array
console.log(fruit1);
console.log(fruit1.toString());//conver to string
let fruits=fruit1.concat(fruit2);//add 2or more the 2 array
console.log(fruits);
fruit2.unshift("pineapple");//add element at te start of an arry
console.log(fruit2);
fruit2.shift();//delete element at start of an array
console.log(fruit2);
console.log(fruit1)
console.log(fruit1.slice(0,2));//cut the array by giving index
console.log(fruit2);
fruit2.splice(1,2,"kiwi","cherry");//add delete replce
console.log(fruit2);
fruit2.splice(2,0,"chiku");//add 
console.log(fruit2);
fruit2.splice(2,1);//delete
console.log(fruit2);
fruit2.splice(0,1,"chiku");//replace
console.log(fruit2);


