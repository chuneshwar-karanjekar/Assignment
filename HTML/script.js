let display = document.getElementById('input-display');
    let currentInput = '';

    function Display(value) {
      currentInput += value;
      display.value = currentInput;
    }

    function clearDisplay() {
      currentInput = '';
      display.value = '';
    }

    function calculate() {
      try {
        currentInput = eval(currentInput);
        display.value = currentInput;
      } catch (error) {
        display.value = 'Error';
      }
    }