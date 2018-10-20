var recipes = {
  recipe: "ingredient"
};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
 var upDatedObject = Object.assign({}, object); 
 return delete upDatedObject[key];
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}

/*
  describe('destructivelyDeleteFromObjectByKey(object, key)', function() {
    it('returns object without the delete key/value pair', function() {
      var obj = { prop: 1 }
      var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');

      expect(newObj['prop']).toBe(undefined)
    })

    it('modifies the original object', function() {
      var obj = { prop: 1 }
      var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');

      expect(obj['prop']).toBe(undefined)
    })
  })

})
*/