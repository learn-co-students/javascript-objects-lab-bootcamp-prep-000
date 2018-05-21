var recipes ={}



function updateObjectWithKeyAndValue(obj, key,value)

{
  var newobj= Object.assign({}, obj ,{ [key]: value})
  return newobj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key,value)

{
  obj[key]=value
  return obj
  
}



function deleteFromObjectByKey(object, key)

{
  var newobj= Object.assign({}, Object )
  delete newobj[key]
  return newobj
  
}

