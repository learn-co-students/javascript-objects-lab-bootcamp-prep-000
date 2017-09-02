var recipes = {'breakfast': 'milk'};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]:value});
}

function deleteFromObjectByKey(object, key){
  var new_object = Object.assign({}, object);
  delete new_object[key];
  return new_object;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
