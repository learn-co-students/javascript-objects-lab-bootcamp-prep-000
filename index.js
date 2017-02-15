var recipes = new Object({flour: "1 cup"});

function updateObjectWithKeyAndValue(object, key, value)
{return Object.assign({}, object, {[key]: value})}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{object[key] = value; return object};

function deleteFromObjectByKey(object, key) {var newObject = Object.assign({}, object);
delete newObject.foo; return newObject};

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.foo; return object
}
