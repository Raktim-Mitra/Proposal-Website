const heading=document.getElementById("heading");
const emoji=document.getElementById("emoji");
let rejectbutton=document.getElementById("nobtn");
const row=document.querySelector(".row");
const container=document.querySelector(".container");
const containerBox=document.querySelector(".container-box");
function acceptProposal(){
    rejectbutton.classList.remove("active");
    heading.innerHTML="Thank You!";
    emoji.innerHTML="&#128536";
    row.remove();
}
function rejectProposal(){
    let containerBoxRect = containerBox.getBoundingClientRect();
    let containerRect = container.getBoundingClientRect();
    let maxY = containerBoxRect.height - containerRect.height;
    let maxX = containerBoxRect.width - containerRect.width;
    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);
    
    // Set the element's new position
    rejectbutton.style.left = `${randomX}px`;
    rejectbutton.style.top = `${randomY}px`;
}