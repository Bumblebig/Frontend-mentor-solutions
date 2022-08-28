"use strict";

const bill = document.querySelector("#amount");
const rates = document.querySelectorAll(".rate");
const people = document.querySelector(".people-num");
const custom = document.querySelector(".num-input");
const errorText = document.querySelector(".error");
const tipAmount = document.querySelector(".person-amount");
const total = document.querySelector(".total-amount");
const button = document.querySelector("button");
let tip, convBill, convPeople, values;
let condition = false;

const addAccess = function () {
  button.classList.remove("no-access");
  button.classList.add("access");
};

const removeAccess = function () {
  button.classList.remove("access");
  button.classList.add("no-access");
};

function containsAnyLetter(str) {
  return /[a-zA-Z]/.test(str); //returns true if the passed str contains letter
}

const tipsResult = function () {
  //after the user successfuly calculates the tip
  //pressing another rate wont trigger another calculation

  const tip = ((values / 100) * convBill) / convPeople;
  const totalTip = convBill / convPeople + tip;

  if (
    convBill !== "" &&
    !containsAnyLetter(convBill) &&
    convPeople !== "" &&
    !containsAnyLetter(convPeople)
  ) {
    tipAmount.textContent = `$${tip.toFixed(2)}`;
    total.textContent = `$${totalTip.toFixed(2)}`;
  }
};

bill.addEventListener("change", function (e) {
  convBill = Number(bill.value);
  if (
    typeof convBill === "number" &&
    convBill !== 0 &&
    convBill > 0 &&
    !containsAnyLetter(convBill) &&
    typeof convPeople === "number" &&
    convPeople !== 0 &&
    !containsAnyLetter(convPeople) &&
    convPeople > 0
  ) {
    condition = true;
    addAccess();
  } else {
    condition = false;
    removeAccess();
  }
});

people.addEventListener("keyup", function (e) {
  convPeople = Number(people.value);
  console.log(convPeople);
  if (
    typeof convPeople === "number" &&
    convPeople !== 0 &&
    convPeople > 0 &&
    !containsAnyLetter(convPeople) &&
    typeof convBill === "number" &&
    convBill !== 0 &&
    !containsAnyLetter(convBill) &&
    convBill > 0
  ) {
    condition = true;
    addAccess();

    errorText.style.display = "none";
  } else {
    condition = false;
    removeAccess();
  }

  if (convPeople === 0 && people.value !== "") {
    errorText.style.display = "block";
    people.classList.add("error-border");
    people.blur();
  } else {
    errorText.style.display = "none";
    people.classList.remove("error-border");
  }
});

rates.forEach((btn) => {
  values = Number(btn.textContent.slice(0, -1));
  btn.addEventListener("click", tipsResult);
});

custom.addEventListener("keypress", function (e) {
  let no = Number(custom.value);
  if (
    e.key === "Enter" &&
    custom.value !== 0 &&
    !containsAnyLetter(custom.value) &&
    custom.value !== "" &&
    typeof no === "number"
  ) {
    values = no;
    tipsResult();
  }
});

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (condition) {
    bill.value = people.value = custom.value = "";
    removeAccess();
    condition = false;
    tipAmount.textContent = "$0.00";
    total.textContent = "$0.00";
  } else {
    bill.value = bill.value;
    people.value = people.value;
    custom.value = custom.value;
    tipAmount.textContent = tipAmount.textContent;
    total.textContent = total.textContent;
  }
});
