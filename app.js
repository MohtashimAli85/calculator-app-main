
const btn = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const operators = ['+', '-', 'x', '/'];
let a = 0, b = 0, o;
// Listening to Buttons CLick
btn.forEach(
    e => {
        e.addEventListener('click', x => {

            if (screen.innerHTML.length >= 12) {
                alert('No more numbers');
                return;
            } else if (Number(x.target.textContent)) {
                screen.innerHTML += x.target.textContent;
            } else if (x.target.textContent === '.') {
                let value = "";
                value = screen.innerHTML;
                if (!value.endsWith('.')) {
                    screen.innerHTML += x.target.textContent;
                }
            } else if (x.target.textContent === 'DEL') {
                let value = screen.innerHTML;
                value = value.substring(0, value.length - 1);
                screen.innerHTML = value;
            } else if (x.target.textContent === 'RESET') {
                screen.innerHTML = '';
            } else if (x.target.innerHTML === '=') {
                if (a != 0) {
                    b = Number(screen.innerHTML);
                    screen.innerHTML = '';
                    if (o === '+') {
                        screen.innerHTML = a + b;
                    } else if (o === '-') {
                        screen.innerHTML = a - b;
                    } else if (o === 'x') {
                        screen.innerHTML = a * b;
                    } else if (o === '/') {
                        screen.innerHTML = a / b;
                    }
                    a = 0; b = 0; o = '';
                }
            } else if (x.target.textContent === '0') {
                screen.innerHTML += 0;
            }


            operators.forEach(e => {
                if (e === x.target.textContent) {
                    a = Number(screen.innerHTML);
                    screen.innerHTML = '';
                    o = e;
                }
            })
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
const tgBtn = document.querySelector('.tgBtn');
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