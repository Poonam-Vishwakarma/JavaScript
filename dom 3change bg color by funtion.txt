<!DOCTYPE html><!--this is comment-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
   <p id="p">hello this is a invitation of marksheet distribution please come and collect your marksheet</p>
    <input type="button" value="yes" onclick="set_Background()">

    <script src="script.js"></script>
    </body>
</html>


-----js-------

function set_Background(){
    let para=document.getElementById("p");
    para.style.backgroundColor="green";

}
set_Background();
