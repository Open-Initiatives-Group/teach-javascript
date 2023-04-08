// Функция демонстрации popup-меню
function showPopup (id) {
    const popup = document.querySelector(`#${id}`);
    const popupBackground = document.querySelector('.background');

    // Это и есть переключение стилей
    if (popup.style.display === 'flex') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'flex';
    }

    // Стрелочная функция закрытия popup
    const closePopup = () => {
        popup.style.display = 'none';
    }

    popupBackground.removeEventListener('click', closePopup);
    popupBackground.addEventListener('click', closePopup);
}