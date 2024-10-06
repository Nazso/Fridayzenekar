const menuVisibility = document.querySelector('.hamb_menu_cont');

function letVisible() {
    
    // menuVisibility.style.visibility = "visible"

    if (menuVisibility.style.display === "none") {
        menuVisibility.style.display = "block"
        
    } else {
        menuVisibility.style.display = "none"

    }
    // alert("It is clicked!")
}