const recipes = {};
function updateObjectWithKeyAndValue(object, key, value){ var newOb = Object.assign(recipes, object, { [key] : value}); return newOb}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){ Object.assign(object, { [key] : value}); return object}
function deleteFromObjectByKey(object, key){ var nunu = new Object({}); Object.assign(nunu, object); delete nunu[key]; return nunu }
function destructivelyDeleteFromObjectByKey(object, key){return delete object[key]}
