

const commentcontainer = document.getElementById('comments-container')

function swipeRight() {
    commentcontainer.classList.add('scroll-comment')
    
}


function swipeLeft() {
    commentcontainer.classList.remove('scroll-comment')
    
}


const menu = document.getElementById('nav-link-container')
const bars = document.getElementById('fa-bars')
const cross = document.getElementById('fa-x')


function showMenu() {
    menu.classList.toggle('menu-active')

    if (cross.style.display == "none") {
       bars.style.display = "none"
    cross.style.display = "initial" 

    }

    
    else if (cross.style.display !== "none") {
       bars.style.display = "initial"
    cross.style.display = "none" 

    }
    
}
