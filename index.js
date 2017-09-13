var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, {key: "value"})
}


function updateObjectWithKeyAndValue(object, key, value){
 Object.assign({}, {key : value}, {key : value})
 return Object.assign({prop: "1", prop2 : "2"})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key, value){
  delete object.key
  return object
}

function deleteFromObjectByKey(object, key){
    return Object.assign({key})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
 return object

}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
