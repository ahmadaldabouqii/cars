confirm("Welcome to My web page Our Students!");

var StudentName = prompt("Enter Your Name Please..");

var mark_1 = prompt("Enter Your Mark 1 ..");
var mark_2 = prompt("Enter Your Mark 2 ..");
var mark_3 = prompt("Enter Your Mark 3 ..");
var mark_4 = prompt("Enter Your Mark 4 ..");
var mark_5 = prompt("Enter Your Mark 5 ..");

var convertedMark_1 = parseInt(mark_1);
var convertedMark_2 = parseInt(mark_2);
var convertedMark_3 = parseInt(mark_3);
var convertedMark_4 = parseInt(mark_4);
var convertedMark_5 = parseInt(mark_5);

var avg = (convertedMark_1 + convertedMark_2 + convertedMark_3 + convertedMark_4 + convertedMark_5) / 5;
// console.log("your avg is.. " + avg);
var element = document.getElementById('price');
var nameElement = document.getElementById('theName');
alert("Here we go...");

if (avg >= 50 && avg <= 70) {
    nameElement.innerText = "Your Name Is " + StudentName;
    element.innerText = "the avg is: " + avg + "  your average is acceptable!";
}

else if (avg >= 71 && avg <= 80) {
    nameElement.innerText = "Your Name Is " + StudentName;
    element.innerText = "the avg is: " + avg + "  your average is Good!";
}

else if (avg >= 81 && avg <= 90) {
    nameElement.innerText = "Your Name Is " + StudentName;
    element.innerText = "the avg is: " + avg + "  your average is Very Good!";
}

else if (avg >= 91 && avg <= 99) {
    nameElement.innerText = "Your Name Is " + StudentName;
    element.innerText = "the avg is: " + avg + "  your average is Excellent!";

}
else {
    nameElement.innerText = "Your Name Is " + StudentName;
    element.innerText = "you are Faild, you need to work hard!";
}



