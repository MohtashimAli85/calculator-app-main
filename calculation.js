const btn = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const validOperators = ['+', '-', 'x', '/','*'];
let   result, input='';

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
                
            } else if (x.target.textContent === '0') {
                if (screen.innerHTML.length >= 11) {
                    alert('No more numbers');
                    return;
                }
                screen.innerHTML += 0;
            } else if (x.target.textContent === '.') {
                let value = "";
                value = screen.innerHTML;
                if (!value.includes('.')) {
                    if (screen.innerHTML.length >= 11) {
                        alert('No more');
                        return;
                    } else {
                        screen.innerHTML += x.target.textContent;
                    }
                }
            } else if (x.target.textContent === 'DEL') {
                let value = screen.innerHTML;
                value = value.substring(0, value.length - 1);
                screen.innerHTML = value;
            } else if (x.target.textContent === 'RESET') {
                screen.innerHTML = '';
                
            }else if(x.target.textContent === '='){
                   input = screen.innerHTML;
                   validOperators.forEach(o =>{
                       if(input.endsWith(o)){
                           alert('You dumb shit Give Proper Input');
                           return;
                       }
                   });
                   result = eval(input);
                   screen.innerHTML = result;

                    
            }


            validOperators.forEach(o =>{
                if(o === x.target.textContent){
                    if(o === 'x'){
                        screen.innerHTML +='*';
                    }else{
                        screen.innerHTML +=o;
                    }
                }
            });
        });
    }
);

// Listening to KeyPress 
window.addEventListener('keypress', e => {
    if (screen.innerHTML.length >= 12) {
        alert('No more numbers');
        return;
    } else if (Number(e.key)) {
        screen.innerHTML += e.key;
    }
});

window.addEventListener('keypress', e => {
    if (e.key === 'd') {
        let value = screen.innerHTML;
        value = value.substring(0, value.length - 1);
        screen.innerHTML = value;
    }
});