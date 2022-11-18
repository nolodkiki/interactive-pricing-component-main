const slider = document.querySelector('#range')

const views = ['10K', '50K', '100K', '500K', '1M']
const price = [8, 12, 16, 24, 36]


slider.addEventListener('input', chengeSlider)
function chengeSlider() {
    const value = slider.value
    slider.style.background = `linear-gradient(90deg, var(--cyan-100) ${value * 25}%, var(--blue-200) ${value}%)`
}