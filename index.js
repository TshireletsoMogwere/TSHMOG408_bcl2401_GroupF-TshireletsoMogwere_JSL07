//executes when DOMCL has completely loaded and parsed
document.addEventListener('DOMContentLoaded', function () { 
    //retrieves elements from HTML 
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
    // Hide the modal initially
    modal.style.display = 'none';
  
    //prevents default submission from occuring
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName'); 
     
      //retrieves values entered by user 
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput.value ? courseNameInput.value: "a course"; // Fallback to "a course" if no input
  
      //checks if the variables are empty or contain only whitespace characters
      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields');
        return; //stops further execution of script
      }
  
      // 🚨 Generate certificate content dynamically
      certificateContent.innerHTML = `
      <h1>Certificate of Achievement</h1>
      <p>This is to certify that<p>
      <h3>${studentName}</h3>
      <p>has almost completed the</p>
      <h3>${courseName}</h3>
      <p>with legendary preserverance and world-class assery for never giving up<p>
      <img src="logo.png" alt="steal" style="margin-top:20px; max-height:100px; width:100px">
      <p>${personalMessage}</p>
    `;
    
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
  