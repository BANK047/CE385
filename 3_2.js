function calculateBMI(weight,height){
    const BaseBMI = weight/(height**2);
    const bmifix = BaseBMI.toFixed(2);
    
    let category = "";
    if (BaseBMI < 18.5){
        category="ผอม";
    } else if (BaseBMI >= 18.5 && BaseBMI < 25 ){
        category="ปกติ";
    } else if (BaseBMI >= 25 && BaseBMI < 30 ){
        category="อ้วน";
    } else if (BaseBMI >= 30){
        category="อ้วนมาก";
    }
    return{
        bmi: bmifix,
        category: category
    };
};
console.log(calculateBMI(70,1.75));
console.log(calculateBMI(50,1.60));
console.log(calculateBMI(90,1.70));