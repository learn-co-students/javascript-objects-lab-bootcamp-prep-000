var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign(object, {[key] : value});
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key] : value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
<<<<<<< HEAD
  return Object.assign(object, {[key] : value, [key] : value});
}

function deleteFromObjectByKey(object, key) {
  return Object.assign({}, key); 
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return Object.assign(...object, key);
=======
  return Object.assign(...object, {[prop] : 2});
>>>>>>> 27dc146be137e5f5fdab942bd8c5f65956e9e65d
}