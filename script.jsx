let display = document.getElementById('display');
    let currentInput = '';

    function appendToDisplay(value) {
      currentInput += value;
      display.value = currentInput;
    }

    function clearDisplay() {
      currentInput = '';
      display.value = '';
    }

    function deleteLastCharacter() {
  currentInput = currentInput.slice(0, -1);
  display.value = currentInput;
}

// function DEL(){
 
//   this.currentInput = this.currentInput.toString().slice(0, -1)
// }

    function calculateResult() {
      try {
        currentInput = eval(currentInput);
        display.value = currentInput;
      } catch (error) {
        display.value = 'Error';
      }
    } 