<!DOCTYPE html><!--this is comment-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
 <button id="mode">Change Mode</button>
    <script src="script.js"></script>
    </body>
</html>


-----css-------

button{
    background-color: rgb(227, 243, 7);
    color: rgb(10, 10, 10);
 
}



---js------


let mode=document.querySelector("#mode");
let currmode="dark"
mode.addEventListener("click",()=>{
    
    if(currmode==="light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        currmode="light";
        document.querySelector("body").style.backgroundColor="white";

    }
    console.log(`change mode to ${currmode}`);
});