
    
    let field1 = document.querySelector("#input1") 
    let field2 = document.querySelector("#input2")
    let field3 = document.querySelector('#result')
    let my_operators = Array.from(document.getElementsByClassName('operators'))
    
    my_operators.forEach((operator)=>{
        operator.addEventListener('click', ()=>{
            dostuff(operator.innerHTML)
        })
    })

    function dostuff(operand){
        if(field1.value && field2.value){
            let answer;
            if(operand == '+'){
                answer = parseFloat(field1.value) + parseFloat(field2.value)
            }else if(operand == '-'){
                answer = parseFloat(field1.value) - parseFloat(field2.value)
            }else if(operand === '/'){
                answer = parseFloat(field1.value) / parseFloat(field2.value)
            }else if(operand === '*'){
                answer = parseFloat(field1.value) * parseFloat(field2.value)
            }

            field3.value = answer
        }else{
            alert('Fields cannot be empty')
        }
        
    }
