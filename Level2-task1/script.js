function appendToResult(value) {
    document.getElementById("result").value += value;
  }
  
  function calculateResult() {
    let expression = document.getElementById("result").value;
    expression = expression.replace(/sqrt/g, "Math.sqrt");
    expression = expression.replace(/!/g, "factorial");
    const result = eval(expression);
    document.getElementById("result").value = result;
  }
  
  function clearResult() {
    document.getElementById("result").value = "";
  }
  
  function factorial(num) {
    if (num < 0) {
      return "Error: Factorial of a negative number is undefined.";
    } else if (num === 0 || num === 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = 2; i <= num; i++) {
        result *= i;
      }
      return result;
    }
  }
  
