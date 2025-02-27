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

const products = [
    {name: 'Barbie Doll', price: 100, image: ["items/item1.jpg", "items/item2.jpg"], sale: true},
    {name: 'Toy Car', price: 50, image: ['items/item2.jpg', 'items/item3.jpg'], sale: false},
    {name: 'Lego Set', price: 200, image: ['items/item3.jpg', 'items/item4.jpg'], sale: true},
    {name: 'Remote Control Car', price: 150, image: ['items/item4.jpg', 'items/item5.jpg'], sale: false},
    {name: 'Action Figure', price: 75, image: ['items/item5.jpg', 'items/item6.jpg'], sale: true},
    {name: 'Board Game', price: 100, image: ['items/item6.jpg', 'items/item7.jpg'], sale: false},
    {name: 'Puzzle', price: 50, image: ['items/item7.jpg', 'items/item8.jpg'], sale: true},
    {name: 'Stuffed Animal', price: 25, image: ['items/item8.jpg', 'items/item9.jpg'], sale: false},
    {name: 'Toy Plane', price: 75, image: ['items/item9.jpg', 'items/item10.jpg'], sale: true},
    {name: 'Toy Train', price: 100, image: ['items/item10.jpg', 'items/item11.jpg'], sale: false}, 
    {name: 'Bar', price: 100, image: ["items/item11.jpg", "items/item12.jpg"], sale: true},   
    {name: 'Toy People', price: 50, image: ['items/item12.jpg', 'items/item13.jpg'], sale: false},
    {name: 'Adidas jacket', price: 200, image: ['items/item13.jpg', 'items/item14.jpg'], sale: true},
    {name: 'Nike shoes', price: 150, image: ['items/item14.jpg', 'items/item15.jpg'], sale: false},
    {name: 'Puma pants', price: 75, image: ['items/item15.jpg', 'items/item16.jpg'], sale: true},
    {name: 'Reebok t-shirt', price: 100, image: ['items/item16.jpg', 'items/item17.jpg'], sale: false},
    {name: 'Under Armour socks', price: 50, image: ['items/item17.jpg', 'items/item18.jpg'], sale: true},
    {name: 'New Balance hat', price: 100, image: ['items/item18.jpg', 'items/item19.jpg'], sale: false},
    {name: 'Vans shoes', price: 50, image: ['items/item19.jpg', 'items/item20.jpg'], sale: true},
    {name: 'Converse jacket', price: 25, image: ['items/item20.jpg', 'items/item1.jpg'], sale: false},
]

const productGrid = document.querySelector('.noutati-item-grid')
const SalesProductGrid = document.querySelector('.sales-item-grid')
products.forEach(product => {
    const productItem = document.createElement('div')
    productItem.className = "product-item"
    productItem.innerHTML = `
        <a href="https://www.lego.com/ro-ro">
            <img class="main_image" src=${product.image[0]} alt=${product.name}>
        </a>
        <div class="item-favourite-name-box">
            <h2>${product.name}</h2>
            <button class="favourite-item">
                <img src="MainMenu/white_star.png" alt="favourite">
            </button>
            <p>$${product.price}</p>
        </div>
    `

    if(product.sale == false)
        productGrid.appendChild(productItem)
    else
        SalesProductGrid.appendChild(productItem)
})




const allProducts = document.querySelectorAll('.product-item .main_image')
allProducts.forEach(product => {
    const productItem = product.closest('.product-item')
    const isInSalesGrid = productItem.closest('.sales-item-grid') !== null
    const productIndex_noutati = Array.from(productGrid.children).indexOf(productItem)
    const productIndex_sales = Array.from(SalesProductGrid.children).indexOf(productItem)
    product.addEventListener('mouseenter', () => {
        if(isInSalesGrid)
            product.src = products[productIndex_sales].image[1]
        else
            product.src = products[productIndex_noutati].image[1]
    })
    product.addEventListener('mouseleave', () => {
        if(isInSalesGrid)
            product.src = products[productIndex_sales].image[0]
        else
            product.src = products[productIndex_noutati].image[0]
    })
})

//function to hide the last incomplete row //////////////////////////////////////////
function hideIncompleteRow(grid)
{
    const productItems = document.querySelectorAll(`${grid} .product-item`)
    const itemsPerRow = Math.floor((productGrid.clientWidth + 10) /  productItems[0].clientWidth)
    const totalItems = productItems.length
    const lastRow = totalItems % itemsPerRow
    if(lastRow!=0)
    {
        for(let i = totalItems - lastRow; i< totalItems; i++)
            productItems[i].style.display = 'none'
    }
}
hideIncompleteRow('.noutati-item-grid')
hideIncompleteRow('.sales-item-grid')


function hideBannerIncompleteRow()
{
    const bannerItems = document.querySelectorAll('.brands-slider img')
    const bannerGrid = document.querySelector('.brands-slider')
    const itemsPerRow = Math.floor((bannerGrid.clientWidth + 10) /  bannerItems[0].clientWidth)
    const totalItems = bannerItems.length
    const lastRow = totalItems % itemsPerRow
    if(lastRow!=0)
    {
        for(let i = totalItems - lastRow; i< totalItems; i++)
        {
            let mainBannerItem = bannerItems[i].closest('.logo-box')
            mainBannerItem.style.display = 'none'
        }
            
    }
}
if(window.innerWidth < 600)
    hideBannerIncompleteRow()

window.addEventListener('resize' , ()=>{
    const productItems = document.querySelectorAll('.product-item')
    productItems.forEach(item => {
        item.style.display = 'block'
    })
    hideIncompleteRow('.noutati-item-grid')
    hideIncompleteRow('.sales-item-grid')
    if(window.innerWidth < 600) {   
        hideBannerIncompleteRow()
    }
    else{
        const bannerItems = document.querySelectorAll('.brands-slider img')
        bannerItems.forEach(item => {
            item.closest('.logo-box').style.display = 'block'
        })
        //REZOLVARE TEMPORARA
    }


})


//function to put an item in the favourite list //////////////////////////////////////////

const favourite_prod = document.querySelectorAll('.product-item ')
favourite_prod.forEach(fav => {
    let wishList = false
    const favourite_icon = fav.querySelector('.favourite-item img') 
    favourite_icon.addEventListener('click',()=>{
        if(wishList == false){
            favourite_icon.src='MainMenu/black_star.png'
            wishList = true
            /*AICI TREBUIE SA FAC O FUNCTIE SI SA ADAUG FIECARE ELEMENT INTR UN WISHLIST*/
        }
        else{
            favourite_icon.src='MainMenu/white_star.png'
            wishList = false
            /*AICI TREBUIE SA FAC O FUNCTIE SI SA SCOT FIECARE ELEMENT DIN WISHLIST*/

        }
    })
    
})
