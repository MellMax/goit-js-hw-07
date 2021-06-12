
const totalCategories = document.querySelectorAll(".item");
console.log(`В списке ${totalCategories.length} категории.`);

const categoriesEl = [...totalCategories]
.map(categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`)
.join("\n");

console.log(categoriesEl);

// const categoryItems = document.querySelectorAll('ul#categories > .item');
// console.log(`В списке ${categoryItems.length} категории.`)
// Array.prototype.forEach.call(categoryItems, (el) => {
//     const title = el.querySelector('h2').innerHTML;
//     const itemsLength = el.querySelectorAll('li').length;
//     console.log(`Категория: ${title} / Количество элементов: ${itemsLength}`);
// });