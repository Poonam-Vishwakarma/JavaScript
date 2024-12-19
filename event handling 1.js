
let button=document.createElement("button");
button.textContent="Click here!";

button.addEventListener("click",()=>{
    console.log("button clicked!");
});
document.body.appendChild(button);

