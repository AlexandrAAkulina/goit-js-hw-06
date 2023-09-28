const categoriesItem = document.querySelector("#categories");
const categoriesLength = categoriesItem.children.length;

console.log(`Number of categories: ${categoriesLength}`);

Array.from(categoriesItem).forEach((item) => {
     console.log(`Category: `, item.firstElementChild.textContent);
     console.log(`Elements: `, item.lastElementChild.children.length);
 });