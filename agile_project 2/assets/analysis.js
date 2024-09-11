const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector("#nav-toggle");
const entryBtn = document.querySelector(".entry_btn");
const entryBtnShow = document.querySelector(".embed_ul");
const searchBtn = document.querySelector(".bx-search");


closeBtn.addEventListener("click", function() {
    sidebar.classList.toggle("open")
    menuBtnChange()
})

// searchBtn.addEventListener("click", function() {
//     sidebar.classList.toggle("open")
//     menuBtnChange()
//     console.log(menuBtnChange())
// })

// entryBtn.addEventListener("click", function() {
//     showContent();

//     console.log(showContent())

// })


function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right")
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu")
    }
}


///////////////////////////////////////////////

/*===== EXPANDER MENU  =====*/
const showMenu = (toggleId, navbarId, bodyId) => {
    const toggle = document.getElementById(toggleId),
        navbar = document.getElementById(navbarId),
        bodypadding = document.getElementById(bodyId)

    if (toggle && navbar) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('expander')

            bodypadding.classList.toggle('body-pd')
        })
    }
}
showMenu('nav-toggle', 'navbar2', 'body-pd')

/*===== LINK ACTIVE  =====*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink() {
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}
linkColor.forEach(l => l.addEventListener('click', colorLink))


/*===== COLLAPSE MENU  =====*/
const linkCollapse = document.getElementsByClassName('collapse__link')
var i

for (i = 0; i < linkCollapse.length; i++) {
    linkCollapse[i].addEventListener('click', function() {
        const collapseMenu = this.nextElementSibling
        collapseMenu.classList.toggle('showCollapse')

        const rotate = collapseMenu.previousElementSibling
        rotate.classList.toggle('rotate')
    })
}