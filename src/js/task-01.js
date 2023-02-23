const numberCategory = document.querySelectorAll("li.item");
const count = numberCategory.length;
console.log(`Numbers of category: ${count}`);

numberCategory.forEach((category) => {
  const header = category.querySelector("h2");
  const items = category.querySelectorAll("li");
  console.log(header.textContent, items.length);
});
