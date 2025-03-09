const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, room: "A101", enrolled: 25, days: "MWF", instructor: "Dr. Smith" },
        { sectionNum: 2, room: "B202", enrolled: 30, days: "TTh", instructor: "Prof. Johnson" }
    ],
    
    enrollStudent: function(sectionNum) {
        const section = this.sections.find(sec => sec.sectionNum === sectionNum);
        if (section) {
            section.enrolled += 1;
            console.log(`Student enrolled in section ${sectionNum}. Total enrolled: ${section.enrolled}`);
            this.renderSections();
        } else {
            console.log(`Section ${sectionNum} not found.`);
        }
    },
    
    dropStudent: function(sectionNum) {
        const section = this.sections.find(sec => sec.sectionNum === sectionNum);
        if (section && section.enrolled > 0) {
            section.enrolled -= 1;
            console.log(`Student dropped from section ${sectionNum}. Total enrolled: ${section.enrolled}`);
            this.renderSections();
        } else {
            console.log(`Section ${sectionNum} not found or already empty.`);
        }
    },
    
    renderSections: function() {
        console.log("Rendering sections...");
    }
  };

  document.querySelector('#enrollStudent')
    .addEventListener('click', (e) => {
        const sectionNum = parseInt(document.querySelector('#sectionNumber').value);
        if (!isNaN(sectionNum)) {
            aCourse.enrollStudent(sectionNum);
        }
    });

document.querySelector('#dropStudent')
    .addEventListener('click', (e) => {
        const sectionNum = parseInt(document.querySelector('#sectionNumber').value);
        if (!isNaN(sectionNum)) {
            aCourse.dropStudent(sectionNum);
        }
    });

  aCourse.enrollStudent(1);