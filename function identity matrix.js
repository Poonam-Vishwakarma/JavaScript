//Write a JavaScript function which returns the n rows by n columns identity matrix.
// identity matrix (daigonal 1)
function matrix(n){
  for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
      if(i===j){
      console.log("1");
      }
      else{
        console.log("0");
      }
    }
    console.log("---------");
  }
}
console.log(matrix(3));

