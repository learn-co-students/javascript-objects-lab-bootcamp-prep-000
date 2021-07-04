var recipes = new Object ({ prop: 1 });
function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function updateObjectWithKeyAndValue(obj, key, value) {
  var obj = { prop: 1 };
  obj = {
        prop: 1,
        prop2: 2
      };
  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
      
  obj[key] = value;
  return obj
  
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key];
  return obj;
}

function deleteFromObjectByKey(obj, key){
      delete obj.key;
      return key;
  
} 
  
  
function deleteFromObjectByKey(obj, key){
 
var newObj = Object.assign({}, obj)
 
 
delete newObj.key
 
return key
}

