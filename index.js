function Objects(){
  var recipes = {};
    return recipes
}

var recipes = new Object()

function updateObjectWithKeyAndValue(obj, key, value){
    return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
    obj[key] = value
    return obj
}

function deleteFromObjectByKey(obj, key){
    newObj = Object.assign({}, obj)

    //console.log("before")
    //console.log(newObj)

    delete newObj[key]

    //console.log("after")
    //console.log(newObj)

    return newObj
}

// // //learn.co test
// var obj = { prop: 1 }
// var newObj = deleteFromObjectByKey(obj, 'prop')
//
// console.log(newObj['prop'])
//   //expect(newObj['prop']).toBe(undefined)
//
// console.log(obj['prop'])
//   //expect(obj['prop']).toBe(1)

function destructivelyDeleteFromObjectByKey(obj, key){
    delete obj[key]
    return obj
}


// //test object
// recipes = {man: "bob",
//           woman: "sarah",
//           }

// //update tests
// key = "breakfast"
// recipes[key] = "pancake"
// console.log(recipes)
// recipes[key] = "buttermilk"
// console.log(recipes)
// console.log("nondestructive")
// console.log(updateObjectWithKeyAndValue(recipes, key, "muffins"))
// console.log("original")
// console.log(recipes)

// //delete tests
// key = "man"
// recipes_less = deleteFromObjectByKey(recipes, key)
// console.log('less recipes:')
// console.log(recipes_less)
// console.log("original")
// console.log(recipes);
//
// console.log("delete")
// console.log(destructivelyDeleteFromObjectByKey(recipes, key))
// console.log("original")
// console.log(recipes)
