
var obj = new Object();
var newObj = new Object();
var obj = {
  "prop": 1
};

function updateObjectWithKeyAndValue (object, key, value){
  return Object.assign({},object, {[key]: value})
}

newObj = updateObjectWithKeyAndValue (obj, "prop2",2);

function destructivelyUpdateObjectWithKeyAndValue (object, key, value){
  object[key] = value;
  return object;
}

obj = destructivelyUpdateObjectWithKeyAndValue(obj,'prop2',2);

function deleteFromObjectByKey (object, key){
  return delete object.key;
}

newObj = deleteFromObjectByKey (obj,"prop2");

function destructivelyDeleteFromObjectByKey (object,key){
delete object[key];
return object;
}

obj = destructivelyDeleteFromObjectByKey (obj,'prop');
