
//Expense and balance calculation=================================
document.getElementById("calculate").addEventListener("click", function () {
    var income = document.getElementById("myIncome").value;
    let food = document.getElementById("food").value;
    let rent = document.getElementById("rent").value;
    let cloths = document.getElementById("cloths").value;

    //summation total expense
    let sum = parseInt(food) + parseInt(rent) + parseInt(cloths);
    const total = document.getElementById("totalExpense");
    total.innerText = sum;

    const sumBalance = parseInt(income) - sum;
    const totalBalance = document.getElementById("balance");
    totalBalance.innerText = sumBalance;


    //clear input data
    income.value = '';
    savingsAmount.value = '';
    food.value = '';
    rent.value = '';
    cloths.value = '';

})
// saving amount==========================
document.getElementById("saveAmount").addEventListener("click", function () {
    var income = document.getElementById("myIncome").value;
    let savingsAmount = document.getElementById("savingsAmount").value;
    let balance = document.getElementById("balance").innerText;
    //Find Savings Amount
    let savingsSum = parseInt(income) / 100 * savingsAmount;
    const savingAmt = document.getElementById("saveingAmt");
    savingAmt.innerText = savingsSum;
    //Find Savings Amount  

    // finding remaining balance
    let remainingsum = balance - savingsSum;
    const remaingAmt = document.getElementById("remaingBalance");
    remaingAmt.innerText = remainingsum;
    // finding remaining balance

    //clear input data
    income.value = '';
    savingsAmount.value = '';
    food.value = '';
    rent.value = '';
    cloths.value = '';
})










