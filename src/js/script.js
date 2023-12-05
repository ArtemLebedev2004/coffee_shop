let linesOfMenu = document.querySelector('.svg_lines_of_menu'),
    navMenu = document.querySelector('.nav_menu'),
    cross = document.querySelector('.svg_cross')

linesOfMenu.addEventListener('click', (e) => {
    navMenu.classList.toggle('hidden')
    linesOfMenu.classList.toggle('hidden')
    cross.classList.toggle('hidden')
})

cross.addEventListener('click', (e) => {
    navMenu.classList.toggle('hidden')
    linesOfMenu.classList.toggle('hidden')
    cross.classList.toggle('hidden')
})

// if (window.innerWidth >= 1024) {
//     // если matches содержит true, то выведется alert
//     linesOfMenu.classList.add('hidden')
//     navMenu.classList.remove('hidden')
// }

// window.addEventListener('resize', (e) => {
//     if (window.innerWidth >= 1024) {
//         // если matches содержит true, то выведется alert
//         linesOfMenu.classList.add('hidden')
//         navMenu.classList.remove('hidden')
//     } else {
//         linesOfMenu.classList.remove('hidden')
//         navMenu.classList.add('hidden')
//     }
// })
