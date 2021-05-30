// Завдання 1
// Написати розв’язок нижче описаного завдання (по одному рядку коду на кожний пункт)
// Створіть змінну color.
// Присвойте їй значення «red».
// Змініть значення змінної color на «blue».
// Створіть змінну newColor і скопіюйте в неї значення змінної color.
// Вивести значення змінної newColor з допомогою команди console.log().

let color = "red"
color = "blue"
let newColor = color

console.log(newColor);


// Завдання 2
// Написати програму яка видає користувачу ввести число. Після введення числа вистрибує алерт з оголошенням пори року до якої відноситься число (номер місяця) що ввів користувач. Якщо число не входить в діапазон від 1 до 12 тоді виводить що такого місяця немає.

let getMonth = (monthNumber) => {
    let result;
    switch (monthNumber) {
        case 1:
            result = "January"
            break;
        case 2:
            result = "February"
            break;
        case 3:
            result = "March"
            break;
        case 4:
            result = "April"
            break;
        case 5:
            result = "May"
            break;
        case 6:
            result = "June"
            break;
        case 7:
            result = "July"
            break;
        case 8:
            result = "August"
            break;
        case 9:
            result = "September"
            break;
        case 10:
            result = "October"
            break;
        case 11:
            result = "November"
            break;
        case 12:
            result = "December"
            break;
        default:
            result = "Wrong input. Please, try using numbers ranged 1-12"
            break;
    }
    return result
}

alert(getMonth(parseInt(prompt("Please put the number: "),10)))


// Завдання 3
// Використовуючи цикл for створіть програму, що виводить в console.log() всі чотиризначні числа послідовності 1005 1010 1015 1020 … 10000.

let counter = () => {
    for (let index = 1005; index < 10001; index += 5) {
        console.log(index)        
    }
}

counter();


// Завдання 4
// Створіть тег div в html та задайте йому id з іменем box. Через javascript задайте цьому елементу стилі, а саме width, height, border, background.

let box = document.getElementById("box")
box.style = "\
    width: 200px;\
    height: 400px;\
    background: red;\
    border: solid rgb(233,23,23) 2px;\
"