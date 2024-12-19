<!DOCTYPE html><!--this is comment-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body><select id="selectColor">
    <option value="1">red</option>
    <option value="2">blue</option>
    <option value="3">yellow</option>
    <option value="4">green</option>
    <option value="5">purple</option>
    <option value="6">pink</option>
  </select><br>
 <button id="btn" onclick="removeItem()">Remove Selected Item</button>

    <script src="script.js"></script>
    </body>
</html>


----css------

#btn{
    color: blue;
    background-color: aqua;
}


-----js-------

function removeItem() {
    // Get the dropdown element
    let x = document.getElementById("selectColor");

    // Get the index of the selected item
    let selectedIndex = x.selectedIndex;

    if (selectedIndex >= 0) {
      x.remove(selectedIndex);
    } else {
      alert("Please select an option to remove.");
    }
  }
removeItem();