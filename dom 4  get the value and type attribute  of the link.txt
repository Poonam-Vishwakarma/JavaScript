<!DOCTYPE html><!--this is comment-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p><a id="a" type="text" hreflang="en" href="https://www.google.com" target="_self" rel="nofollow">click to open google</a></p>
    <button onclick="getAttributes()">Click here</button>  

    <script src="script.js"></script>
    </body>
</html>


----js-------


function geAttributes(){
    let a=document.getElementById("a").href;
    alert("This is href values= " +a);

    let b=document.getElementById("a").hreflang;
    alert("This is href values= " +b);

    let c=document.getElementById("a").target;
    alert("This is href values= " +c);

    let d=document.getElementById("a").rel;
    alert("This is href values= " +d);

    let e=document.getElementById("a").id;
    alert("This is href values= " +e);
}

geAttributes();