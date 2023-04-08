// Обычная функция
function clickButton () {
    alert("Hello, world!");
    // Здесь может быть любой код функции, вообще что угодно
}

// Событие вызывается, когда все элементы успешно загружены
document.addEventListener('DOMContentLoaded', () => {
    // Ищем кнопку по ID и задаем ей действие по клику
    document.querySelector('#button_id').addEventListener('click', clickButton);

    // Ищем все кнопки по классу и задаем им действия по клику
    for (let button of document.querySelectorAll('.button_class')) {
        button.addEventListener('click', clickButton);
    }
});