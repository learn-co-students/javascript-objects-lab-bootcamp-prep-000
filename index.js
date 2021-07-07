var recipes = { property : 'somevalue'};


function updateObjectWithKeyAndValue(object, key, value){
     return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
      Object.assign (object,{[key]:value});
      return object;
}

function deleteFromObjectByKey(object, key){
  var objectNew = Object.assign({},object);
  delete objectNew[key];
  return objectNew;
}

function destructivelyDeleteFromObjectByKey(object, key){
     delete object[key];
     return object;
}
