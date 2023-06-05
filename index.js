function submitFormToGoogleScript(url) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      console.log("Form submitted successfully!");
    } else {
      console.error("Error submitting form.");
    }
  };

  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  var formData = new FormData();
  formData.append("name", name);
  formData.append("age", age);
  formData.append("gender", gender);
  formData.append("email", email);
  formData.append("phone", phone);

  xhr.send(formData);
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    var row = document.createElement("tr");
    var table = document.getElementById("friendTable").getElementsByTagName("tbody")[0];

    row.innerHTML =
      "<td>" +
      name +
      "</td><td>" +
      age +
      "</td><td>" +
      gender +
      "</td><td>" +
      email +
      "</td><td>" +
      phone +
      "</td>";

    table.appendChild(row);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  });

  document.getElementById("submitTableButton").addEventListener("click", function () {
    var tableContent = generateTextFileContent();
    submitFormToGoogleScript(
      "https://script.google.com/macros/s/AKfycbyiPU7BDEIzOOQpTKJGPn0TFs-1X70hrtMvFpRmSSFUYwUtFJeD5AXemTnytusg3bCZ/exec",
      tableContent
    );
  });
}); 
