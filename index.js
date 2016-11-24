var recipes = { food:"hotdog"

}
function  updateObjectWithKeyAndValue(object, key, value) {
var obj = { prop: 1}
var newObj = Object.assign({prop2: 2}, obj)
return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){

object[key] = value
return object

}


function deleteFromObjectByKey(object, key) {
var obj = { prop: 1 }
var newObj = Object.assign({}, obj)
delete newObj.prop
return obj

}
function  destructivelyDeleteFromObjectByKey(object, key){
  var obj = { prop: 1 }
  delete obj.prop
  return obj
}
