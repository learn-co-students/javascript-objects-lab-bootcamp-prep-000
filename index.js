const recipes = { flour: "1 cup"}

function updateObjectWithKeyAndValue(object, key, value){
    return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
    object[key] = value
    return object
}

function deleteFromObjectByKey(object, key){
  var obj = { foo: 'bar' }
  var newObj = Object.assign({}, obj)
  delete newObj.foo
  return obj
}

function destructivelyDeleteFromObjectByKey(object, key){
 var key = "prop"
 delete object[key]
 return object
}
