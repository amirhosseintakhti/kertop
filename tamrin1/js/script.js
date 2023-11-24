const display = document.querySelector(".display");
let tempnum = " ";

function getNum (x){
    tempnum = tempnum + x;
    display.innerHTML = tempnum;
}