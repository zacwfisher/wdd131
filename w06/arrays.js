const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`; //the html string made from step
}

const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join(); // set the innerHTML

const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}
const gpaPoints = grades.map(convertGradeToPoints);

const pointsTotal = gpaPoints.reduce(function (total,item) {
    return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shortWords = words.filter(function (word) {
    return word.length < 6;
});

const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);