function calculateAge() {
    const dob = document.getElementById("dob").value;
    const result = document.getElementById("result");
  
    if (!dob) {
      result.innerHTML = "❗ Please select your date of birth!";
      return;
    }
  
    const dobDate = new Date(dob);
    const now = new Date();
  
    if (dobDate > now) {
      result.innerHTML = "❗ Date of birth can't be in the future!";
      return;
    }
  
    let years = now.getFullYear() - dobDate.getFullYear();
    let months = now.getMonth() - dobDate.getMonth();
    let days = now.getDate() - dobDate.getDate();
  
    if (days < 0) {
      months--;
      days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    const diffMs = now - dobDate;
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const totalHours = Math.floor(diffMs / (1000 * 60 * 60));
    const totalMinutes = Math.floor(diffMs / (1000 * 60));
  
    result.innerHTML = `
      <strong>📅 Age:</strong> ${years} Years, ${months} Months, ${days} Days<br><br>
      <strong>🕒 Total Time Lived:</strong><br>
      ➤ ${totalDays} Days<br>
      ➤ ${totalHours} Hours<br>
      ➤ ${totalMinutes} Minutes
    `;
  }
  
