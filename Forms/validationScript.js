    // JavaScript code for form validation
    function validateInput(input) {
        const regex = /^[a-zA-Z0-9]+$/;
      
        if (!regex.test(input.value)) {
          alert("Please enter a valid alphanumeric value.");
      
          return false;
        }
      
        return true;
      }
      
      document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const inputField = document.getElementById("inputField");
      
      
        if (!validateInput(inputField)) {
      
          return;
        }
      
        alert("The input value is valid.");
      });
      
      // Prevent form from submitting
  
        // Retrieve the input field value
  
        // Regular expression pattern for alphanumeric input
  
        // Check if the input value matches the pattern
  
          // Valid input: display confirmation and submit the form
  
          // Invalid input: display error message
  