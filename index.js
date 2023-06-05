// Function to send the form data to a Google Script URL
function submitFormToGoogleScript(url) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Form submission successful
      console.log("Form submitted successfully!");
    } else {
      // Form submission failed
      console.error("Error submitting form.");
    }
  };

  // Get form values
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  // Construct the form data
  var formData = new FormData();
  formData.append("name", name);
  formData.append("age", age);
  formData.append("gender", gender);
  formData.append("email", email);
  formData.append("phone", phone);

  // Send the form data
  xhr.send(formData);
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    // Create a new table row
    var row = document.createElement("tr");
    var table = document.getElementById("friendTable").getElementsByTagName("tbody")[0];

    // Add friend information to the row
    row.innerHTML = "<td>" + name + "</td><td>" + age + "</td><td>" + gender + "</td><td>" + email + "</td><td>" + phone + "</td>";

    // Append the row to the table
    table.appendChild(row);

    // Clear form inputs
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";

    // Submit form data to Google Script URL
    submitFormToGoogleScript("https://script.google.com/macros/s/AKfycbyiPU7BDEIzOOQpTKJGPn0TFs-1X70hrtMvFpRmSSFUYwUtFJeD5AXemTnytusg3bCZ/exec");
  });
}); 
