function UpdateObjectWithKeyAndValue(Object, key, value){
  Object.assign(obj = {prop2: 2 });
  return obj;
}




function deleteFromObjectByKey(obj, key){
  var newObj = Object.assign({}, obj);
  delete newObj.prop;
  return newObj;
  
}



function destructivelyDeleteFromObjectByKey(obj, key){

delete obj.prop;
return obj;
}