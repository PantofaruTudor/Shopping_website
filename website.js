const main_menu_segments = document.querySelectorAll(".main_menu_segments")
main_menu_segments.forEach(item => {
    item.style.gap = "20px";
})


document.addEventListener('DOMContentLoaded', () => {
    function hideAllDropdowns() {
        const allDropdowns = document.querySelectorAll('.dropdown_info ul');
        allDropdowns.forEach(dropdown => {
            dropdown.classList.add('hide');
        });
        dropdown_area.classList.remove('show');
    }
    const listItems = document.querySelectorAll('.categorii li');
    let hoverTimeout;
    const dropdown_area = document.querySelector('.dropdown_area')
    let activeItem;

    listItems.forEach(item => {
        const className = item.classList[0];
        const dropdown = document.querySelector(`.${className}_dropdown`);
        console.log(dropdown)
        if(dropdown) {
            dropdown.classList.add('hide')
            item.addEventListener('mouseenter', ()=>{
                hoverTimeout = setTimeout(() => {
                    hideAllDropdowns()
                    dropdown_area.classList.add('show')
                    dropdown.classList.remove('hide')
                },300)  
                activeItem = dropdown

                
            });
            item.addEventListener('mouseleave', () => {
                if(hoverTimeout)
                {
                    clearTimeout(hoverTimeout)
                }
                
                hoverTimeout = setTimeout(()=> {
                    if(!dropdown_area.classList.contains('show'))
                    {
                        dropdown.classList.add('hide');
                        dropdown_area.classList.remove('show')
                    }
                    
                    
                }, 300)
            });
 
            dropdown_area.addEventListener('mouseenter',()=>{
                if(!dropdown.classList.contains('hide'))
                {
                    dropdown_area.classList.add('show')
                    dropdown.classList.remove('hide')
                }
                
                console.log(dropdown)
            })            

            dropdown_area.addEventListener('mouseleave',()=>{
                dropdown_area.classList.remove('show')
            })

        }
    });
});

