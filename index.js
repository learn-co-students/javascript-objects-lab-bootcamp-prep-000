var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
    return Object.assign({},object, { [key]: value},)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key]=value

    return object

}

function deleteFromObjectByKey(object,key){

        delete object.key;
        return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}







/*var obj = { foo: 'bar' }

var newObj = Object.assign({}, obj)

newObj // { foo: 'bar' }

delete newObj.foo // true

newObj // {}

obj // { foo: 'bar' }*/
//delete meals.dinner;



/*function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}
// return Object.assign({}, obj, { [key]: value })
 /*function updateObjectWithKeyAndValue(object, key, value) {
  ecipes['salt'] = '2 teaspoons'
  return recipes
}*/
