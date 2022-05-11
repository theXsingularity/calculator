let input = '';
let number = '';
let stored = '';
let total ='';
let op = '';


//operators
let add = (a,b) => a+b;
let sub =  (a,b) => a-b; 
let mul = (a,b) => a*b;
let div = (a,b) => a/b;

//get numbers from button
function getInput(button) {
  input += button.innerHTML;
  number = parseInt(input);  // replace with input = parseInt(input) ... then change everything accordingly
  print(number);
  s();
}

//get operator
function getOperator(button) {
    if (button.innerHTML === "+") {
        if(total === '' && stored === '') {
            op = add;
            stored = number;
            input = '';
            number = '';
            s();
        }
        else if(total === '' && input === '') {
            op = add;
            input = '';
            number = '';
            s();
        }
        else if(total === '' && stored !== '' && number !== '') {
            operate(op, stored, number);
            op = add;
            input = '';
            number = '';
            s();
        }
        else if(total !== "" && input === '') {
            op = add;
            stored = total;
            total = '';
            s();
        }
        else if (total !== '' && stored !== '' && number !== '') {
            operate(op, total, number);
            op = add;
            input = '';
            number = '';
            s();
        }
        else {
            op = add;
            s();
        }
    }
    if (button.innerHTML === "-") {
        if(total === '' && stored === '') {
            op = sub;
            stored = number;
            input = '';
            number = '';
            s();
        }
        else if(total === '' && input === '') {
            op = sub;
            input = '';
            number = '';
            s();
        }
        else if(total === '' && stored !== '' && number !== '') {
            operate(op, stored, number);
            op = sub;
            input = '';
            number = '';
            s();
        }
        else if(total !== "" && input === '') {
            op = sub;
            stored = total;
            total = '';
            s();
        }
        else if (total !== '' && stored !== '' && number !== '') {
            operate(op, total, number);
            op = sub;
            input = '';
            number = '';
            s();
        }
        else {
            op = sub;
            s();
        }
    }
    if (button.innerHTML === "x") {
        if(total === '' && stored === '') {
            op = mul;
            stored = number;
            input = '';
            number = '';
            s();
        }
        else if(total === '' && input === '') {
            op = mul;
            input = '';
            number = '';
            s();
        }
        else if(total === '' && stored !== '' && number !== '') {
            operate(op, stored, number);
            op = mul;
            input = '';
            number = '';
            s();
        }
        else if(total !== "" && input === '') {
            op = mul;
            stored = total;
            total = '';
            s();
        }
        else if (total !== '' && stored !== '' && number !== '') {
            operate(op, total, number);
            op = mul;
            input = '';
            number = '';
            s();
        }
        else {
            op = mul;
            s();
        }
    }
    if (button.innerHTML === "/") {
        if(total === '' && stored === '') {
            op = div;
            stored = number;
            input = '';
            number = '';
            s();
        }
        else if(total === '' && input === '') {
            op = div;
            input = '';
            number = '';
            s();
        }
        else if(total === '' && stored !== '' && number !== '') {
            operate(op, stored, number);
            op = div;
            input = '';
            number = '';
            s();
        }
        else if(total !== '' && input === '') {
            op = div;
            stored = total;
            total = '';
            s();
        }
        else if (total !== '' && stored !== '' && number !== '') {
            operate(op, total, number);
            op = div;
            input = '';
            number = '';
            s();
        }
        else {
            op = div;
            s();
        }
    }
}

//operate w/ operator and two numbers
function operate(operator, num1, num2) {
    total = operator(num1,num2)
    total = parseFloat(total)
    print(total);
    s();
}
 
//press = to operate
document.getElementById("enter").addEventListener("click", function() {
    if(input === '' && number === '' && stored === '' && total === '') {
        print("choose a number 1st....");
    }
    else if(stored === '' && total === '' && total === '') {
        print("chose another number...");
    }
    else if(total === '') {
    operate(op, stored, number)
    input = '';
    stored = total;
    total = '';
    s();
    } else{
        operate(op, total, number);
        input = '';
        stored = total;
        total = '';
    }
});

//clears screen to 0
function blank() {
    input='';
    number = '';
    stored = '';
    total = '';
    print("0");
  }  
  
  //prints a string to screen 
  function print(string) {
    output.textContent = string;
  }

//debugger to quickly see type of and values of vars
function s() {
    console.log(`operation: ${op}`);
    console.log(`input: ${input} ${typeof(input)}`);
    console.log(`number: ${number} ${typeof(number)}`);
    console.log(`stored: ${stored} ${typeof(stored)}`);
    console.log(`total: ${total} ${typeof(total)}`);
}

window.addEventListener('keydown', function(e) {
    console.log(e.key);
    input+=e.key
    print(input)
})