
  document.addEventListener('DOMContentLoaded', function () {
    function appendToDisplay(value) {
      document.getElementById('display').value += value;
    }

    function clearDisplay() {
      document.getElementById('display').value = '';
    }

    function calculateResult() {
      var displayValue = document.getElementById('display').value;

      try {
        var result = eval(displayValue);
        document.getElementById('display').value = result;
      } catch (error) {
        document.getElementById('display').value = 'Error';
      }
    }

    // Attach event listeners to all buttons
    var buttons = document.querySelectorAll('.calculator button');
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var buttonText = button.innerText;
        if (buttonText === 'C') {
          clearDisplay();
        } else if (buttonText === '=') {
          calculateResult();
        } else {
          appendToDisplay(buttonText);
        }
      });
    });
  });

