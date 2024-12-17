<!DOCTYPE html><!--this is comment-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
   <table id="myTable" border="1" style="background-color: rgb(123, 190, 118);">
    <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <tr>
            <td>Poonam</td>
            <td>vishwakarma</td>
        </tr>
        <tr>
            <td>Vishal</td>
            <td>Vishwakarma</td>
        </tr>
    </tr>
    </table><br>
    <button id="btn" onclick="ChangeContent" style="background-color: rgb(226, 43, 192);">Change content</button>
    <script src="script.js"></script>
    </body>
</html>


-----js--------

function ChangeContent() {
    rn=window.prompt("enter the row no.(0,1,2) ");
    cn=window.prompt("enter the column no.(0,1");
    content=window.prompt("enter the content you want to replace.");
    
    let x=document.getElementById("myTable").rows[parseInt(rn,10)].cells;
    x[parseInt(cn,10)].innerHTML=content;
}
  ChangeContent();