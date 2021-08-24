const btn = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const validOperators = ['+', '-', 'x', '/','*'];
let   result, input='', isProper = true, number='';

btn.forEach(
    e =>{
        e.addEventListener('click', x =>{
            e.classList.add('pressedBtn');
            setTimeout(() => {
                e.classList.remove('pressedBtn');
            }, 90);

            if(Number(x.target.textContent)){
                if (screen.innerHTML.length >= 11) {
                    alert('No more numbers');
                    return;
                }
                screen.innerHTML += x.target.textContent;
                number +=x.target.textContent;
            } else if (x.target.textContent === '0') {
                if (screen.innerHTML.length >= 11) {
                    alert('No more numbers');
                    return;
                }
                screen.innerHTML += 0;
            } else if (x.target.textContent === '.') { 
                if(!number.includes('.')){  
                    screen.innerHTML += x.target.textContent;
                    number += x.target.textContent;
                    }        
            } else if (x.target.textContent === 'DEL') {
                let value = screen.innerHTML;
                value = value.substring(0, value.length - 1);
                number = value;
                screen.innerHTML = value;
            } else if (x.target.textContent === 'RESET') {
                screen.innerHTML = '';
                number = '';
            }else if(x.target.textContent === '='){
                   input = screen.innerHTML;
                   console.log(input);
                   if(input != undefined && input !=''){
                   validOperators.forEach(o =>{
                    if(input.endsWith(o)){
                        console.log(input.includes(o));
                        alert('Kindly give proper input ^-^.');
                        isProper = false;
                    }
                    });
                    if(isProper){
                    result = eval(input);
                    if(Number(result)){
                    screen.innerHTML = result;
                    }else{
                        screen.innerHTML = 0;
                    }
                    }
                    
            }
        }

            validOperators.forEach(o =>{
                input = screen.innerHTML;
                if(input.endsWith(o)){
                    isProper = false;
                }else{
                    isProper = true;
                }
                if(isProper){
                    if(o === x.target.textContent){
                        number = '';
                        if(o === 'x'){
                            screen.innerHTML +='*';
                        }else{
                            screen.innerHTML +=o;
                        }
                    }
                }
            });
        });
    }
);

// Listening to KeyPress 
window.addEventListener('keydown', e => {
    if (screen.innerHTML.length >= 12) {
        alert('No more numbers');
        return;
    } else if (Number(e.key)) {
        screen.innerHTML += e.key;
    }else if (e.key === 'Enter') {
        input = screen.innerHTML;
        validOperators.forEach(o =>{
            if(input.endsWith(o)){
                console.log(input.includes(o));
                alert('Kindly give proper input ^-^.');
                isProper = false;
            }else{
                isProper = true;
            }

        });
        if(isProper){
         result = eval(input);
         if(Number(result)){
            screen.innerHTML = result;
         }else{
            screen.innerHTML = 0;
         }
         
        }            
    }else if(e.key === 'Backspace') {
         input = screen.innerHTML;
        input = input.substring(0, input.length - 1);
        number = input;
        screen.innerHTML = input;
    }else if(e.key === '.'){
        if(!number.includes('.')){  
            screen.innerHTML += e.key;
            number += e.key;
            }        
    }else if(e.key == '0'){
        screen.innerHTML +=0;
        
    }
    validOperators.forEach(o =>{
        input = screen.innerHTML;
        if(input.endsWith(o)){
            isProper = false;
        }else{
            isProper = true;
        }
        if(isProper){
            if(o === e.key){
                number = '';
                    screen.innerHTML +=o;
            }
        }
    });
});

