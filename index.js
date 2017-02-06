var recipes = {};

var obj = { prop: 1};
function updateObjectWithKeyAndValue(){

  return Object.assign({prop: 1}, {prop2: 2})
}
var obj = { prop: 1};
function destructivelyUpdateObjectWithKeyAndValue(object, key, value ){

  object[key] = value;
  return object
}

var obj = { prop: 1 };
function deleteFromObjectByKey(){
var obj = new Object({});
  return obj
}

var obj = { prop: 1 };
function destructivelyDeleteFromObjectByKey(){
    delete obj.prop;
 return obj
}
