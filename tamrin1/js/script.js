const display = document.querySelector(".display");
let tempnum = " ";
let firstNum,secondNum = null;
let oldoperator;
function getNum (x){
    tempnum = tempnum + x;
    display.innerHTML = tempnum;

}

function operate(type){
    oldoperator = type;
    if(firstNum === null && tempnum !== " "){
        firstNum = tempnum;
        tempnum = " ";
    }
    else{
        secondNum = tempnum;
        tempnum = " ";

        switch(oldoperator){
        case '+' :
            


    }
    } 
    

}
