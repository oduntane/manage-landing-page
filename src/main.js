const navToggle = document.querySelector('#navToggle')
const testimonialToggleBtns = document.querySelectorAll('#testimonial-toggle > button')
let selectedIndex = 0

console.log(testimonialToggleBtns)
testimonialToggleBtns[selectedIndex].classList.add('selected')

testimonialToggleBtns.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
        testimonialToggleBtns[selectedIndex].classList.remove('selected')
        testimonialToggleBtns[index].classList.add('selected')
        selectedIndex = index
        setTestimonial(index)
    })
})

function setTestimonial(index) {
    const testimonials = document.querySelectorAll('#testimonial-slider > ul > li')
    testimonials.forEach(function (testimonial) {
        testimonial.classList.remove('selected')
    })
    testimonials[index].classList.add('selected')
}

navToggle.addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active')
})


function submit() {
    const email = document.querySelector('input').value
    const error = document.querySelector('#error')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        error.textContent = 'Please insert a valid email'
        document.querySelector('input').style.color = '#F3603C'
        error.style.color = '#F3603C'
        error.style.display = 'block'
    } else {
        document.querySelector('input').style.color = 'rgba(141, 141, 141, 0.5)'
        error.style.display = 'none'
    }

}