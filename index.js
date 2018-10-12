const recipes = {};

const updateObjectWithKeyAndValue = (object, key, value) => {
  return Object.assign({}, object, {[key]: value});
};

const destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object[key] = value;
  return object;
};

const deleteFromObjectByKey = (object, key) => {
  const obj = Object.assign({}, object);
  delete obj[key];
  return obj;
};

const destructivelyDeleteFromObjectByKey = (object, key) => {
  delete object[key];
  return object;
};
