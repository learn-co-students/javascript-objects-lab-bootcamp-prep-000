var recipes = {
}

// var updateObjectWithKeyAndValue(object, key, value){
//   object.assign({}, "key": "value")
// }


// the correct way is below:
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}


//////

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value

  return object
}

// function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
//   object[key] = value
//
//   return object
// }
//


/////////


function deleteFromObjectByKey(object, key) {
  const newObj = Object.assign({}, object)
  delete newObj[key]

  return newObj
}



// function deleteFromObjectByKey(object, key) {
//   const newObj = Object.assign({}, object)
//
//   delete newObj[key]
//
//   return newObj
// }
//


////


function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]

  return object
}


// function destructivelyDeleteFromObjectByKey(object, key) {
//   delete object[key]
//
//   return object
// }
