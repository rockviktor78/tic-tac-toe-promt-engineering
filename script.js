let fields = [null, "circle", "cross", null, null, null, null, null, null];

function init() {
  render();
}

function render() {
  const contentDiv = document.getElementById("content");

  let tableHtml = "<table>";
  for (let i = 0; i < 3; i++) {
    tableHtml += "<tr>";
    for (let j = 0; j < 3; j++) {
      const index = i * 3 + j;
      let symbol = "";
      if (fields[index] === "circle") {
        symbol = "O";
      } else if (fields[index] === "cross") {
        symbol = "X";
      }
      tableHtml += `<td>${symbol}</td>`;
    }
    tableHtml += "</tr>";
  }
  tableHtml += "</table>";

  contentDiv.innerHTML = tableHtml;
}
