var recipes = {}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) { object[key] = value;
return object }

function updateObjectWithKeyAndValue(object, key, value) {
  return assign.Object({}, object, {[key]: value});
}