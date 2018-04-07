var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = { prop: 1 };
  return Object.assign({}, obj,{ [key] : value});
 // return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  //var obj = { prop: 1 };
  obj [key] = value;
 
  return obj;
  //Object.assign({prop2 : 2}, obj);
}

function deleteFromObjectByKey(obj, key){
  //var obj = { prop: 1 };
  var newObj = Object.assign({},obj);
  delete newObj.prop;//same as lower delete comment
  return newObj;
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj.prop; //I shouldn't have to name the key. Why does it only work if I name the key? This is a very limited function
  return obj;
}
