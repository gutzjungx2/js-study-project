let number = prompt("กรอกเลขที่ต้องการซื้อด้านล่าง")
let prize_number = Math.floor(Math.random() * 100)

if (number == prize_number) {
    alert("ยินดีด้วย มึงถูกรางวัล")
} else {
    console.log("เสียใจด้วยพวก มึงไม่ถูกรางวัล")
    console.log("เลขที่ออกคือ" + " " + prize_number)
}
