// All DOM selector
let calculateBtn = document.getElementById("totalCalBtn");
let income = document.getElementById("income");
let food = document.getElementById("food");
let rent = document.getElementById("rent");
let clothes = document.getElementById("clothes");
let totalExpense = document.getElementById("totalExpense");
let balance = document.getElementById("balance");
let save = document.getElementById("save");
let saveBtn = document.getElementById("saveBtn");
let saveammount = document.getElementById("saveammount");
let remainingAmmount = document.getElementById("remainingBalance");
// all addevent listeners
calculateBtn.addEventListener("click", function () {
  // checking validation
  if (
    income.value === "" ||
    income.value <= 0 ||
    food.value === "" ||
    food.value <= 0 ||
    rent.value === "" ||
    rent.value <= 0 ||
    clothes.value === "" ||
    clothes.value <= 0
  ) {
    alert("Please provide the valid number!");
    return;
  }
  if (expenses() > incomes()) {
    alert("Yoru expenses more than incomes");
    return;
  }
  totalExpense.innerText = expenses();
  balance.innerText = incomes() - expenses();
});
// save button click
saveBtn.addEventListener("click", function () {
  if (save.value < 0 || save.value == "") {
    alert("Please provide the valid number");
    return;
  }
  let totalSaveAmmount = (incomes() * saves()) / 100;
  saveammount.innerText = totalSaveAmmount;
  remainingAmmount.innerText =
    parseInt(balance.textContent) - parseInt(saveammount.innerText);
});
// total income calculator
function incomes() {
  let incomeValue = parseInt(income.value);
  return incomeValue;
}
// total expense calculator
function expenses() {
  let foodValue = parseInt(food.value);
  let rentValue = parseInt(rent.value);
  let clotheValue = parseInt(clothes.value);
  return foodValue + rentValue + clotheValue;
}
// total saves calculator
function saves() {
  let saveValue = parseInt(save.value);
  return saveValue;
}

// let calculateBtn = document.getElementById("totalCalBtn");
// calculateBtn.addEventListener("click", function () {
//   expenses("food");
// });
// function expenses(food,rent,clothes) {
//   let expentInput = document.getElementById(inputId);
//   console.log(expentInput);
// }
