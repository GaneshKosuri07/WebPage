document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
  
    let errorMessage = "";
    
    // Check if password and confirm password match
    if (password !== confirmPassword) {
      errorMessage = "Passwords do not match.";
    }
  
    // Simple email validation
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
      errorMessage = "Please enter a valid email address.";
    }
  
    // Display error message if any
    if (errorMessage !== "") {
      document.getElementById("error-message").textContent = errorMessage;
    } else {
      document.getElementById("error-message").textContent = "";
      alert("Registration successful!");
    }
  });
  