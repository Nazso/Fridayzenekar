const menuVisibility = document.querySelector('.hamb_menu_cont');

function letVisible() {
    // document.getElementsByClassName("hamb_menu_cont").style.visibility = visible;
    // document.getElementsByClassName("menu").style.backgroundColor = "red";
    // document.querySelectorAll(".hamb_menu_cont")
    // menuVisibility.innerHTML = "Hello World!"
    // menuVisibility.style.color = "yellow"

    // menuVisibility.style.visibility = "visible"

    if (menuVisibility.style.display === "none") {
        menuVisibility.style.display = "block"
        
    } else {
        menuVisibility.style.display = "none"

    }
    // alert("It is clicked!")
}