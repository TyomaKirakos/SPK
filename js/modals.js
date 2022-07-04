const modalOpenBtn = document.querySelector('.request-btn');
const modal = document.querySelector('.modal-bg');
const modalCloseBtn = modal.querySelector('.top-cntrls__close-btn');
const modalForm = modal.querySelector('form');

modalOpenBtn.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal)
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        closeModal();
    }
})

function openModal() {
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
    if (modalForm) {
        let fioWarningTxt = modalForm.querySelector('.fio-warning-txt');
        let phoneWarningTxt = modalForm.querySelector('.phone-warning-txt');
        modalForm.reset();
        fioWarningTxt.style.opacity = '0';
        phoneWarningTxt.style.opacity = '0';
    }
}