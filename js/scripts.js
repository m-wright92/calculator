//  Business logic:

function add(number1, number2) {
  return number1 + number2;
  }

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

//  User interface logic

$(document).ready(function() {
  $("#operator").change(function(event) {
    event.preventDefault();
    const operator = $("#operator").val();
    $("button").text(operator);
  });

  $("form#math").submit(function(event) {
    event.preventDefault();
    let operator = $("#operator").val();
    const number1 = parseInt($("#input1").val());
    const number2 = parseInt($("#input2").val());
    const num1 = number1.toString();
    const num2 = number2.toString();
    let result;
    if (operator === "Add") {
      result = add(number1, number2);
      operator = "+";
    } else if (operator === "Subtract") {
      result = subtract(number1, number2); 
      operator = "-";
      }else if (operator === "Multiply") {
        result = multiply(number1, number2);
        operator = "*";
      } else if (operator === "Divide") {
        result = divide(number1, number2);
        operator = "/"
      }
    $("#output").text("Result: " + num1 + " " + operator + " " + num2 + " = " + result);
  });
});

