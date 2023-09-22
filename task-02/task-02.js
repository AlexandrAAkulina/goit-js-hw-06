const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsItem = document.querySelector("#ingredients");

const itemOfIngredients = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("ingredients-item");
  return li;
})

ingredientsItem.append(...itemOfIngredients);
