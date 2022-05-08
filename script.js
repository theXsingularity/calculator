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

function getInput(button) {
  input += button.innerHTML;
  number = parseInt(input);
  print(number);
}

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
            store = total;
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
            store = total;
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
            store = total;
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
            store = total;
            input = '';
        }
    }
}

function operate(operator, num1, num2) {
    total = operator(num1,num2)
    numTotal = parseInt(total)
    print((numTotal));
}

function s() {
    console.log(`operation: ${op}`);
    console.log(`input: ${input} ${typeof(input)}`);
    console.log(`store: ${store} ${typeof(store)}`);
    console.log(`number: ${number} ${typeof(number)}`);
    console.log(`total: ${total} ${typeof(number)}`);
}
  
function blank() {
  input='';
  number = '';
  store = '';
  total = '';
  print("0");
}  

function print(string) {
  output.textContent = string;
}