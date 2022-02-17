var income = document.getElementById("myIncome").value;
var food = document.getElementById("food").value;
var rent = document.getElementById("rent").value;
var cloths = document.getElementById("cloths").value;

let sum = parseFloat(food) + parseFloat(rent) + parseFloat(cloths);


console.log(sum);

//Expense and balance calculation=================================
document.getElementById("calculate").addEventListener("click", function () {
    var income = document.getElementById("myIncome").value;
    let food = document.getElementById("food").value;
    let rent = document.getElementById("rent").value;
    let cloths = document.getElementById("cloths").value;

    let sum = parseFloat(food) + parseFloat(rent) + parseFloat(cloths);
    const total = document.getElementById("t");
    total.innerText = sum;

    const summ = parseInt(income) - sum;
    const totall = document.getElementById("balance");
    totall.innerText = summ;

    food.value = '';
    rent.value = 'dfg';
    cloths.value = '';

})
// saving amount==========================
document.getElementById("saveAmount").addEventListener("click", function () {
    var income = document.getElementById("myIncome").value;
    let savingsAmount = document.getElementById("savingsAmount").value;
    let balance = document.getElementById("balance").innerText;
    let savingsSum = parseInt(income) / 100 * savingsAmount;
    const savingAmt = document.getElementById("saveingAmt");
    savingAmt.innerText = savingsSum;


    let remainingsum = balance - savingsSum;
    const remaingAmt = document.getElementById("remaingBalance");
    remaingAmt.innerText = remainingsum;

    food.value = '';
    rent.value = '';
    cloths.value = '';

})










