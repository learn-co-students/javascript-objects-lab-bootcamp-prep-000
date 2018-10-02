var recipes ={};
var obj={ prop:1};
var newObj = Object.assign({},
obj);

function updateObjectWithKeyAndValue(obj, key, value) {
    
     return Object.assign({}, obj, { [key]: value });
}
updateObjectWithKeyAndValue(obj, prop2, 2);

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
 
  return obj;
}

destructivelyUpdateObjectWithKeyAndValue(obj, prop2, 2);

function deleteFromObjectByKey(object, key) {
  delete newObj.prop;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(obj,prop){
  delete obj.prop;
  return obj;
}
destructivelyDeleteFromObjectByKey(object,prop);

