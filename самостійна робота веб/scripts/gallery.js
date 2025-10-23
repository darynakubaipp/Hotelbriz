$(document).ready(function(){

    // Спільні налаштування для всіх галерей
    var owlOptions = {
        items: 1,       // Показувати по одному слайду
        loop: true,     // Зациклити прокрутку
        nav: true,      // Показати стрілки "вперед/назад"
        dots: true,     // Показати точки для навігації
        autoplay: true, // Автоматичне прокручування
        autoplayTimeout: 3000, // Інтервал 3 секунди
        autoplayHoverPause: true // Пауза при наведенні
    };

    // Ініціалізація галереї для номеру "Стандарт"
    $("#gallery-standard").owlCarousel(owlOptions);
    
    // Ініціалізація галереї для номеру "Напівлюкс"
    $("#gallery-suite").owlCarousel(owlOptions);

    // Ініціалізація галереї для "Президентського Люксу"
    $("#gallery-presidential").owlCarousel(owlOptions);

});