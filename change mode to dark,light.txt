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
 <p>hello poonam</p>
    <script src="script.js"></script>
    </body>
</html>




--------css----------



.light{
    background-color: black;
    color: white;
}
.dark{
    background-color: white;
    color: black;
}

button{
    background-color: rgb(227, 243, 7);
    color: rgb(10, 10, 10);





---------js---------



let mode=document.querySelector("#mode");
let currmode="dark";
let body=document.querySelector("body");

mode.addEventListener("click",()=>{
    
    if(currmode==="light"){
        currmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currmode="light";
        body.classList.add("light");
        body.classList.remove("dark");

    }
    console.log(`change mode to ${currmode}`);
});