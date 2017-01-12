var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {

  /*return object.assign({}, recipes, { [key]: value })*/
  return Object.assign({}, obj, { [key]: value })

}
/*var obj = { foo: 'bar' }

#var newObj = Object.assign({}, obj)
#delete newObj.foo // true*/

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}

function deleteFromObjectByKey(obj, key) {

  var newObj = Object.assign({}, obj)
  delete newObj[key] // true*/
  return newObj


}



function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key]

  return obj
}
