function generateTableContent() {
  var tableRows = document.querySelectorAll("#friendTable tbody tr");
  var content = "";

  // Loop through table rows and extract values
  for (var i = 0; i < tableRows.length; i++) {
    var cells = tableRows[i].querySelectorAll("td");
    for (var j = 0; j < cells.length; j++) {
      content += cells[j].textContent + "\t"; // Separate values with tabs
    }
    content += "\n"; // Add new line after each row
  }

  return content;
}

function submitFormToGoogleScript(tableContent) {
  var url = "https://script.google.com/macros/s/AKfycbyiPU7BDEIzOOQpTKJGPn0TFs-1X70hrtMvFpRmSSFUYwUtFJeD5AXemTnytusg3bCZ/exec";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Form submission failed.");
    }
  };
  xhr.send("tableContent=" + encodeURIComponent(tableContent));
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
  });

  document.getElementById("submitTableButton").addEventListener("click", function() {
    var tableContent = generateTableContent();
    submitFormToGoogleScript(tableContent);
  });
});
