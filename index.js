var recipes = new Object ({}) 

var obj = { prop: 1 }
  function updateObjectWithKeyAndValue(object, key, value) {
   return Object.assign({},obj,{[key]:value});
  }
  
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 object[key] = value;
   return object;
}

function deleteFromObjectByKey(object, key) {
   var clone = Object.assign({}, object);
   delete clone[key];
 return clone;
}

function destructivelyDeleteFromObjectByKey(object, key) {
 delete object[key];
  return object;
}

