const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// const video = [
//     {
        
//     }
// ]

const app = (() => {
    const active = $('.active')
    const link = $('.link')
    const banner = $$('.banner .logo')
    console.log($('#radio1'))
    const interact = $('.generous .content .evaluate .fa-heart')
    const generous = $('.generous')
    const open = $('header .bars .fa-bars')
    const menu = $('aside .menu')
    const close = $('.menu .page_menus .close')
    console.log(close)
    

    let current = 1

    return {
        handlEvents() {
            link.addEventListener('click', function(e) {
                const a = e.target.closest('.link a')

                if(a) {
                    $('.active').classList.remove('active')
                    a.classList.add('active')
                }
            })

            generous.addEventListener('click', function(e) {
                const films = e.target.closest('.film')

                if(films) {
                    films.setAttribute('href', './video.html')
                }
            })

            open.addEventListener('click', function() {
                menu.style.width = '100%'
            })

            close.addEventListener('click', function() {
                menu.style.width = '0%'
            })
        },
        swiper() {
            setInterval(function() {
                document.getElementById('radio' + current).checked = true
                ++current
                if(current > 4) {
                    current = 1
                }
            }, 3000)



            // var swiper = new Swiper('.slider', {
            //     cssMode: true,
            //     autoplay: {
            //         delay: 3000,
            //         disableOnInteraction: false,
            //     },
            //     navigation: {
            //       nextEl: ".swiper-button-next",
            //       prevEl: ".swiper-button-prev",
            //     },
            //     pagination: {
            //       el: ".swiper-pagination",
            //     },
            //     mousewheel: true,
            //     keyboard: true,
            //   });
        },
        innit() {
            this.handlEvents()
            this.swiper()
        }
    }
})()

app.innit()

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c12a5a0cd0msh5e4b022be5b4ac9p1381b3jsnf95ad2f99552',
// 		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
// 	}
// };


// fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));