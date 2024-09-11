        /* When the user clicks on the button, toggle between hiding and showing the dropdown content */
        function menuFunction() {
            document.getElementById("menuDropdown").classList.toggle("show");
        }
        console.log(menuFunction);

        // Close the dropdown if the user clicks outside of it
        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementById("menuDropdown");
                console.log(dropdowns);
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];

                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }