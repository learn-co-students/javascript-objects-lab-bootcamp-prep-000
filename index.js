var recipes = {}

function updateObjectWithKeyAndValue(o,k,v){
  return Object.assign({}, o, {[k]: v})
}

function destructivelyUpdateObjectWithKeyAndValue(o,k,v){
  o[k] = v
  return o;
}

function deleteFromObjectByKey(o,k){
  var newO = Object.assign ({}, o);
  delete newO[k];
  return newO;
}

function destructivelyDeleteFromObjectByKey(o,k){
  delete o[k]
  return o

}
