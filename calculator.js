const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equals = document.getElementById("equals");
const ac = document.getElementById("ac");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        display.value += btn.textContent;
    });
});

ac.addEventListener("click", () => {
    display.value = "";
});

equals.addEventListener("click", () => {
    if (display.value.trim() !== "") {
        try {
            display.value = Function('"use strict";return (' + display.value + ')')();
        } catch {
            display.value = "Error";
        }
    }
});
