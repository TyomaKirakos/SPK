const modals = () => {
    const modalOpenBtn = document.querySelector('.request-btn');
    const modal = document.querySelector('.modal-bg');
    const modalCloseBtn = modal.querySelector('.top-cntrls__close-btn');
    const form = modal.querySelector('form');

    modalOpenBtn.addEventListener('click', openModal);
    modalCloseBtn.addEventListener('click', closeModal)
    window.addEventListener('click', (e) => {
        if (e.target == modal){
            closeModal();
        }
    })

    function openModal(){
        modal.style.display = 'flex';
    }

    function closeModal(){
        modal.style.display = 'none';
        if (form){
            let fioWarningTxt = form.querySelector('.fio-warning-txt');
            let phoneWarningTxt = form.querySelector('.phone-warning-txt');
            form.reset();
            fioWarningTxt.style.opacity = '0';
            phoneWarningTxt.style.opacity = '0';
        }
    }
}

export default modals;