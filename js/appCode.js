confirm("Welcome to My web page Our Students! please enter correct answer");

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

while (avg >= 50 && avg <= 99) {

    if (avg >= 50 && avg <= 70) {
        nameElement.innerText = "Your Name Is " + StudentName;
        element.innerText = "Your avg is: " + avg + " >>   your average is acceptable!";
        document.getElementById("image").src = "https://www.thecampuscurrent.com/wp-content/uploads/2020/04/passfail.jpg";
    }
    else if (avg >= 71 && avg <= 80) {
        nameElement.innerText = "Your Name Is " + StudentName;
        element.innerText = "Your avg is: " + avg + " >>   your average is Good!";
        document.getElementById("image").src = "https://harkeraquila.com/wp-content/uploads/2018/02/IMG_7679-2-900x585.jpg";
    }
    else if (avg >= 81 && avg <= 90) {
        nameElement.innerText = "Your Name Is " + StudentName;
        element.innerText = "Your avg is: " + avg + " >>   your average is Very Good!";
        document.getElementById("image").src = "https://previews.123rf.com/images/prakasit/prakasit1412/prakasit141202034/34703110-tick-placed-you-select-choice-excellent-very-good-good-average-poor-check-very-good.jpg";
    }
    else if (avg >= 91 && avg <= 99) {
        nameElement.innerText = "Your Name Is " + StudentName;
        element.innerText = "Your avg is: " + avg + " >>   your average is Excellent!";
        document.getElementById("image").src = "https://previews.123rf.com/images/prakasit/prakasit1412/prakasit141202051/34703136-tick-placed-you-select-choice-excellent-very-good-good-average-poor-check-excellent.jpg";
    }
    else {
        nameElement.innerText = "Your Name Is " + StudentName;
        element.innerText = "You are Faild, you need to work hard!";
        document.getElementById("image").src = "https://miro.medium.com/max/315/0*ivYaybHtR-rrJh6i";
    }
    break;
}