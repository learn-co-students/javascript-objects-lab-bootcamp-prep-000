var recipes = {
 
};

function updateObjectWithKeyAndValue(recipes, key, value){
  
  var newObj = Object.assign({prop: 1, prop2: 2}, recipes)
  return newObj
}
function destructivelyDeleteFromObjectByKey(object, key){
 var obj = { prop: 1}
 var newObj = Object.assign({prop2: 2}, obj)

delete newObj.prop
return newObj
  
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  object[key] = value;
 
 return object
}
const newObj = {prop:1}

function deleteFromObjectByKey(object, key){
  var obj ={ prop: 1}
  var newObj = Object.assign({}, obj)
  
  delete newObj.prop
  
  //delete object.key
  return newObj;
}
