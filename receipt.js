console.log("----------------------------------------")
console.log("ใบเสร็จของร้าน สถาพร เถ้าแก่น้อย")
console.log("----------------------------------------")

const SENTINEL = "quit";
let count = 1
let total = 0
let user_input = prompt("กรอกราคาสินค้าชิ้นที่ " + count + " (พิมพ์ quit เพื่อออก) : ")

while (user_input !== SENTINEL) {
    let price = parseFloat(user_input);

    if (!isNaN(price) && price >= 0) { // isNan = is not a number, ! = not , && = and    
        total += price

        console.log("สินค้าชิ้นที่ : " + count)
        console.log("ราคาของสินค้า : " + price)
        
        count ++;
    } else {
        alert("กรุณาป้อนราคาที่ถูกต้อง")
    }

    user_input = prompt("กรอกราคาสินค้าชิ้นที่ " + count + " (พิมพ์ quit เพื่อออก) : ")
}  
console.log("----------------------------------------")
console.log("ยอดรวม : " + total)