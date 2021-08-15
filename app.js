
const btn = document.querySelectorAll('.btn');
const screen  = document.querySelector('.screen');
btn.forEach(
    e =>{
        e.addEventListener('click', x=>{
            if(Number(x.target.textContent)){
            screen.innerHTML +=
             x.target.textContent;
            }
        })
    }
)
const delBtn = document.querySelector('.btnDel');
delBtn.addEventListener('click', e=>{
    let value = screen.innerHTML;
    value = Array.from(value);
    value.pop();
     
     screen.innerHTML = value;
})