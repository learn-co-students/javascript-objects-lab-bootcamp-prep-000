var recipes = {}

function updateObjectWithKeyAndValue (object, key, value) {
  var object = Object.assign ( {}, object, {[key] : value}  );
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
object[key] = value;
return object;

}

function deleteFromObjectByKey (object, key) {
  var newObj = Object.assign({}, object)
  delete newObj.key
  return newObj;
}


function destructivelyDeleteFromObjectByKey (object, key) {
delete[key]
return object;

}
