console.log("นี่คือโปรแกรมคำนวณใบเสร็จ")

const SENTINEL = "quit";
let count = 0
let total = 0
let user_input = prompt("Enter a price (quit to exit) : ")

while (user_input !== SENTINEL) {
    let price = parseFloat(user_input);

    if (!isNaN(price) && price >= 0) { // isNan = is not a number, ! = not , && = and
        count++;
        total += price

        console.log("สินค้าชิ้นที่ " + count + " ราตา " + total)

    }
}  