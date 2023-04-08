// Событие, вызываемое после полной загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    const svg = document.querySelector('#svg');

    // Поиск и назначение для каждого выделенного аттрибутом "canclick" функции
    for (let obj of svg.querySelectorAll('[canclick]')) {
        obj.addEventListener('click', () => {
            alert(obj.getAttribute('text'));
        });
    }
});