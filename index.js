var recipes = {};

var obj = { prop: 1 }
function updateObjectWithKeyAndValue(object, key, value){
   return Object.assign({}, obj, { [key]:value  })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

var obj = { prop: 1 }
var newObj = {[obj]: 'prop'}

function deleteFromObjectByKey(object, key){
  delete obj.prop;
  return obj
}

var obj = { prop: 1 }
var newObj = {obj: 'prop'};
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
