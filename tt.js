var diet = {
  Breakfast: "Mac and Cheese",
  Breakfast2: "Soda",
  Lunch: "Instant Noodles"
}

function deleteFromObjectByKey(object, key) {
  delete object.key
  return diet
}

var meals = diet.Breakfast
console.log("meals results in: " + meals)
console.log("diet.Breakfast will result in: " + diet.Breakfast)
console.log("The function will result in: "  + deleteFromObjectByKey(meals))


console.log(diet)
