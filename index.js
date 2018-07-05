var recipes = {recipe1: 'first'}
function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({}, object, {[key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key){
    var andres = Object.assign({}, object)
    delete andres[key]
    return andres

}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
var saludo = ['hole', 'master']
var andres = deleteFromObjectByKey(recipes, 'recipe1')
console.log(andres)
