function dis(value) {
      document.getElementById("screen").value += value;
}

// Function For Evaluation
function solve() {
      let x = document.getElementById("screen").value;
      let y = eval(x);
      document.getElementById("screen").value = y;
}

//Function For clearing the screen
function clr() {
      document.getElementById("screen").value = ""
}

//backspacing
function backspace() {
      let screen = document.getElementById("screen").value;
      document.getElementById("screen").value = screen.substring(0, screen.length - 1);
}