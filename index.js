var recipes = {eggs : 'two', butter : '1/2 stick'}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key] : value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    return Object.assign(object, {[key] : value})
}
function deleteFromObjectByKey(object, key){
  return Object.assign({}, object)[key]
}
function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key]
}
