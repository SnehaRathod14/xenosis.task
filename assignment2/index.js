let counterValue = 0;

function increment() {
    counterValue++;
    updateCounter();
}

function decrement() {
    if (counterValue > 0) {
        counterValue--;
        updateCounter();
    }
}

function reset() {
    counterValue = 0;
    updateCounter();
}

function updateCounter() {
    document.getElementById('counter-value').innerText = counterValue;
}
