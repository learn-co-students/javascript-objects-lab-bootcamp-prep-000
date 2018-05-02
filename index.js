var recipes = {
  1:'1'
}

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function updateObjectWithKeyAndValue(object, key, value){
  return object.assign({key:value});
}