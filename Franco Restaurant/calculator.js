function addToDisplay(value) {
    document.getElementById("display").value += value;
  }

  function clearDisplay() {
    document.getElementById("display").value = "";
  }

  function calculateResult() {
    var input = document.getElementById("display").value;
    var result = eval(input);
    document.getElementById("display").value = result;
  }

  function copyToClipboard() {
    var display = document.getElementById("display");
    display.select();
  }