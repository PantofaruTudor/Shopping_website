const main_menu_segments = document.querySelectorAll(".main_menu_segments")
main_menu_segments.forEach(item => {
    item.style.gap = "20px";
})


document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.categorii li');
    let hoverTimeout;

    listItems.forEach(item => {
        const className = item.classList[0];
        const dropdown = document.querySelector(`.${className}_dropdown`);

        const showDropdown = () => {
            clearTimeout(hoverTimeout);
            dropdown.classList.add('show');
        };

        const hideDropdown = () => {
            hoverTimeout = setTimeout(() => {
                dropdown.classList.remove('show');
            }, 400); // Adjust delay as needed
        };

        if (dropdown) {
            item.addEventListener('mouseenter', showDropdown);
            item.addEventListener('mouseleave', () => {
                hoverTimeout = setTimeout(hideDropdown, 400);
            });

            dropdown.addEventListener('mouseenter', () => {
                clearTimeout(hoverTimeout);
                dropdown.classList.add('show');
            });

            dropdown.addEventListener('mouseleave', hideDropdown);
        }
    });
});

