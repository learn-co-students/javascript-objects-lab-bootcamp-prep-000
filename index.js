var recipes = { omlete: 'egg' }

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign ({},object,{[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  return object
}

function deleteFromObjectByKey(object, key){
  var newobjective = Object.assign({},object)
  return delete newobjective.key
}

function destructivelyDeleteFromObjectByKey(object, key){
  return delete object[key];
}
