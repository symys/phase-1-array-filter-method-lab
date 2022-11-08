// Code your solution here
function findMatching(nameArr, name){
  return nameArr.filter(
    (driverName) => driverName.toLowerCase() === name.toLowerCase()
  )
}

function fuzzyMatch(nameArr, n){
    return nameArr.filter((driverName) => driverName.startsWith(n))
}

function matchName(driverObj, string){
    return driverObj.filter((driver) => driver.name === string)
}