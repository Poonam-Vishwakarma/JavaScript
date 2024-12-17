<!DOCTYPE html><!--this is comment-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
   
<p id ='text'>This is paragraph</p> 
<div>
<button id="btn">CLICK ME!</button>
    <script src="script.js"></script>
    </body>
</html>


----Css------

#btn{
    color: blue;
    background-color: aqua;
}

------JS-------

let text=document.querySelector("p");
    
    text.style.fontSize = "14pt";
    text.style.fontFamily = "Comic Sans MS";
    text.style.color = "green";
    text.style.backgroundColor="yellow";