let input = prompt("1. Введіть щось");
let input1 = prompt("2. Введіть щось");

if (input && input1) {
    alert("Обидва поля заповнені");
    console.log("Обидва поля заповнені");
} else {
    alert("Не всі поля заповнені");
    console.log("Не всі поля заповнені");
}

let number = parseFloat(prompt("1. Введіть будь-яке число"));
let number1 = parseFloat(prompt("2. Введіть будь-яке число"));

if (number + number1 > 10) {
    alert("Сума більша за 10");
} else {
    alert("Сума менша або дорівнює 10");
}

let text = prompt("Введіть щось");
if (text.includes("JavaScript")) {
    alert("Текст містить слово JavaScript");
} else {
    alert("Текст не містить слово JavaScript");
}

