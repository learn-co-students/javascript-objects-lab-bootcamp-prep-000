var recipes = {key: 'value'}

function updateObjectWithKeyAndValue (obj, key, value){
return Object.assign({}, obj, { [key]: value });
}
function destructivelyUpdateObjectWithKeyAndValue (obj, key, value){
  obj[key] = value;{
  return obj
  }
}
//Fix Errors
function deleteFromObjectByKey (obj,key){
    var newObj = Object.assign({},obj);{
    delete newObj[key];{
  }
  return obj
  }
}
function destructivelyDeleteFromObjectByKey (obj, key){
  delete obj[key];{
    return obj
  }
}
