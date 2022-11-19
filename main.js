const slider = document.querySelector('#range')
const pageviews = document.querySelector('#pageviews')
const cost = document.querySelector('#cost')
const switchBtn = document.querySelector('#switch')

const views = ['10K', '50K', '100K', '500K', '1M']
const price = [8, 12, 16, 24, 36]

slider.max = views.length - 1

// ================slider================
slider.addEventListener('input', chengeSlider)
function chengeSlider() {
    const value = slider.value
    slider.style.background = `linear-gradient(90deg, var(--cyan-100) ${value * 25}%, var(--blue-200) ${value}%)`
    changeCost()
}
// ================slider================

function changeCost() {
    const chk = switchBtn.checked
    const yearCost = 12 * .75
    if (chk) {
        inner(yearCost, 'year')
    } else {
        inner(1, 'month')
    }
}

function inner(num, period) {
    const value = slider.value
    pageviews.innerText = `${views[value]} Pageviews`
    cost.innerHTML = `$${price[value] * num}.00<span>/${period}</span>`
}