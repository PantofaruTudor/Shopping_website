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
    {brand: 'Barbour', name: 'Leather Wax Jacket', price: 100, image: ["items/item1.jpg", "items/item2.jpg"], sale: true},
    {brand: 'Carhartt', name: 'Cuban Keychain', price: 50, image: ['items/item2.jpg', 'items/item3.jpg'], sale: false},
    {brand: 'Carhartt', name: 'Basic Shirt', price: 200, image: ['items/item3.jpg', 'items/item4.jpg'], sale: true},
    {brand: 'Maison-Mihara', name: 'Low-Top Sneakers', price: 150, image: ['items/item4.jpg', 'items/item5.jpg'], sale: false},
    {brand: "Levi's", name: 'Pattern Jeans', price: 75, image: ['items/item5.jpg', 'items/item6.jpg'], sale: true},
    {brand: "Levi's", name: 'Baggy Jeans', price: 100, image: ['items/item6.jpg', 'items/item7.jpg'], sale: false},
    {brand: 'Adidas', name: "Samba 00's", price: 50, image: ['items/item7.jpg', 'items/item8.jpg'], sale: true},
    {brand: 'Carhartt', name: 'Denim Jacket', price: 25, image: ['items/item8.jpg', 'items/item9.jpg'], sale: false},
    {brand: 'Undercover', name: 'Distressed Cap', price: 75, image: ['items/item9.jpg', 'items/item10.jpg'], sale: true},
    {brand: 'Asics', name: 'Running Shoes', price: 100, image: ['items/item10.jpg', 'items/item11.jpg'], sale: false}, 
    {brand: 'Hoka', name: 'Runnning Shoes', price: 100, image: ["items/item11.jpg", "items/item12.jpg"], sale: true},   
    {brand: 'Kenzo', name: 'Soft Cardigan', price: 50, image: ['items/item12.jpg', 'items/item13.jpg'], sale: false},
    {brand: 'Adidas', name: 'jacket', price: 200, image: ['items/item13.jpg', 'items/item14.jpg'], sale: true},
    {brand: 'Nike', name: 'shoes', price: 150, image: ['items/item14.jpg', 'items/item15.jpg'], sale: false},
    {brand: 'Rick-Owens', name: 'Sneakers', price: 75, image: ['items/item15.jpg', 'items/item16.jpg'], sale: true},
    {brand: 'Reebok', name: 't-shirt', price: 100, image: ['items/item16.jpg', 'items/item17.jpg'], sale: false},
    {brand: 'Adidas', name: 'Running Shoes', price: 50, image: ['items/item17.jpg', 'items/item18.jpg'], sale: true},
    {brand: 'New-Balance', name: 'hat', price: 100, image: ['items/item18.jpg', 'items/item19.jpg'], sale: false},
    {brand: 'Vans', name: 'shoes', price: 50, image: ['items/item19.jpg', 'items/item20.jpg'], sale: true},
    {brand: 'Converse', name: 'jacket', price: 25, image: ['items/item20.jpg', 'items/item1.jpg'], sale: false},

    {brand: 'Aries', name: '2096 longsleeve', price: 100, image: ["items/upcoming1.jpg"], upcoming: true, sale:false, release:'2025-03-10T12:00:00'},
    {brand: 'Taurus', name: 'shirt', price: 50, image: ['items/upcoming2.jpg'] , upcoming: true, sale:false, release:'2025-03-12T12:00:00'},
    {brand: 'Rick Owens', name: 'hoodie', price: 200, image: ['items/upcoming3.jpg'] , upcoming: true , sale:false, release:'2025-03-15T12:00:00'},
    {brand: 'Gucci', name: 'pants', price: 150, image: ['items/upcoming4.jpg'] , upcoming: true , sale:false, release:'2025-03-10T12:00:00'},
    {brand: 'Prada', name: 't-shirt', price: 75, image: ['items/upcoming5.jpg'] , upcoming: true , sale:false, release:'2025-03-10T12:00:00'},
    {brand: 'Rick Owens', name: 'jacket', price: 100, image: ['items/upcoming6.jpg'], upcoming: true ,sale:false, release:'2025-03-10T12:00:00'},
    {brand: 'Aries', name: 'shirt', price: 50, image: ['items/upcoming7.jpg'], upcoming: true , sale:false, release:'2025-03-10T12:00:00'},
    {brand: 'Gucci', name: 'jacket', price: 25, image: ['items/upcoming8.jpg'], upcoming: true, sale:false, release:'2025-03-10T12:00:00'},
];
const productGrid = document.querySelector('.noutati-item-grid')
const SalesProductGrid = document.querySelector('.sales-item-grid')
const upcomingProductGrid = document.querySelector('.upcoming-item-grid')
products.forEach(product => {
    const productItem = document.createElement('div')
    productItem.className = "product-item"
    productItem.innerHTML = `
        <a href="https://www.lego.com/ro-ro"></a>
        <img class="main_image" src=${product.image[0]} alt=${product.name}>
        
        <div class="item-favourite-name-box">
            <p>${product.brand}</p>
            <h2>${product.name}</h2>
            <div class="item-price-favourite-box">
                <div class="item-price">
                    <p id="full-price">${product.price}$</p>
                </div>
                <button class="favourite-item">
                    <img src="MainMenu/white_star.png" alt="favourite">
                </button>
            </div>
        </div>
    `

    if(product.sale == true){
        const productItemDiv = productItem.querySelector('.item-price')
        productItemDiv.innerHTML += `<p style="color: red">${Math.floor(product.price - 0.3*product.price)}$</p>`
        SalesProductGrid.appendChild(productItem)
    }
    else if(product.upcoming == true)
        upcomingProductGrid.appendChild(productItem)
    else
        productGrid.appendChild(productItem)
})




const allProducts = document.querySelectorAll('.product-item .main_image')
allProducts.forEach(product => {
    const productItem = product.closest('.product-item')
    const isInSalesGrid = productItem.closest('.sales-item-grid') !== null
    const isInProductGrid = productItem.closest('.noutati-item-grid') !== null
    const productIndex_noutati = Array.from(productGrid.children).indexOf(productItem)
    const productIndex_sales = Array.from(SalesProductGrid.children).indexOf(productItem)
    const productIndex= products.findIndex(product => product.name === productItem.querySelector('h2').innerHTML)
    product.addEventListener('mouseenter', () => {
        if(isInSalesGrid)
            product.src = products[productIndex].image[1]
        else if(isInProductGrid){
            product.src = products[productIndex].image[1]
        }
    })
    product.addEventListener('mouseleave', () => {
        if(isInSalesGrid)
            product.src = products[productIndex].image[0]
        else if(isInProductGrid)
            product.src = products[productIndex].image[0]
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

//Timer to display how much time is left until items appear//////////////////////////
const productsLength = products.length
const upcomingProdLength = products.filter(product => product.upcoming == true).length

const upcomingItems = document.querySelectorAll('.upcoming-item-grid .product-item')

function UpcomingItemsTimer(){

    upcomingItems.forEach(item => {
        const productName = item.querySelector('h2').innerHTML
        const productIndex = products.findIndex(product => product.name === productName)
        const now = new Date().getTime()
        
        const releaseDate = new Date(products[productIndex].release)
        const remaining = releaseDate - now
        const days = Math.floor(remaining / (1000 * 60 * 60 *24))
        const hours = Math.floor((remaining % (1000 * 60 * 60 *24)) / (1000 * 60 * 60))
        const minutes = Math.floor((remaining % (1000 * 60 * 60 )) / (1000 * 60))
        const seconds = Math.floor((remaining % (1000 * 60 ))/ 1000)

        let timeLeftElement = item.querySelector('.upcoming_item_timer')
        if(timeLeftElement)
            timeLeftElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`
        else{
            timeLeftElement = document.createElement('div');
            timeLeftElement.classList.add('upcoming_item_timer');
            item.appendChild(timeLeftElement)
            timeLeftElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`

        }
    })
}

UpcomingItemsTimer()
setInterval(UpcomingItemsTimer, 1000)
    
    

function next_upcoming_item(){
    const upcomingItemWidth = upcomingGrid.querySelector('.product-item').clientWidth
    upcomingGrid.scrollBy({left: upcomingItemWidth + 20, behavior: 'smooth'})
    console.log(upcomingItemWidth)
}

const upcoming_scroll_left = document.querySelector('.previous')
const upcoming_scroll_right = document.querySelector('.upper')
const upcomingGrid = document.querySelector('.upcoming-item-grid')
const itemWidth = 400
upcoming_scroll_right.addEventListener('click', () => {
    upcomingGrid.scrollBy({left: itemWidth , behavior: 'smooth'})
})

upcoming_scroll_left.addEventListener('click', () => {
    upcomingGrid.scrollBy({left: -itemWidth , behavior: 'smooth'})
})

if (upcomingGrid.scrollLeft === 0) {
    upcoming_scroll_left.style.display = 'none';
} else {
    upcoming_scroll_left.style.display = 'block';
}

news = [
    {title: 'Jacob & Co. and G-Dragon Celebrate South Korea Boutique Opening', 
        date: '2025-03-10T12:00:00', 
        image: 'news/news1.png'},
    {title: 'Avirex Celebrates 50th Anivversary With Limited-Edition Hellstar Collab', 
        date: '2025-03-12T12:00:00', 
        image: 'news/news2.png'},  
    {title: 'Moncler Genius x FRGMT Collection Reimagines Everyday Wear', 
        date: '2025-03-15T12:00:00',
        image: 'news/news3.png'},
    {title: 'Breaking Down Supreme SS25',
        date: '2025-03-10T12:00:00',
        image: 'news/news4.png'},
]

const newsGrid = document.querySelectorAll('.article-grid div')
newsGrid.forEach((article, index) => {
    const releaseDate = new Date(news[index].date)
    const daysAgo = Math.floor((new Date() - releaseDate) / (1000 * 60 * 60 * 24)) * (-1)
    article.innerHTML = `
        <img src=${news[index].image} alt=${news[index].title}>
        <div class="article-text">
            <h2 style="font-weight:300;">${news[index].title}</h2>
            <p>${daysAgo} days ago</p>
        </div>
    `
})