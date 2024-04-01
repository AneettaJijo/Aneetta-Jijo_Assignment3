const $ = selector => document.querySelector(selector)

document.addEventListener("DOMContentLoaded",()=>{

const processEntry=evt=>{

    const amount=$("#amount").value;

    if( amount >=0 && amount <=99){
        makeChange(amount)    
    }
    else{
        alert("Value should be between 0 and 99");

        $("#quarters").value="";
        $("#dimes").value="";
        $("#nickels").value="";
        $("#pennies").value="";
    }
}

function makeChange(amount){
    const quarters=parseInt(amount/25);
    amount=amount % 25;
    const dimes=parseInt(amount/10);
    amount=amount % 10;
    const nickels=parseInt(amount/5);
    amount =amount %5;
    const pennies=parseInt(amount/1);
    amount=amount%1;

    $("#quarters").value=quarters;
    $("#dimes").value=dimes;
    $("#nickels").value=nickels;
    $("#pennies").value=pennies;
}


    $("#calculate").addEventListener("click",processEntry)
}
)