var recipes = new Object
recipes = {[snack]:eminems}

function updateObjectWithKeyAndValue(obj,key,value){
  return Object.assign({}, obj, {[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,value){
  obj[key] = value;
  return obj
}
function destructivelyDeleteFromObjectByKey(obj,key){
  delete obj[key];
  return obj;
}
function deleteFromObjectByKey(obj,key,value){
  var obj = {key:value};
  var newObj = Object.assign({},obj);
  delete newObj.key;
  return obj;
}
