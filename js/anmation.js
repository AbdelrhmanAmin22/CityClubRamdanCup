function setupIntersectionObserver(selector, offset) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: `${offset}px` });

    const elements = document.querySelectorAll(selector);
    elements.forEach(element => observer.observe(element));
}

document.addEventListener('DOMContentLoaded', function () {
    // Call the function with your desired selectors and offset
    setupIntersectionObserver('.ads, .details, .slider', 20);
    setupIntersectionObserver('.adsContainer, .tournament-info, .registration-info, .tournament-structure, .prizes-info, .compete-info, .carousel-item', 20);
});
