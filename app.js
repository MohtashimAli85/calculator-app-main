
const btn = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const operators = ['+', '-', 'x', '/'];
let a = null, b = null,result=null, newOperator,currentOperator = [], c = '';
let arr;
// Listening to Buttons CLick
btn.forEach(
    e => {
        e.addEventListener('click', x => {
            e.classList.add('pressedBtn');
            setTimeout(() => {
                e.classList.remove('pressedBtn');
            }, 90)
            if (Number(x.target.textContent)) {
                if (screen.innerHTML.length >= 11) {
                    alert('No more numbers');
                    return;
                }
                if (a != null) {
                    console.log('here at c')
                    c += x.target.textContent;
                }
                screen.innerHTML += x.target.textContent;
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
                a = null; b = null;
            } else if (x.target.innerHTML === '=') {
                if (a != 0) {
                    console.log('here 45')
                    if(b === null){
                        console.log('here 47')
                    b = screen.innerHTML;
                    arr = b.split(o);
                    b = Number(arr[arr.length - 1]);
                    console.log(a+""+b);
                    console.log(o);
                    }
                    if (o === '+') {
                        result = a+b;
                        screen.innerHTML = result;
                    } else if (o === '-') {
                        screen.innerHTML = a - b;
                    } else if (o === 'x') {
                        screen.innerHTML = a * b;
                    } else if (o === '/') {
                        screen.innerHTML = a / b;
                    }
                    a = result; b = null; o = ''; c = '';
                }
            } else if (x.target.textContent === '0') {
                if (screen.innerHTML.length >= 11) {
                    alert('No more numbers');
                    return;
                }
                screen.innerHTML += 0;
            }


            operators.forEach(e => {
                if (e === x.target.textContent) {
                    newOperator = e;
                    if (a === null) {
                       
                        a = Number(screen.innerHTML);
                        screen.innerHTML = a + e;
                        
                    }
                    if (a != null && c === '') {
                        screen.innerHTML = a + e;
                        
                    }
                
                    if (c != '') {
                        
                        currentOperator.push(newOperator);
                        if(currentOperator.length >=3){
                            console.log('here at length')
                            currentOperator.shift();
                        }
                        b = screen.innerHTML;
                        arr = b.split(currentOperator[0]);
                        console.log(currentOperator[0]+ ' here at CO');
                        b = Number(arr[arr.length - 1]);
                        console.log(b+' here at b');
                        if (currentOperator[0] === '+') {
                            
                            result = a+b;
                            console.log(result+' here at result');
                            screen.innerHTML = result+newOperator;
                            
                            
                        } else if (currentOperator[0] === '-') {
                            screen.innerHTML = a - b;
                        } else if (currentOperator[0] === 'x') {
                            screen.innerHTML = a * b;
                        } else if (currentOperator[0] === '/') {
                            screen.innerHTML = a / b;
                        }
                        a = result; b = null;  c = '';
                        console.log(a+' here new val');
                    }
                }
            });
        });

    });
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



const body = document.querySelector('body');
const tgBtn = document.querySelector('.tgBtndiv');
// Listening to toggle button
tgBtn.addEventListener('click', e => {
    if (body.classList.contains('light')) {

        body.classList.toggle('violet');
        body.classList.remove('light');
    } else if (body.classList.contains('violet')) {
        body.classList.remove('violet');

    } else {
        body.classList.add('light');
    }
})