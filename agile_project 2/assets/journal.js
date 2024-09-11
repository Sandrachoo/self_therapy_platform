///////////////////////////////////////////////

/*===== EXPANDER MENU  =====*/
const showMenu = (toggleId, navbarId, bodyId) => {
    const toggle = document.getElementById(toggleId),
        navbar = document.getElementById(navbarId),
        bodypadding = document.getElementById(bodyId)

    if (toggle && navbar) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('expander');
            bodypadding.classList.toggle('body-pd')
        })
    }
}
showMenu('nav-toggle', 'navbar2', 'body-pd')


const changeNavButton = (toggleId, sidebarcontent, searchcontent, searchcontent2, searchcontent3, homecontent, homecontent2, listcontent, listcontent2, functioncontent, functioncontent2, functioncontent3, functioncontent4, functioncontent5, functioncontent6, functioncontent7, functioncontent8) => {
    const toggle = document.getElementById(toggleId),
        content = document.getElementById(sidebarcontent),
        content2 = document.getElementById(searchcontent),
        content3 = document.getElementById(searchcontent2),
        content4 = document.getElementById(searchcontent3),
        content5 = document.getElementById(homecontent),
        content6 = document.getElementById(homecontent2),
        content7 = document.getElementById(listcontent),
        content8 = document.getElementById(listcontent2),
        content9 = document.getElementById(functioncontent),
        content10 = document.getElementById(functioncontent2),
        content11 = document.getElementById(functioncontent3),
        content12 = document.getElementById(functioncontent4),
        content13 = document.getElementById(functioncontent5),
        content14 = document.getElementById(functioncontent6),
        content15 = document.getElementById(functioncontent7),
        content16 = document.getElementById(functioncontent8)


    if (toggle && content) {
        toggle.addEventListener('click', () => {
            content.classList.toggle('content_expand');
            content2.classList.toggle('content_expand2');
            content3.classList.toggle('content_expand3');
            content4.classList.toggle('content_expand4');
            content5.classList.toggle('content_expand5');
            content6.classList.toggle('content_expand6');
            content7.classList.toggle('content_expand7');
            content8.classList.toggle('content_expand8');
            content9.classList.toggle('content_expand9');
            content10.classList.toggle('content_expand10');
            content11.classList.toggle('content_expand11');
            content12.classList.toggle('content_expand12');
            content13.classList.toggle('content_expand13');
            content14.classList.toggle('content_expand14');
            content15.classList.toggle('content_expand15');
            content16.classList.toggle('content_expand16')


        })
    }
}
changeNavButton('nav-toggle', 'nav-toggle', 'SearchInput', 'label', 'nav_name_search', 'home_icon', 'nav_name_home', 'list_icon', 'nav_name_list', 'dailychecker_icon', 'nav_name_daily', 'analyzetracker_icon', 'nav_name_analyze', 'journal_icon', 'nav_name_journal', 'quote_icon', 'nav_name_quote');


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


/*===== drop down font style  =====*/
// var changeFontStyle = function(font) {
//     document.getElementById(
//         "output-text").style.fontFamily = font.value;
// }


/*===== bold, italic, underline  =====*/

const buttons = document.querySelectorAll('button');
textField.document.designMode = "On";
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        let cmd = buttons[i].getAttribute('data-cmd');
        if (buttons[i].name === "active") {
            buttons[i].classList.toggle('active');
        }

        if (cmd === "createLink") {

            let url = prompt("Enter the link here: ", "http://");
            textField.document.execCommand(cmd, false, url);

        } else {
            textField.document.execCommand(cmd, false, null);
        }
    })
}


/*===== upload background image  =====*/




function upload() {
    var imgcanvas = document.getElementById("canv1");
    var fileinput = document.getElementById("upload-button");
    var image = new SimpleImage(fileinput);

    image.drawTo(imgcanvas);
}


/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
// function menuFunction() {
//     document.getElementById("menuDropdown").classList.toggle("show");
// }
// console.log(menuFunction);

// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementById("menuDropdown");
//         console.log(dropdowns);
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];

//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }