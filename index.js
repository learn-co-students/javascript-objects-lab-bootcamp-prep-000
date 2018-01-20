var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, recipes, {prop: 1, prop2: 2});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var obj = {prop : 1};
  obj = Object.assign({}, object, {'prop':1});
  delete obj.prop;
  return obj;
  
}

function destructivelyDeleteFromObjectByKey(object, key){
   var obj = { prop: 1 };
   obj = delete object.prop;
   return obj;
}