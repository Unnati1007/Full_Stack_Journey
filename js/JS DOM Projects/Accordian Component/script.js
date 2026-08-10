document.querySelectorAll(".accordion-header").forEach((button) => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        const accordionContent = button.nextElementSibling;

        // Get current height of content for smooth animation
        const contentHeight = accordionContent.querySelector(".accordion-body").offsetHeight;

        if (accordionItem.classList.contains('active')) {
            // Close it
            accordionContent.style.maxHeight = "0px";
            accordionItem.classList.remove("active");
        } else {
            // Close any open item first
            document.querySelectorAll('.accordion-item').forEach((activeItem) => {
                activeItem.classList.remove("active");
                const activeContent = activeItem.querySelector(".accordion-content");
                if (activeContent) {
                    activeContent.style.maxHeight = '0px';
                }
            });

            // Open clicked item
            accordionContent.style.maxHeight = contentHeight + 'px';
            accordionItem.classList.add('active');
        }
    });
});
