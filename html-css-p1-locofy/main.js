const domain1Button = document.getElementById('domain-1-button')
const heroSectionTitle = document.getElementById("hero-section-title")
const heroSectionText = document.getElementById("hero-section-text")
const hosting1Button = document.getElementById('hosting1-button')
domain1Button.addEventListener("click", () => {
    heroSectionTitle.textContent = "Good domains"
    heroSectionText.textContent = "Good domains text"
    domain1Button.classList.add("button-selected")
    hosting1Button.classList.remove("button-selected")

})