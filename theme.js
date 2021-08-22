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
});