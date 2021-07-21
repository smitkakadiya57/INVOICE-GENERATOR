
    const modalwrapper = document.querySelector('.modal-wrapper');
    const closeBtn = document.querySelector('.close');

    function openModal() {
        modalwrapper.classList.add('active');
    }
    function closeModal() {
        modalwrapper.classList.remove('active');
    }

    window.onload=openModal();

    closeBtn.addEventListener('click', function () {
        closeModal();
    });
    modalwrapper.addEventListener('click', function (e) {
        if (e.target !== this) return;
        closeModal();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });