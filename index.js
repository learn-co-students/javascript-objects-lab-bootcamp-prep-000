var recipes = {}

function updateObjectWithKeyAndValue(array,key,value){
  array[key] = value
  return array
}

function destructivelyUpdateObjectWithKeyAndValue(array,key,value){
  //return Object.assign({},array,{key: value})
  array[key] = value
  return array
}

function deleteFromObjectByKey(array,key){
  array.key
  return array
}

function destructivelyDeleteFromObjectByKey(array,key){
  array[key]
  return array
}