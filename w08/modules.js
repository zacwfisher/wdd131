import aCourse from "./Courses.mjs";

document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.changeEnrollment(sectionNum);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.changeEnrollment(sectionNum, false);
});
  
  document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum);
  });
  document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum, false);
  });
  
  setCourseInfo(aCourse);
  renderSections(aCourse.sections);