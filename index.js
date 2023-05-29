// Function to generate the text file content
function generateTextFileContent() {
  var tableRows = document.querySelectorAll("#friendTable tbody tr");
  var content = "";

  // Add table header row
  var headerCells = document.querySelectorAll("#friendTable thead th");
  for (var i = 0; i < headerCells.length; i++) {
    content += headerCells[i].textContent + "\t"; // Separate values with tabs
  }
  content += "\n"; // Add new line after the header row

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

// Function to prompt the user to save the text file
function saveTextFile(content, filename) {
  var element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
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

  document.getElementById("saveButton").addEventListener("click", function() {
    var content = generateTextFileContent();
    var filename = "friend_registry.txt";
    saveTextFile(content, filename);
  });
});
