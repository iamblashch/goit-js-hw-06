const arrayCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${arrayCategories.length}`);

arrayCategories.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elemets: ${item.lastElementChild.children.length}`)
})