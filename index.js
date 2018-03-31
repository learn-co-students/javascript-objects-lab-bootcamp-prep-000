function p(value){
  console.log(value);
}
 
var recipes = { EggSandwhich: "2 eggs"}


function updateObjectWithKeyAndValue(object, key, value){
    object[key] = value;
    return object
}


function updateObjectWithKeyAndValue(object, key, value){
    return Object.assign({}, object, { [key]: value })
    
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   return Object.assign(object, { [key]: value })
}


function deleteFromObjectByKey(object, key){
  delete object.key
  return object
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object)
  delete newObj[key];
  return newObj
}


function destructivelyDeleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}


function destructivelyDeleteFromObjectByKey(obj, key,) {
  delete obj[key]
  return obj
}





