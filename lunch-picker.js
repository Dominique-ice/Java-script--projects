const lunches =[]
function addLunchToEnd(arr,str) {
 arr.push(str)
 console.log(`${str} added to the end of the lunch menu.`)
 return arr
}
function addLunchToStart(arr,str) {
 arr.unshift(str)
 console.log(`${str} added to the start of the lunch menu.`)
 return arr
}
function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let removedValue = arr.pop()
    console.log(`${removedValue} removed from the end of the lunch menu.`)
  }
  return arr;
}

function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let removedValue = arr.shift()
    console.log(`${removedValue} removed from the start of the lunch menu.`)
  }
  return arr;
}

function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
  } else {
    let randomLunch = arr[ Math.floor(Math.random()  * arr.length)]

    console.log(`Randomly selected lunch: ${randomLunch}` )
  }
  return arr;
}

function showLunchMenu(arr) {
  if (arr.length === 0) {
  console.log("The menu is empty.");
  } else { 
   console.log(`Menu items: ${arr.join(", ")}`);
  }
 return arr ;
 }

addLunchToEnd(lunches, "Pizza");
addLunchToEnd(lunches, "Tacos");
addLunchToStart(lunches, "Sushi");
showLunchMenu(lunches);
getRandomLunch(lunches);
removeLastLunch(lunches);
removeFirstLunch(lunches);
showLunchMenu(lunches);
