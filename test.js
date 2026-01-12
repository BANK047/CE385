// W1.1
//สร้างตัวแปรเก็บข้อมูล เพื่อรอคำสั่งในการแสดงผล
let first_name = "Welt"
let last_name = "Yang"
let full_name = first_name + " " + last_name
let age = "50 year"
let branch = "Film and digital media"

//คำสั่งแสดงผลโดยเรียกตัวแปรให้นำค่ามาแสดงผล
console.log("Name: ", full_name);
console.log("Age: ", age);
console.log("Branch: ", branch);

console.log("-------------------------------------------------------------")
// W1.2
let myString = "Arrrrrrrrrrr"
let myNumber = 1024
let myBoolean = false
let myNull = null
let myUndefined = undefined

console.log("myString:",myString,"- Type:",typeof myString);
console.log("myNumber:",myNumber,"- Type",typeof myNumber);
console.log("myBoolean:",myBoolean,"- Type",typeof myBoolean);
console.log("myNull:",myNull,"- Type",typeof myNull);
console.log("myUndefined:",myUndefined,"- Type",typeof myUndefined)

console.log("-------------------------------------------------------------")
// W1.3
let math = 85
let sci = 72
let eng = 90

sum_pt = math+sci+eng
everage_pt = sum_pt/3
everage_pt_eq = everage_pt >= 80

console.log("Sum: ",sum_pt);
console.log("Everage_Score: ",everage_pt);
console.log("Everage_Score >= 80: ",everage_pt_eq);

console.log("-------------------------------------------------------------")
// W1.4
let username = "admin"
let password = "1234"
let age_s = 18

if (username === "admin" && password === "1234" && age_s >=18){
    console.log("Login Complete");
}
else if (username != "admin" || password != "1234" && age_s >=18){
    console.log("User of Password are Wrong!");
}
else if (age_s <18){
    console.log("# Not Old Enough #");
}

console.log("---Other Test ---");

let username1 = "Zhuye"
let password1 = "1234"
let age_s1 = 18

if (username1 === "admin" && password1 === "1234" && age_s1 >=18){
    console.log("Test 2: Login Complete");
}
else if (username1 != "admin" || password1 != "1234" && age_s1 >=18){
    console.log("Test2: User of Password are Wrong!");
}
else if (age_s1 <18){
    console.log("Test 2: # Not Old Enough #");
}

let username2 = "admin"
let password2 = "1234"
let age_s2 = 14

if (username2 === "admin" && password2 === "1234" && age_s2 >=18){
    console.log("Test 3: Login Complete");
}
else if (username2 != "admin" || password2 != "1234" && age_s2 >=18){
    console.log("Test3: User of Password are Wrong!");
}
else if (age_s2 <18){
    console.log("Test 3: # Not Old Enough #");
}