console.log("--------------- Operator List ----------------");
console.log(" ' + ' (for plus number to number)");
console.log(" ' - ' (for minus number from number)");
console.log(" ' x ' (for multiply number to number)");
console.log(" ' / ' (for divide number from number)");

alert("This is an easy calculator");

let inp1 = prompt("Enter first number:");
let inp2 = prompt("Enter second number:");
let operator = prompt("Enter operator (+, -, x, /):");

let num1 = parseFloat(inp1);
let num2 = parseFloat(inp2);
let result_output = "The result is: ";

if (isNaN(num1) || isNaN(num2)) {
    alert("Error: Please enter valid numbers!");
} else {
    if (operator == "+") {
        var result = num1 + num2;
        alert(result_output + result);
    } else if (operator == "-") {
        var result = num1 - num2;
        alert(result_output + result);
    } else if (operator == "x") {
        var result = num1 * num2;
        alert(result_output + result);
    } else if (operator == "/") {
        if (num2 == 0) {
            alert("Error: ZeroDivision Error!");
        } else {
            var result = num1 / num2;
            alert(result_output + result);
        }
    } else if (operator == "^") {
        var result = num1 ** num2
        alert(result_output + result);
    } else {
        alert("Please enter a valid operator (+, -, x, /)");
    }
}
