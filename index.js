var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {

  return Object.assign({}, object, { [key]: value });

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {

  object[key] = value;
  return object;

}

function deleteFromObjectByKey(object, key){
 var deleteFromObjectByKey = {key: 'object'};
  delete deleteFromObjectByKey.key;
 return deleteFromObjectByKey;
}

deleteFromObjectByKey();

function destructivelyDeleteFromObjectByKey(object, key) {

  var destructivelyDeleteFromObjectByKey = {key: 'object'};
  return destructivelyDeleteFromObjectByKey;
  }
delete destructivelyDeleteFromObjectByKey.key;
