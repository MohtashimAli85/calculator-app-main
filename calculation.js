const btn = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const validOperators = ['+', '-', 'x', '/','*'];
let   result, input='', isProper = true, number='';
var decimalPoint = true;

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
                console.log(number);
            } else if (x.target.textContent === '0') {
                if (screen.innerHTML.length >= 11) {
                    alert('No more numbers');
                    return;
                }
                screen.innerHTML += 0;
            } else if (x.target.textContent === '.') {
                if (screen.innerHTML.length >= 11) {
                    alert('No more');
                    return;
                } 
                if(!number.includes('.')){  
                    console.log(number);
                    console.log(decimalPoint+'here at 35');
                    screen.innerHTML += x.target.textContent;
                    number += x.target.textContent;
                    }        
            } else if (x.target.textContent === 'DEL') {
                let value = screen.innerHTML;
                value = value.substring(0, value.length - 1);
                screen.innerHTML = value;
            } else if (x.target.textContent === 'RESET') {
                screen.innerHTML = '';
                
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
                    if(NaN === result || result !=Infinity || result != -Infinity){
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
         screen.innerHTML = result;
        }            
    }else if(e.key === 'Backspace') {
         input = screen.innerHTML;
        input = input.substring(0, input.length - 1);
        screen.innerHTML = input;
    }else{
        console.log('*'===e.key);
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
                    screen.innerHTML +=o;
            }
        }
    });
});

