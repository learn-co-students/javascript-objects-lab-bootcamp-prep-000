var recipes = new Object()


var obj = { prop: 1 }
function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, { [key]: value })
}
updateObjectWithKeyAndValue(obj, "prop2", 2)

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}
destructivelyUpdateObjectWithKeyAndValue(obj, "prop2", 2)



var obj = { prop: 1 }
function deleteFromObjectByKey(object, key){
 delete obj.key
 return obj
}
deleteFromObjectByKey(obj, "prop")


var obj = { prop: 1 }
function destructivelyDeleteFromObjectByKey(object, key){
  delete obj.key
  return  obj
}
destructivelyDeleteFromObjectByKey(obj,"prop")
