function operation(type, a, b){
    if  (type === "add"){
        return a + b;
    } else if   (type === "subtract"){
        return a - b;
    } else if (type === "multiply"){
        return a * b;
    } else if (type === "divide"){
        return a / b;
    } else {
        return "Invalid operation type";
    }
};

console.log(operation("add", 5, 3));
console.log(operation("subtract", 10, 3));
console.log(operation("multiply", 5, 6));
console.log(operation("divide", 8, 2));
console.log(operation("modulus", 11, 3));