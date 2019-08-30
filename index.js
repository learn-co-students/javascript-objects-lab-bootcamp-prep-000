var recipes = {
  key: "fdsojifdsijofi"
};

function updateObjectWithKeyAndValue(obj, key, value){
  let update = {};
  update[key] = value;
  return Object.assign({}, obj, update)
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key){
  let update = {};
  update[key] = value;
  return Object.assign({}, obj, update)
}

function destructivelyDeleteFromObjectByKey(obj, key){
   delete obj[key]
   return obj
}
