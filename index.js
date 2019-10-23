var recipes = {
  penny: 'dog',
  darci: 'dog',
  joram: 'human',
  megan: 'human'
};

var updateObjectWithKeyAndValue = (object, key, value) => {
  return Object.assign({}, object, {[key]: value});
};

var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object[key] = value;
  return object;
};

var deleteFromObjectByKey = (object, key) => {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
};

var destructivelyDeleteFromObjectByKey = (object, key) =>{
  delete object[key];
  return object;
};
