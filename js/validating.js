const form = document.querySelector('.form');
const submitBtn = form.querySelector('.form__submit-btn');

const fioInput = form.querySelector('.input-block__fio-input');
const phoneInput = form.querySelector('.input-block__phone-input');

const fioWarningTxt = form.querySelector('.fio-warning-txt');
const phoneWarningTxt = form.querySelector('.phone-warning-txt');

const fioPattern = /^[А-Яа-яЁё\s]+$/;
const phonePattern = /\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/;

let isValid = true;

submitBtn.addEventListener('click', () => {
    fioWarningTxt.textContent = '';
    fioWarningTxt.style.opacity = '0';

    phoneWarningTxt.textContent = '';
    phoneWarningTxt.style.opacity = '0';

    if (fioInput.value == ''){
        fioWarningTxt.textContent = 'Введите ваше ФИО';
        fioWarningTxt.style.opacity = '1';
    } else if (!fioPattern.test(fioInput.value)){
        fioWarningTxt.textContent = 'Заполните поле корректно!';
        fioWarningTxt.style.opacity = '1';
    }

    if (phoneInput.value == ''){
        phoneWarningTxt.textContent = 'Введите ваш номер телефона';
        phoneWarningTxt.style.opacity = '1';
    } else if (!phonePattern.test(phoneInput.value)){
        phoneWarningTxt.textContent = 'Заполните поле корректно!';
        phoneWarningTxt.style.opacity = '1';
    }
})



