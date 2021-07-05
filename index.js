var recipes = {key: 'value'}

/* 
1. Declare a function named updateObjectWithKeyAndValue.
2. Function accepts 3 parameters named object, key, value, whose values are object, string, and string. 
3. When call function, return new object with key & value.
*/
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value });
}

/* 
1. Declare a function named destructivelyUpdateObjectWithKeyAndValue.
2. Function accepts 3 parameters named object, key, value, whose values are object, string, and string. 
3. When call function, return updated object.
*/
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

/* 
1. Declare a function named deleteFromObjectByKey.
2. Function accepts 2 parameters named object & key, whose values are object and string. 
3. When call function, return new object w/o key-value.
*/
function deleteFromObjectByKey(object, key) {
  const newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

/* 
1. Declare a function named deleteFromObjectByKey.
2. Function accepts 2 parameters named object & key, whose values are object and string. 
3. When call function, return new object w/o key-value.
*/
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}


