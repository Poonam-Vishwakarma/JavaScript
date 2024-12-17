<!DOCTYPE html><!--this is comment-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
   <form id="form1" onsubmit="getFormValue()">
    First Name: <input type="text" name="fname" value="poonam"><br>
    Last Name: <input type="text" name="lname" value="vishwakarma"><br>
    <input type="submit" value="submit">
   </form>
    <script src="script.js"></script>
    </body>
</html>

----CSS------

#form1{
    color: rgb(42, 74, 11);
}
input{
    background-color: rgb(252, 126, 151);
}

-------js-------

//Write a JavaScript function to get the values of First and Last names of the following form.

 function getFormValue(){
    let x=document.getElementById("form1");

    for(i=0; i<x.lengeth; i++){
        if(x.elements[i].value!="submit"){
            console.log(x.elements[i].value);
        }
    }
 }