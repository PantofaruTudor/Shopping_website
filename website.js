const main_menu_segments = document.querySelectorAll(".main_menu_segments")
main_menu_segments.forEach(item => {
    item.style.gap = "20px";
})

/* DROPDOWN-MENU //////////////////////////////////////////////////////*/
document.addEventListener('DOMContentLoaded', () => {
    function hideAllDropdowns() {
        const allDropdowns = document.querySelectorAll('.dropdown_info ul');
        allDropdowns.forEach(dropdown => {
            dropdown.classList.add('hide');
        });
        dropdown_area.classList.remove('show');
    }
    let dropdown_area_active = false
    let hoverTimeout;
    const listItems = document.querySelectorAll('.categorii li');
    const dropdown_area = document.querySelector('.dropdown_area')

    listItems.forEach(item => {
        const className = item.classList[0];
        const dropdown = document.querySelector(`.${className}_dropdown`);

        if(dropdown) {
            dropdown.classList.add('hide')
            item.addEventListener('mouseenter', ()=>{
                hoverTimeout = setTimeout(() => {
                    hideAllDropdowns()
                    dropdown_area.classList.add('show')
                    dropdown.classList.remove('hide')
                },300)  

                
            });
            item.addEventListener('mouseleave', () => {
                hoverTimeout = setTimeout(()=> {                
                    if(!dropdown_area.classList.contains('show') || dropdown_area_active === false)
                    {
                        dropdown.classList.add('hide');
                        dropdown_area.classList.remove('show')
                    }
                }, 300)
            });
 
            dropdown_area.addEventListener('mouseenter',()=>{
                dropdown_area_active = true
                if(!dropdown.classList.contains('hide'))
                {
                    dropdown_area.classList.add('show')
                    dropdown.classList.remove('hide')
                }
                
            })            

            dropdown_area.addEventListener('mouseleave',()=>{
                dropdown_area_active = false
                dropdown_area.classList.remove('show')
                dropdown.classList.add('hide')

            })

        }
    });
});

/* BANNER-IMAGE SLIDER ///////////////////////////////*/ 
const slides = document.querySelectorAll(".slider-container img")
let slideIndex = 0
let intervalId = null
document.addEventListener("DOMContentLoaded",initializeSlider)
function initializeSlider()
{
    if(slides.length > 0)
    {
        console.log(slides)
        slides[slideIndex].classList.add("displaySlide")
        intervalId=setInterval(nextSlide, 8000)
    }
}
function showSlide(index)
{
    if(index >= slides.length)
    {
        slideIndex = 0
    }
    else if(index < 0)
    {
        slideIndex = slides.length - 1
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide")
    })
    slides[slideIndex].classList.add("displaySlide")
}

function prevSlide()
{
    clearInterval(intervalId)
    slideIndex--
    showSlide(slideIndex)
}

function nextSlide()
{
    clearInterval(intervalId)
    intervalId=setInterval(nextSlide, 8000)
    slideIndex++
    showSlide(slideIndex)
}
     

/*BRANDS BANNER SLIDE*/

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    let slider = document.querySelector('.brands-slider');

    // Adjust the horizontal position based on scroll position
    if(window.innerWidth > 600)
        slider.style.transform = `translateX(-${scrollPosition}px)`;
    else{
        slider.style.transform = 'translateX(0)'
    }
});


/*ITEM GRID DISPLAY*/

const products= [
    {name: 'Barbie Doll', price: 100, image: "items/item1.jpg"},
    {name: 'Toy Car', price: 50, image: 'items/item2.jpg'},
    {name: 'Lego Set', price: 200, image: 'items/item3.jpg'},
    {name: 'Remote Control Car', price: 150, image: 'items/item4.jpg'},
    {name: 'Action Figure', price: 75, image: 'items/item5.jpg'},
    {name: 'Board Game', price: 100, image: 'items/item6.jpg'},
    {name: 'Puzzle', price: 50, image: 'items/item7.jpg'},
    {name: 'Stuffed Animal', price: 25, image: 'items/item8.jpg'},
    {name: 'Toy Plane', price: 75, image: 'items/item9.jpg'},
    {name: 'Toy Train', price: 100, image: 'items/item10.jpg'},    
]

const productGrid = document.querySelector('.item-grid')
products.forEach(product => {
    console.log(product.image)
    const productItem = document.createElement('div')
    productItem.className = "product-item"
    productItem.innerHTML = `
        <a href="https://www.lego.com/ro-ro">
        <img src=${product.image} alt=${product.name}></a>
        <h2>${product.name}</h2>
        <p>$${product.price}</p>
    `
    productGrid.appendChild(productItem)
    productItem.classList.add('.item-box')
})

