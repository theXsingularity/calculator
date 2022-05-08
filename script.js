let input = '';
let number = '';
let store = '';
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
  number = parseInt(input);
  print(number);
}

//click operator either adds op or does operation
function getOperator(button) {
    if (button.innerHTML === "+") {
        if(total === '' && store === '') {
            op = add;
            store = number;
            input = '';
        }
        else if(store !== '' && number !=='') {
            operate(op, store, number)
            console.log(total);
            op = add;
            store = parseFloat(total);
            input = '';
        }
    }
    if (button.innerHTML === "-") {
        if(total === '' && store === '') {
            op = sub;
            store = number;
            input = '';
        }
        else if(store !== '' && number !=='') {
            operate(op, store, number)
            console.log(total);
            op = sub;
            store = parseFloat(total);
            input = '';
        }
    }
    if(button.innerHTML === "x") {
        if(total === '' && store === '') {
            op = mul;
            store = number;
            input = '';
        }
        else if(store !== '' && number !=='') {
            operate(op, store, number)
            console.log(total);
            op = mul;
            store = parseFloat(total);
            input = '';
        }
    }
    if(button.innerHTML === "/") {
        if(total === '' && store === '') {
            op = div;
            store = number;
            input = '';
        }
        else if(store !== '' && number !=='') {
            operate(op, store, number)
            console.log(total);
            op = div;
            store = parseFloat(total);
            input = '';
        }
    }
}

//operates when has an op, a stored or total number, and a number
function operate(operator, num1, num2) {
    if(total === '' && store === '') return alert('must enter number');
    if(store === total) return alert('choose another number');
    total = operator(num1,num2)
    numTotal = parseFloat(total)
    print((numTotal));
}

//clears screen to 0
function blank() {
    input='';
    number = '';
    store = '';
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
    console.log(`store: ${store} ${typeof(store)}`);
    console.log(`number: ${number} ${typeof(number)}`);
    console.log(`total: ${total} ${typeof(number)}`);
}
  
