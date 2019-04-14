var recipes = {
  cereal: ["milk", "cherrios"], 
  soup: ["chicken", "chicken broth"], 
  frenchToast: ["bread", "butter", "eggs"]
};

function updateObjectWithKeyAndValue(obj, key, value) {
 return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(obj, key) {
 return delete Object.assign(obj[key]);
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  return delete obj[key];
}
