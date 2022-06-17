export function scrollToTopBtn() {
    const toTopBtn = document.querySelector(".toTopBtn");

    toTopBtn.onclick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
}