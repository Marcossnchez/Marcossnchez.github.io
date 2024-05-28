document.addEventListener("DOMContentLoaded", function () {
    const options = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.5 // trigger when 50% of the div is in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const link = document.querySelector(`nav a[href="#${id}"]`);
            if (entry.isIntersecting) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }, options);

    // Observe each div with the class 'content'
    document.querySelectorAll('.content').forEach(div => {
        observer.observe(div);
    });
});
