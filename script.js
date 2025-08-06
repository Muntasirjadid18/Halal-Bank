
document.getElementById("depositBtn").addEventListener("click",function()
{
const currentTotal = parseFloat( document.getElementById("totalAmount").innerText);
const depositAmount = parseFloat( document.getElementById("depositInp").value);
const newTotal = currentTotal+depositAmount;
document.getElementById("totalAmount").innerText = newTotal;
document.getElementById("depositInp").value = "";
})
document.getElementById("withdrawBtn").addEventListener("click",function(){
   const newTotal = parseFloat(document.getElementById("totalAmount").innerText);
   const withdrawAmount = parseFloat(document.getElementById("withdrawInp").value);
   if(withdrawAmount > newTotal){
    alert('insufficient balance');
    document.getElementById("withdrawInp").value ="";
    return;
      
   }
   const amount = newTotal - withdrawAmount;
   document.getElementById("totalAmount").innerText = amount;
   document.getElementById("withdrawInp").value ="";
})
