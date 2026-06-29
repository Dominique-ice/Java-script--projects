function calculateSum (num1,num2){
  return num1 + num2;
}
console.log(calculateSum(60,80));
function calculateDifference(num1,num2){
  return num1 - num2;
}
console.log(calculateDifference(900,85));
function calculateProduct (num1,num2){
  return num1 * num2;
}
console.log(calculateProduct(80,90));
function calculateQuotient(num1,num2){
  if(num2 === 0) {
    return "Error:division by zero" 
    } else {
    return num1 / num2;
    }
}
console.log(calculateQuotient(32,4))
