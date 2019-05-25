var recipes = new Object({});

function updateObjectWithKeyAndValue(o, k, v){
  var newO = Object.assign({},o)
  Object.assign(newO,{[k]:v})
  return newO
}

function destructivelyUpdateObjectWithKeyAndValue(o, k, v){
  Object.assign(o,{[k]:v})
  return o
}

function deleteFromObjectByKey(o, k){
  var newO = Object.assign({},o)
  delete (newO[k])
  return newO
}

function destructivelyDeleteFromObjectByKey(o, k){
  delete (o[k])
  return o
}