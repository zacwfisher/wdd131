document.addEventListener("DOMContentLoaded", () => {
    let participantCount = 1;
  
    const addButton = document.getElementById("add");
    const form = document.querySelector("form");
    const summary = document.getElementById("summary");
  
    function participantTemplate(count) {
      return `
        <section class="participant${count}">
          <p>Participant ${count}</p>
          <div class="item">
            <label for="fname${count}">First Name<span>*</span></label>
            <input id="fname${count}" type="text" name="fname${count}" required />
          </div>
          <div class="item">
            <label for="activity${count}">Activity #<span>*</span></label>
            <input id="activity${count}" type="text" name="activity${count}" required />
          </div>
          <div class="item">
            <label for="fee${count}">Fee ($)<span>*</span></label>
            <input id="fee${count}" type="number" name="fee${count}" required />
          </div>
          <div class="item">
            <label for="date${count}">Desired Date <span>*</span></label>
            <input id="date${count}" type="date" name="date${count}" required />
          </div>
          <div class="item">
            <label for="grade${count}">Grade</label>
            <select id="grade${count}" name="grade${count}">
              <option value="1">1st</option>
              <option value="2">2nd</option>
              <option value="3">3rd</option>
              <option value="4">4th</option>
              <option value="5">5th</option>
              <option value="6">6th</option>
              <option value="7">7th</option>
              <option value="8">8th</option>
              <option value="9">9th</option>
              <option value="10">10th</option>
              <option value="11">11th</option>
              <option value="12">12th</option>
            </select>
          </div>
        </section>
      `;
    }
  
    addButton.addEventListener("click", () => {
      participantCount++;
      const participantHTML = participantTemplate(participantCount);
      const participantsFieldset = document.querySelector(".participants");
      participantsFieldset.insertAdjacentHTML("beforebegin", participantHTML);
    });
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const totalFees = calculateTotalFees();
  
      const adultName = document.getElementById("adult_name").value;
  
      form.style.display = "none";
      summary.style.display = "block";
  
      summary.innerHTML = successTemplate({
        name: adultName,
        participants: participantCount,
        totalFees: totalFees,
      });
    });
  
    function calculateTotalFees() {
      let feeElements = document.querySelectorAll("[id^=fee]");
      feeElements = [...feeElements];
      return feeElements.reduce((sum, feeElement) => sum + parseFloat(feeElement.value || 0), 0);
    }
  
    function successTemplate(info) {
      return `
        <p>Thank you ${info.name} for registering.</p>
        <p>You have registered ${info.participants} participants and owe $${info.totalFees} in fees.</p>
      `;
    }
  });
  