<!DOCTYPE html><!--this is comment-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <table id="table" border="4" style="color: rgb(172, 93, 14);">
        <tr><td>Apple</td>
            <td>mango</td>
            <td>banana</td>
            <td>grapes</td>
            <tr><td>tomato</td>
                <td>potato</td>
                <td>onion</td>
                <td>ginger</td></tr>
        </tr>
    </table><br>
    <input type="button" onclick="addrow()" value="Add row">

    <script src="script.js"></script>
    </body>
</html>


-------js---------


function addRow(){
    let table=document.getElementById("table");
    let newRow=table.insertRow(table.rows.length);

    let cell1=newRow.insertCell(0);
    let cell2=newRow.insertCell(1);
    let cell3=newRow.insertCell(2);
    let cell4=newRow.insertCell(3);

    cell1.innerHTML="papaya";
    cell2.innerHTML="cherry";
    cell3.innerHTML="chiku";
    cell4.innerHTML="blackberry";
}
addRow();