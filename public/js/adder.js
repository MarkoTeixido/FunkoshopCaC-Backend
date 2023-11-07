const add = document.querySelector("#add");
const subtrack = document.querySelector("#subtrack");
const quantity = document.querySelector("#quantity");

add.addEventListener(
  "click",
  () => (quantity.value = Number(quantity.value) + 1)
);
subtrack.addEventListener("click", () => {
  if (quantity.value > 0) {
    quantity.value = Number(quantity.value) - 1;
  }
});
