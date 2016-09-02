var recipes = {eggs: 3, flour: "1 cup", milk: "1/2 cup"};

function updateObjectWithKeyAndValue(obj, k, v){
  var clone = Object.assign({}, obj);
  clone[k] = v;
  return clone;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, k, v){
  obj[k] = v;
  return obj;
}

function deleteFromObjectByKey(obj, k){
  var clone = Object.assign({}, obj);
  delete clone[k];
  return clone;
}

function destructivelyDeleteFromObjectByKey(obj, k){
  delete obj[k];
  return obj;
}
