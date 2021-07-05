var recipes = {breakfast : "sandwich", lunch: "hotdog"}

function updateObjectWithKeyAndValue(object, key, value){
  console.log(Object.assign({}, object, { [key]:value }))
  return Object.assign({}, object, { [key]:value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object)
  console.log(newObj)
  delete newObj[key]
  console.log(newObj[key])
  console.log(newObj)
  console.log(object)
  return newObj
}
deleteFromObjectByKey(recipes,"breakfast")
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
