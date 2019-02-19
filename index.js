var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object)
  delete newObj.key;
  return newObj
}

function deleteFromObjectByKey(object,key){
  var newobj = Object.assign({},object)
  delete newobj[key]
  return newobj
}


/*var obj = { foo: 'bar' }
console.log(obj.foo)

var DS = 'foo'
var newObj = Object.assign({},obj)

console.log(newObj)
delete newObj[DS]
console.log(newObj)*/

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}



