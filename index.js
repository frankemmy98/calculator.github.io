    var number1 = parseFloat(document.querySelector("#input1").value);
    var number2 = parseFloat(document.querySelector("#input2").value);
    var numberOfOperators = document.querySelectorAll(".operators").length;

    for(i = 0; i < numberOfOperators; i++){
           document.querySelectorAll(".operators")[i].addEventListener("click", function(){
                  calculate(this.innerHTML);
           });
    }

function calculate(){
    var operate = numberOfOperators.value;

    switch(this.innerHTML){

       case(operate === "+"):
                 document.querySelector("#result").value = number1 + number2;
                break;
       case(operate === "-"):
                 document.querySelector("#result").value = number1 - number2;
                break;
       case(operate === "/"):
                 document.querySelector("#result").value = number1 / number2;
                break;
       case(operate === "*"):
                 document.querySelector("#result").value = number1 * number2;
                break;
       default: console.log(calculate);
    }
}

