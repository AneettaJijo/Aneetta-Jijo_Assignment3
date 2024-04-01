const $ = selector => document.querySelector(selector)

document.addEventListener("DOMContentLoaded" ,() => {


    // gets user entries ,calculate sales tax and total and displays
const processEntries=evt => {
    
    const subtotal = parseFloat($("#subtotal").value);
    const taxrate = parseFloat($("#taxrate").value);
     

    // data validation
    if(isNaN(subtotal )||subtotal <= 0|| subtotal >= 10000){
        alert("Subtotal must be > 0 and < 10000")
        
       
        evt.preventDefault();
    }
    else if(isNaN(taxrate) || taxrate <=0 || taxrate >= 12){
        alert("Tax rate must be > 0 and < 12");


        evt.preventDefault();

    }
    else{
        const salestax =  subtotal * (taxrate /100);
        const total= subtotal + salestax;

        $("#salestax").value= salestax.toFixed(2);
        $("#total").value= total.toFixed(2);
    }
};


    $("#calculate").addEventListener("click" ,processEntries)})


window.addEventListener("load",function(){
    $("#subtotal").focus();
});

$("#calculate").addEventListener("click",function(){
    $("#subtotal").focus();
});

$("#clear").addEventListener("click",function(){
    $("#subtotal").value= "";
    $("#taxrate").value= "";
    $("#salestax").value= "";
    $("#total").value="";
    $("#subtotal").focus();
});

$("#subtotal").addEventListener("click",function(){
    $("subtotal").value="";
});

$("#taxrate").addEventListener("click",function(){
    $("#taxrate").value="";
});