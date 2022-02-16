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
  totalExpense.innerText = expenses();
  balance.innerText = incomes() - expenses();
});
saveBtn.addEventListener("click", function () {
  saveammount.innerText = (incomes() * saves()) / 100;
  remainingAmmount.innerText =
    parseInt(balance.textContent) - parseInt(saveammount.innerText);
});
function incomes() {
  let incomeValue = parseInt(income.value);
  return incomeValue;
}
function expenses() {
  let foodValue = parseInt(food.value);
  let rentValue = parseInt(rent.value);
  let closeValue = parseInt(clothes.value);
  return foodValue + rentValue + closeValue;
}
function saves() {
  if (save.value <= 0 || save.value === "") {
    alert("j");
    return save.value;
  } else {
    let saveValue = parseInt(save.value);
    return saveValue;
  }
}

// let calculateBtn = document.getElementById("totalCalBtn");
// calculateBtn.addEventListener("click", function () {
//   expenses("food");
// });
// function expenses(food,rent,clothes) {
//   let expentInput = document.getElementById(inputId);
//   console.log(expentInput);
// }
