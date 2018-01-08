  var recipes = {}

function updateObjectWithKeyAndValue(object,key,value) {
  var obj = { prop: 1};
  object[key] = value
  return object}

function updateObjectWithKeyAndValue(object,key,value){
  var obj = { prop: 1 }
  return Object.assign({},obj,{[key]:value});
return object
}


function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  var obj={prop:1};
  Object.assign(object,{[key]:value})
  return object
}

function deleteFromObjectByKey(object,key){
  var obj= {prop:1};
  var newObj = Object.assign({}, object )
  delete newObj.prop
  return newObj
}

function destructivelyDeleteFromObjectByKey(object,key){
  var obj = {prop:1};
  return delete object.prop
}
