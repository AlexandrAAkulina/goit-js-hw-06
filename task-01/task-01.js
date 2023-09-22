const categoriesItem = document.querySelector("#categories");
const categoriesLength = categoriesItem.children.length;

console.log(`Number of categories: ${categoriesLength}`);

const titleText = document.querySelectorAll(".item");

titleText.forEach((item) => {
    console.log(`Category: `, item.firstElementChild.textContent);
    console.log(`Elements: `, item.lastElementChild.children.length);
});