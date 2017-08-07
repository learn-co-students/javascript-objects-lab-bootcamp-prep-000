var recipes = {cookies: "Chocolate", cake: "Vanillia"};


function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var res = Object.assign({}, object)
  delete res[key]
  return res
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
