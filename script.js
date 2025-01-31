document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector("button"); // Assume the button is there to create the table
  
  button.addEventListener("click", createTable);

  // Function to create the table
  function createTable() {
    // Prompt for number of rows and columns
    const rows = prompt("Input number of rows");
    const cols = prompt("Input number of columns");

    // Ensure valid input
    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
      alert("Please enter valid positive numbers for rows and columns.");
      return;
    }

    // Get the table element by ID
    const table = document.getElementById("myTable");

    // Clear any existing table content
    table.innerHTML = "";

    // Loop through to create rows and columns
    for (let i = 0; i < rows; i++) {
      const row = document.createElement("tr"); // Create a new row

      for (let j = 0; j < cols; j++) {
        const cell = document.createElement("td"); // Create a new cell
        cell.textContent = `Row-${i} Column-${j}`; // Set text for the cell
        row.appendChild(cell); // Append the cell to the row
      }

      table.appendChild(row); // Append the row to the table
    }
  }
});
