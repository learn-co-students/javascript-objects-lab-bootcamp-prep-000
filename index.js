var recipes = new Object ({})

 var obj = { prop: 1 }

function updateObjectWithKeyAndValue(object, key, value) 
{return Object.assign({},obj,{[key]:value})}

//since we use dot notation this doesnt act  destructivtely

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) 
{object[key] = value ; return object}

// above by using the bracket notaion this does act destructivtely

function deleteFromObjectByKey(object, key) {
  var clone = Object.assign({}, object);
  delete clone[key];
  return clone;
}

 function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}

