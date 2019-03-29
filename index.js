var recipes = {bolo: 'formigueiro'}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object;
}

function deleteFromObjectByKey(object,key){
  var objetoAtualizado = object
  return delete objetoAtualizado.key;
}

function destructivelyDeleteFromObjectByKey(object, key){
  return delete object[key];
}
