var recipes = {}

 function updateObjectWithKeyAndValue(object, key, value) {
 }

 function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 }

 function deleteFromObjectByKey(object, key) {
}

 function destructivelyDeleteFromObjectByKey(object, key) {
 }

 var obj = { foo: 'bar' }

 var newObj = Object.assign({}, obj)

 newObj // { foo: 'bar' }

 delete newObj.foo // true

 newObj // {}

 obj // { foo: 'bar' }

function recipes() {

}
