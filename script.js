let eye = document.querySelector("#eye");
let eyeOff = document.querySelector("#eye-off");
let inputPass = document.querySelector("#isenha");

eyeOff.addEventListener('click', function() {
    if(eyeOff.style.display == 'block') {
        eyeOff.style.display = 'none';
        eye.style.display = 'block'
    }
    if(inputPass.type === 'password') {
        inputPass.setAttribute('type','text')
    }
})

eye.addEventListener('click', function() {
    if(eye.style.display == 'block') {
        eye.style.display = 'none';
        eyeOff.style.display = 'block';
    }
    if(inputPass.type === 'text') {
        inputPass.setAttribute('type','password')
    }
})
