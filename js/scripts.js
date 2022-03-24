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
    $("button#simple").text(operator);
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


function calc() {
  let operator = $("#newOperator").val();
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
    }


    $("button#add").click(function() {
      $("#newOutput").append("+");
    });
    $("button#subtract").click(function() {
      $("#newOutput").append("-");
    });
    $("button#multiply").click(function() {
      $("#newOutput").append("*");
    });
    $("button#divide").click(function() {
      $("#newOutput").append("/");
    });

  $("button#add, button#subtract, button#multiply, button#divide").click(function() {
    let operator = $("#newOutput").text().slice(-1);
    if (operator === "+") {
      console.log("add");
    } else {
      console.log(operator);
    }
  });

  $("button#one").click(function() {
    $("#newOutput").append("1");
  });
  $("button#two").click(function() {
    $("#newOutput").append("2");
  });
  $("button#three").click(function() {
    $("#newOutput").append("3");
  });
  $("button#four").click(function() {
    $("#newOutput").append("4");
  });
  $("button#five").click(function() {
    $("#newOutput").append("5");
  });
  $("button#six").click(function() {
    $("#newOutput").append("6");
  });
  $("button#seven").click(function() {
    $("#newOutput").append("7");
  });
  $("button#eight").click(function() {
    $("#newOutput").append("8");
  });
  $("button#nine").click(function() {
    $("#newOutput").append("9");
  });
  $("button#zero").click(function() {
    $("#newOutput").append("0");
  });

  
});

