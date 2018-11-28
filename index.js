var recipes = {};
var obj = { prop: 1 };
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},obj,{[key]:value});
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
 object[key] = value;
 return object;
}

function deleteFromObjectByKey(object, key){
  var newobj = Object.assign({},Object);
   delete newobj[key];
   return newobj;
}

 function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
