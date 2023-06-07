const billInput = document.querySelector("#billInput");
const tipInput = document.querySelector("#tipInput");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const perPerson = document.querySelector(".per-person");
const numberPeople = document.querySelector(".people");
const reset = document.querySelector(".reset");


people = Number(numberPeople.innerHTML)
console.log(people)
function calculateBill() {
    bill = Number(billInput.value);
    console.log(bill);
    tip = Number(tipInput.value / 100);
    console.log(tip);


    tipTotal = bill * tip;
    console.log(tipTotal)

    billTotal = bill + tipTotal;
    console.log(billTotal)

    billing = billTotal / people;
    perPerson.innerHTML = `$${billing.toFixed(2)}`

}
billInput.addEventListener("keypress",calculateBill());
plus.addEventListener("click",() => {
    people += 1;
    numberPeople.innerHTML = people
    console.log(people)

    calculateBill()
});
minus.addEventListener("click",() => {
    if(people <= 1){
        throw "enter a valid number";
        return
    }else{
        people -= 1
    }
    numberPeople.innerHTML = people
    console.log(people)

    calculateBill()
});

reset.addEventListener("click", () => {
    bill = "0.00"
    
})