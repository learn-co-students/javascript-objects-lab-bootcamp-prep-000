var recipes ={}



function updateObjectWithKeyAndValue(obj, key,value)

{
  var newobj= Object.assign({}, obj ,{ [key]: value})
  return newobj
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, key,value)

{
  object[key]=value
  return object
  
}

