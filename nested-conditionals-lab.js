function isLeapYear(num) {
  if (num % 4 === 0) {
    if (num % 100 === 0) {
      if (num % 400 === 0) {
        return `${num} is a leap year.`
      } else {
        return `${num} is not a leap year.`
      }
    } else {
      return `${num} is a leap year.`
    }
  } else {
    return `${num} is not a leap year.`
  }
}

let year = 1996;

let resultLeap = isLeapYear(year);
console.log(resultLeap);
    
    function truncateString(str,num) {
  if (str.length > num) {
    return str.slice(0,num) + "..."
    } else {
    return str
    }
}
let resultTruncate = truncateString("hello world", 5);
console.log(resultTruncate);


function confirmEnding(str,target){
  if (str.slice(-target.length) === target) {
    return true
  } else {
    return false
  }
}
let resultConfirm = confirmEnding("Bastian","ian")
console.log(confirmEnding("Bastian", "ian"));
