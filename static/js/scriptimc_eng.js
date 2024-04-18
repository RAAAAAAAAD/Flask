let myImage = new Image();
let weight = prompt("Weight","");
let height = prompt("Height","");

let bmi = weight / (height * height);
bmi = Math.round(bmi);

let classification;
if (bmi < 18.5) {
    classification = "underweight";
    myImage.src = "static/images/imc_sotto.png";
    document.body.appendChild(myImage);
} else if (bmi >= 18.5 && bmi < 25) {
    classification = "normal weight";
    myImage.src = "static/images/imc_normo.png";
    document.body.appendChild(myImage);

} else if (bmi >= 25 && bmi < 30) {
    classification = "overweight";
    myImage.src = "static/images/imc_sovra.png";
    document.body.appendChild(myImage);
} else {
    classification = "obese";
    myImage.src = "static/images/imc_obeso.png";
    document.body.appendChild(myImage);
}
let messageResult = "Your BMI is " + bmi + ", classified as " + classification;
alert(messageResult);