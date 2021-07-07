var recipes = new Object()
console.log(recipes)

function updateObjectWithKeyAndValue(object, key, value) {
//  object[key] = value;
//  var brandNew = Object.assign({}, object, {[key]: value})
  return Object.assign({}, object, {[key]: value})
  // return object;
  // return newObject
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   object[key] = value;
   return object
}

// function deleteFromObjectByKey(object, key) {
//   delete object[key]
//   return object
// }

sample = {Betty:"CSA", Ursula:"PMR", Mike: "Adelante"}
console.log(sample)
console.log(sample.Mike)

function deleteFromObjectByKey(object, key) {
    // delete object[key]
    // return object

  var newObject = Object.assign({}, object, {})
  console.log(newObject)
  // console.log(object)
  delete newObject[key]
  return newObject;
}

deleteFromObjectByKey(sample, "Ursula")
console.log(sample)
console.log(sample.Ursula)

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
