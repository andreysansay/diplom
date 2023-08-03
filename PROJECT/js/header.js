document.addEventListener("DOMContentLoaded", function () {
    const burgerButton = document.getElementById('burger-button')
    const burgerMenu = document.getElementById('burger-menu')


    burgerButton.addEventListener('click', function () {
       burgerMenu.classList.toggle("active")
    })

    document.addEventListener('click', function (event) {
        const target = event.target

        if (!target.closest('.burger-menu') && !target.closest('.burger-button')) {
            burgerMenu.classList.remove("active")
        }

    })
})