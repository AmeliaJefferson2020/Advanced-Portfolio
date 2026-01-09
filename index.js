function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"

    emailjs
    .sendForm(
        'service_eb9gv1f', 
        'template_2ifx9xr', 
        event.target, 
        '5eIfnQ-OAQN-MguYR'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable. Please contact me directly at ameliathompson.ace@gmail.com"
        )
    })
}