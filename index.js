let amountElement = document.getElementById("amountid")
let total = 0

function plus() {
    total = total + 1
    amountElement.innerHTML = total
}
function minus() {
    total= total - 1
    amountElement.innerHTML = total
}