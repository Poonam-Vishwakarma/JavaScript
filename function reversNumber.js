  function reversNum(x){
    x=x+"";
    return x.split("").reverse().join("");
  }
  console.log(Number(reversNum(12345)));