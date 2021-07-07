function updateObjectWithKeyAndValue(object, key ,value){
  var obj = Object.new 
  obj = Object.assign({}, object,{[key]: value})

  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
    var obj = object
    var newObj = Object.assign({}, obj)
    
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}


