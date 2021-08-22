const btn = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const validOperators = ['+', '-', 'x', '/'];
let   numbers = [], operators = [], result, input;

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
                input+= x.target.textContent; 
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
                    console.log(numbers);
                    console.log(operators);
            }


            validOperators.forEach(o =>{
                if(o === x.target.textContent){
                    numbers.push(Numbe(input));
                    operators.push(o);
                    screen.innerHTML +=o;
                }
            })
        });
    }
);