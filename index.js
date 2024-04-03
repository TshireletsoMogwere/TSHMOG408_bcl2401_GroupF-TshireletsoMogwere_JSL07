document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
    // Hide the modal initially
    modal.style.display = 'none';
  
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName'); 
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput.value; // Fallback to "a course" if no input
  
      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // 🚨 Generate certificate content dynamically
      certificateContent.innerHTML = `
      <h1>Certificate of Achievement</h1>
      <p>This is to certify that<p>
      <h3>${studentName}</h3>
      <p>has almost completed the</p>
      <h3>${personalMessage}</p>
      <p>with legendary preserverance and world-class assery for never giving up<p>
      <h3>${courseName}</h3>
      <img src="logo.png" alt="steal" style="margin-top:20px; max-height:100px; width:100px">
    `;

    //append personalised message after the logo
    const logo = certificateContent.querySelector('img');
    const messageParagraph = document.createElement('p');
    messageParagraph.textContent = personalMessage;
    certificateContent.insertBefore(messageParagraph, logo.nextSibling);  
    
    
      //  Display the modal
      modal.style.display = 'block';
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
  
    });
  });
  