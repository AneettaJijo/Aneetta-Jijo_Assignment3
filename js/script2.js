const $=selector=>document.querySelector(selector)

document.addEventListener("DOMContentLoaded" , () =>{

   // get user entries and make validations
  const processEntry=evt=>{

    const income=parseInt($("#income").value);

    if( income <= 0){
        alert("The value should be above zero");
    }
    else{
       const tax= calculateTax(income)
       $("#tax").value=tax.toFixed(2);
        
    }
    $("#income").focus();
    
}

// calculate tax amount
function calculateTax(income){
  if(income <= 9875){
    return income * 0.10;
  }
  else if(income<=40125){
    return 987.50 + (income-9875)*0.12; 
  }
  else if(income<=85525){
    return 4617.50 + (income -40125) *0.22;
  }
  else if(income<=163300){
    return 14605.50 + (income- 85525) *0.24;
  }
  else if(income<=207350){
    return 33271.50 + (income-163300) * 0.32;
  }
  else if(income<=518400){
    return 47367.50 + (income-207350) * 0.35;
  }
  
}

    $("#calculate").addEventListener("click",processEntry)
    $("#income").focus();
});

$("#calculate").addEventListener("load",function(){
    $("#income").focus();
});