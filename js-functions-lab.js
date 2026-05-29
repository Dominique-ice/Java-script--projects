// ============================================
// JavaScript Functions Lab
// Author: Samuel Nwankwo
// Institution: UNN — 200L Computer Science
// Date: May 29, 2026
// Topics: Type Checking, String Manipulation,
//         Conditionals, Math, Temperature Conversion
// Part of: JavaScript Fundamentals Learning Journey
// ============================================


// ============================================
// 1. BOOLEAN CHECKER
// Checks if a value is a boolean primitive
// Returns true for true/false, false for everything else
// ============================================

function booWho(num) {
  return typeof num === "boolean";
}

console.log(booWho(true));        // true
console.log(booWho(false));       // true
console.log(booWho(42));          // false
console.log(booWho("hello"));     // false


// ============================================
// 2. EMAIL MASKER
// Masks the username part of an email address
// Example: myEmail@email.com → m*****l@email.com
// ============================================

function maskEmail(email) {
  const atPosition = email.indexOf("@");
  const userName = email.slice(0, atPosition);
  const domain = email.slice(atPosition);
  return userName[0] + "*".repeat(userName.length - 2) + userName[userName.length - 1] + domain;
}

const email = "nwankwos863@gmail.com";
console.log(maskEmail(email));    // n*********3@gmail.com


// ============================================
// 3. LOAN ELIGIBILITY CHECKER
// Checks what loan a person qualifies for
// based on their annual income and credit score
// ============================================

const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if (annualIncome >= minIncomeForDuplex && creditScore >= minCreditScoreForDuplex) {
    return "You qualify for a duplex, condo, and car loan.";
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan.";
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan.";
  }
}

const duplexLoanMsg = getLoanMessage(85000, 850);
const condoLoanMsg = getLoanMessage(65000, 690);
const carLoanMsg = getLoanMessage(45000, 660);
const noLoanMsg = getLoanMessage(25000, 550);

console.log(duplexLoanMsg);   // You qualify for a duplex, condo, and car loan.
console.log(condoLoanMsg);    // You qualify for a condo and car loan.
console.log(carLoanMsg);      // You qualify for a car loan.
console.log(noLoanMsg);       // undefined


// ============================================
// 4. TEMPERATURE CONVERTER
// Converts temperature from Celsius to Fahrenheit
// Formula: F = (C × 9/5) + 32
// ============================================

function convertCtoF(celsius) {
  const fahrenheit = celsius * (9/5) + 32;
  return fahrenheit;
}

console.log(convertCtoF(0));     // 32
console.log(convertCtoF(100));   // 212
console.log(convertCtoF(37));    // 98.6
