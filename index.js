var recipes = {key: 'value'};


function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
 
 return object;
//returns an object with the orignal key value pairs and the new key value pair
}


function updateObjectWithKeyAndValue(object, key, value) {
  
  return Object.assign({}, object, { [key]: value });
//it does not modifye original object, but rather returns a clone with the new data
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return recipes = {key:value};
//updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object:
}
  