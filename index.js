var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]:value})
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
destructivelyUpdateObjectWithKeyAndValue({prop:1,key:2},"prop2",2)

function deleteFromObjectByKey(object,key){
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
