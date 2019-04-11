var recipes = Object.assign ({});

function updateObjectWithKeyAndValue(object, key, value) {
 const target = object;
 const source = { [key]: value };
 const returnedTarget = Object.assign({}, target, source);
 return returnedTarget;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
}

function deleteFromObjectByKey(object, key) {
  
}

function destructivelyDeleteFromObjectByKey(object, key) {
  
}

