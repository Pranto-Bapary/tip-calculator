/*--------------------------
 Selecting all elements
 --------------------------*/
const bill = document.getElementById('bill')
const tipButtons = document.querySelectorAll('.btn')
const customTipValue = document.getElementById('customTipBox')
const people = document.getElementById('tipPeople')
const tipAmountDisplay = document.getElementById('displayTipAmount')
const totalAmountDisplay = document.getElementById('displayTotalAmount')
let resetButton = document.querySelector('.btn-reset')
const errorMsg = document.querySelectorAll('.error')


/*--------------------------
 Tip Calculation Function
 ------------------------*/
function calculateTip(tip) {

    const tipAmount = parseFloat(bill.value) * parseFloat(tip)
    const finalTip = parseFloat(tipAmount) / parseFloat(people.value)
    const totalTip = parseFloat(tipAmount) + parseFloat(bill.value)
    const finalAmount = parseFloat(totalTip) / parseFloat(people.value)

    tipAmountDisplay.innerHTML = "$" + Number.parseFloat(finalTip).toPrecision(3)
    totalAmountDisplay.innerHTML = "$" + Number.parseFloat(finalAmount).toPrecision(4)

}

/*------------------------
 Reset Calculated Value
 -----------------------*/
resetButton.addEventListener('click', function () {
    tipAmountDisplay.innerHTML = "$0.00"
    totalAmountDisplay.innerHTML = "$0.00"
    bill.value = 0
    people.value = 0
    customTipValue.value = ""
})


/*------------------
 Form Validation
 -----------------*/
function validation() {

    if (bill.value == "" || bill.value == 0) {
        bill.focus()
        bill.style.borderColor = "red"
        errorMsg[0].innerHTML = "Can't be zero"
        return false

    } else if (bill.value < 0) {
        bill.focus()
        bill.style.borderColor = "red"
        errorMsg[0].innerHTML = "Can't be a negative number"
        return false

    } else {
        errorMsg[0].innerHTML = ""
        bill.style.borderColor = "var(--primary-color)"
    }

    if (people.value == 0 || people.value == "") {
        people.focus()
        people.style.borderColor = "red"
        errorMsg[1].innerHTML = "Can't be zero"
        return false

    } else if (people.value < 0) {
        people.focus()
        people.style.borderColor = "red"
        errorMsg[1].innerHTML = "Can't be a negative number"
        return false

    } else {
        errorMsg[1].innerHTML = ""
        people.style.borderColor = "var(--primary-color)"
    }
}