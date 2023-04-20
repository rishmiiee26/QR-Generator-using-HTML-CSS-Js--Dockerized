let wrapper = document.querySelector('.wrapper');
let qrInput = wrapper.querySelector('.form input');
let generateBtn = wrapper.querySelector('.form button');
let qrImg = wrapper.querySelector('.result img');
let body = document.querySelector('body');
let preValue;

let BGColors = [
    'linear-gradient(135deg, #e09ccd, #a6c1ee)',

    'linear-gradient(135deg, #aacc5a, #96e6a1)',

    'linear-gradient(135deg, #a6c0fe, #f68084)',

    'linear-gradient(135deg, #f68084, #f5576c)',

    'linear-gradient(135deg, #fa709a, #fee140)',

    'linear-gradient(135deg, #30cfd0, #330867)',

    'linear-gradient(135deg, #5fd8e1, #66a6ff)',

    'linear-gradient(135deg, #ebc0fd, #95b290)',

    'linear-gradient(135deg, #6dd19a, #f9f586)',

    'linear-gradient(135deg, #8c2db4, #f6f3ff)',
];

let btnColors = [
    'linear-gradient(to right, #e09ccd, #a6c1ee)',
    'linear-gradient(to right, #aacc5a, #96e6a1)',
    'linear-gradient(to right, #a6c0fe, #f68084)',
    'linear-gradient(to right, #f68084, #f5576c)',
    'linear-gradient(to right, #fa709a, #fee140)',
    'linear-gradient(to right, #30cfd0, #330867)',
    'linear-gradient(to right, #5fd8e1, #66a6ff)',
    'linear-gradient(to right, #ebc0fd, #95b290)',
    'linear-gradient(to right, #6dd19a, #f9f586)',
    'linear-gradient(to right, #8c2db4, #f6f3ff)',
];

//get random number between 0 to 9
let randNum = Math.floor(Math.random() * 10);

body.style.backgroundImage = BGColors[randNum];
generateBtn.style.backgroundImage = btnColors[randNum];

console.log(randNum);

generateBtn.addEventListener('click', () => {
    let qrValue = qrInput.value.trim();
    if (!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = 'Generating QR Code...';
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${qrValue}`;
    qrImg.addEventListener('load', () => {
        wrapper.classList.add('active');
        generateBtn.innerText = 'Generate QR Code';
    });
});

qrInput.addEventListener('keyup', () => {
    if (!qrInput.value.trim()) {
        wrapper.classList.remove('active');
        preValue = '';
    }
});
