var recipes= new Object({Eggs: '3'})
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {Object.assign(object, {[key]:value}); return object}
function updateObjectWithKeyAndValue(object, key, value) {return Object.assign({}, object, {[key]:value});}
function destructivelyDeleteFromObjectByKey(object, key) {delete object[key]; return object}
function deleteFromObjectByKey(object, key) {var newObj= Object.assign({}, object); delete newObj[key]; return newObj}
