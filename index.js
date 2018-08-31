var recipes= {
  prop: 1

  }
function updateObjectWithKeyAndValue(object, key, value){
 return Object.assign({prop:1},{prop2:2})
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
 object.prop2= 2
 return object
}
function deleteFromObjectByKey(object,key){
  var newObject= object
  delete newObject[key]
  return newObject.prop= 1
  }
  function destructivelyDeleteFromObjectByKey(object,key){
    delete object[key]
    return object
  }