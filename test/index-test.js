/*global describe, it */

describe('Objects', function() {
  it('defines a `recipes` object', function() {
    expect(typeof recipes).toEqual('object')
  })

  describe('updateObjectWithKeyAndValue(object, key, value)', function() {
    it('returns a clone of `object` by adding `key` and `value` (it is non-destructive)', function() {
      var obj = { prop: 1 }

      expect(updateObjectWithKeyAndValue(obj, 'prop2', 2)).toMatch({
        prop: 1,
        prop2: 2
      })

      expect(obj).toMatch({ prop: 1 })
    })
  })

  describe('destructivelyUpdateObjectWithKeyAndValue(object, key, value)', function() {
    it('updates `object` with the given `key` and `value` (it is destructive)', function() {
      var obj = { prop: 1 }

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
    it('deletes `key` from a clone of object and returns the new object (it is non-destructive)', function() {
      var obj = { prop: 1 }

      expect(deleteFromObjectByKey(obj, 'prop')).toMatch({})
      expect(obj).toMatch({ prop: 1 })
    })
  })

  describe('destructivelyDeleteFromObjectByKey(object, key)', function() {
    it('deletes `key` from object and returns object', function() {
      var obj = { prop: 1 }

      expect(destructivelyDeleteFromObjectByKey(obj, 'prop')).toMatch({})
      expect(obj).toMatch({})
    })
  })

})
