let input = '';
let number = '';
let total ='';
let op = '';

//operators
let add = (a,b) => a+b;
let sub =  (a,b) => a-b; 
let mul = (a,b) => a*b;
let div = (a,b) => a/b;

function getInput(button) {
  input += button.innerHTML;
  number = parseInt(input);
  print(number);
}

function getOperator(button) {
  if (button.innerHTML === "+") {
    if(total === '') {
      op = add;
      total = number;
      input = '';
    } else {
      operate(op, total, number);
      op = add;
      screen = '';
      input = '';
    }
  }
  if (button.innerHTML === "-") {
    if(total === '') {
      op = sub;
      total = number;
      input = '';
    } else {
      operate(op, total, number);
      op = sub;
      screen = '';
      input = '';
    }
  }
  if(button.innerHTML === "x") {
      if(total === '') {
      op = mul;
      total = number;
      input = '';
    } else {
      operate(op, total, number);
      op = mul;
      screen = '';
      input = '';
    }
  }
  if(button.innerHTML === "/") {
    if(total === '') {
      op = div;
      total = number;
      input = '';
    } else {
      operate(op, total, number);
      op = div;
      screen = '';
      input = '';
    }
  }
}

function operate(operator, num1, num2) {
  total = operator(num1,num2)
  print((total));
  number = parseInt(total)
  total = '';

}

function s() {
    console.log(`operation: ${op}`);
    console.log(`input: ${input} ${typeof(input)}`);
    console.log(`number: ${number} ${typeof(number)}`);
    console.log(`total: ${total} ${typeof(number)}`);
}

function t() {
  console.log(`input type: ${typeof(input)}`);
  console.log(`number type: ${typeof(number)}`);
  console.log(`total type: ${typeof(total)}`);
 
}
  
function blank() {
  screen='';
  input = '';
  number = '';
  total = '';
  print("0");
}  

function print(string) {
  output.textContent = string;
}
/*  
if(total === '' && storedNum === '') {
      op = add;
      storedNum = number;
      input = '';
    } 
    else if (total === '' && storedNum !== '') {
      operate(op, storedNum, number);
      op = add;
      input = '';
    } else {
      operate(op, total, number)
      op = add;
      storedNum = total
      input = '';
    }


  output.innerHTML = total;
  input = '';
  storedNum = '';
}
*/
