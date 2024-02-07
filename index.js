let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let firstInput = true;
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    if (count == 0) return;
    let countStr = count
    if (firstInput) {
        saveEl.textContent += countStr
    } else {
        saveEl.textContent += " - " + countStr
    }
    firstInput = false
    countEl.textContent = 0
    count = 0
}

function reset() {
    count = 0;
    firstInput = true;
    saveEl.textContent = "Previous entries: ";
}