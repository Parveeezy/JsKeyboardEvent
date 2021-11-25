const keyboards = document.querySelectorAll('.keyboard');

function t11(event) {
    for (let i = 0; i < keyboards.length; i++) {
        keyboards[i].classList.remove('active')
    }

    let code = event.code;
    let button = document.querySelector(`.keyboard[data="${code}"]`)
    
    button.classList.add('active');
}

document.querySelector('.i-11').onkeydown = t11;