const main_menu_segments = document.querySelectorAll(".main_menu_segments")
main_menu_segments.forEach(item => {
    item.style.gap = "20px";
})


document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.categorii li');
    let hoverTimeout;
    const dropdown_area = document.querySelector('.dropdown_area')
    let activeItem;
    listItems.forEach(item => {
        const className = item.classList[0];
        const dropdown = document.querySelector(`.${className}_dropdown`);
                
        if(dropdown) {
            
            item.addEventListener('mouseenter', ()=>{
                hoverTimeout = setTimeout(() => {
                    dropdown_area.classList.add('show')
                    dropdown.classList.add('show')
                },200)  
                activeItem = dropdown
            });
            item.addEventListener('mouseleave', () => {
                dropdown.classList.remove('show');
                dropdown_area.classList.remove('show')
            });

            dropdown_area.addEventListener('mouseenter',()=>{
                if(!dropdown.classList.contains('show'))
                {
                    dropdown_area.classList.add('show')
                    dropdown.classList.add('show')
                    console.log(activeItem)
                }
            })            
            dropdown_area.addEventListener('mouseleave',()=>{
                dropdown_area.classList.remove('show')
                console.log(dropdown)
                dropdown.classList.remove('show')
            })

        }
    });
});

