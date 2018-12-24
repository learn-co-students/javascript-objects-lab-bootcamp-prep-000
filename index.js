var recipes = {estelle:'3 measures'}

function updateObjectWithKeyAndValue(vari, key, chest){
  var temp = Object.assign({}, vari)
  temp[key] = chest
  return temp
}

function destructivelyUpdateObjectWithKeyAndValue(vari, key, chest){
  vari[key] = chest
  return vari
}

function deleteFromObjectByKey(vari, key){
   var temp = Object.assign({}, vari)
   delete temp[key]
   return temp
}

function destructivelyDeleteFromObjectByKey(vari, key){
  delete vari[key]
  return vari
}

