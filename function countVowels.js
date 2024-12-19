function countVowels(str){
    let count=0;
    for(const char of str){
      console.log(char);
      if(char==="a" || char==="e"|| char==="i"|| char==="o"||char==="u"){
        count++;
      }
    }
return count;   
  }
  const arrowcountVow=(str)=>{
    let count=0;
    for(const char of str){
      if(char==="a" || char==="e"|| char==="i"|| char==="o"||char==="u"){
        count++;
      }
    }
return count;   
  }
arrowcountVow("poonam");  

