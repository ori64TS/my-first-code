//generate random number
var randomNumber1 = Math.ceil(Math.random() * 1000);
var randomNumber2 = Math.ceil(Math.random() * 1000);
var randomNumber3 = Math.ceil(Math.random() * 75);
var randomNumber4 = Math.ceil(Math.random() * 10);

//seting up var-random numbers n1-n2
var n1 = randomNumber1;
var n2 = randomNumber2;
var sum1 = n1 + n2;
console.log("The sum of", n1, "and", n2, "is", sum1);

//seting up var-random numbers n3
var n3 = randomNumber3;
var sum2 = sum1 + n3;
console.log("The sum of", sum1, "and", n3, "is", sum2);

//seting up var-random numbers n4
var n4 = randomNumber4;
var sum3 = sum2 / n4;
console.log("The sum of", sum2, "and", n4, "is", sum3);

//console.log msgs of diffrent numbers
if (sum3 >= 1 && sum3 <= 200) {
    console.log("Checking 1 2 3");
}
if (sum3 >= 250 && sum3 <= 500) {
    console.log("BIG moment");
}
if (sum3 >= 200 && sum3 <= 250) {
    console.log("IDK");
}
if (sum3 >= 1 && sum3 <= 100) {
    console.log("good!");
}
if (sum3 >= 1 && sum3 <= 75) {
    console.log("exelent!!!");
}
if (sum3 >= 1 && sum3 <= 50) {
    console.log("rare moment!!!!");
}
if (sum3 >= 1 && sum3 <= 25) {
    console.log("unreal, impossible");
}
if (sum3 >= 250 && sum3 <= 500) {
    console.log("You really made it here fatass");
}

//seting up var X2 sum3 = sum 4
var sum4 = sum3 + sum3;

//console.log msgs of the last //seting up
if (sum4 >= 250 && sum4 <= 600) {
    console.log("BIG moment");
}
if (sum4 >= 250 && sum4 <= 600) {
    console.log("You really made it here fatass");
}
if (sum4 >= 250 && sum4 <= 600) {
    console.log("wow");
}
