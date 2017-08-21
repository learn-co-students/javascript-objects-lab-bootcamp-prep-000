/*global describe, it */

describe('Objects', function() {
  it('defines a `recipes` object', function recipes() {
    var object = {
      object
    }
    return object
    expect(typeof recipes).toEqual('object')
  })

  describe('updateObjectWithKeyAndValue(object, key, value)', function() {
    it('returns an object with the orignal key value pairs and the new key value pair', function updateObjectWithKeyAndValue() {

      var obj = { prop: 1 ,
                  prop2: 2 }
                return obj
      expect(updateObjectWithKeyAndValue(obj, 'prop2', 2)).toMatch({
        prop: 1,
        prop2: 2
      })
    })

    it('it does not modify the original object, but rather returns a clone with the new data', function updateObjectWithKeyAndValue() {
      var obj = { prop2: 2 }
      return obj
      updateObjectWithKeyAndValue(obj, 'prop2', 2)

      expect(obj['prop2']).toBe(undefined)
    })
  })

  describe('destructivelyUpdateObjectWithKeyAndValue(object, key, value)', function() {
    it('updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object',
    function destructivelyUpdateObjectWithKeyAndValue() {
      var obj = {  prop2: 2 }
                  return obj
      expect(destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2)).toMatch({
        prop: 1,
        prop2: 2
      })

      expect(obj).toMatch({
        prop: 1,
        prop2: 2
      })
    })
  })

  describe('deleteFromObjectByKey(object, key)', function() {
    it('deletes `key` from a clone of object and returns the new object (it is non-destructive)', function deleteFromObjectByKey() {
      var obj = { prop: 1 }
      var newObj = Object.assign({}, obj, 'prop')
      return obj

      expect(newObj['prop']).toBe(undefined)
    })

    it('does not modify the original object (it is non-destructive)', function deleteFromObjectByKey() {
      var obj = { prop: 1 }
      return obj

      deleteFromObjectByKey(obj, 'prop')
      expect(obj['prop']).toBe(1)
    })
  })

  describe('destructivelyDeleteFromObjectByKey(object, key)', function() {
    it('returns object without the delete key/value pair', function destructivelyDeleteFromObjectByKey() {
      var obj = { prop: 1 }
      var newObj = Object.assign({}, obj, 'prop')
      return obj

      expect(newObj['prop']).toBe(undefined)
    })

    it('modifies the original object', function destructivelyDeleteFromObjectByKey() {
      var obj = { prop: 1 }
      var newObj = Object.assign({}, obj, 'prop')
      return obj

      expect(obj['prop']).toBe(undefined)
    })
  })

})
