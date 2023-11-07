//Flag variable for lockedScroll function
let scrollLock = true;

//Event Handlers for Site Size and Load
window.addEventListener("resize", toggleMenu);
window.addEventListener("load", toggleMenu);

//Function Burger Toggle Menu
function toggleMenu(){
    //Selecting Items and Saving Them in Variables
    let menuButton = document.querySelector(".navbar-bars");
    let menu = document.querySelector(".navbar-menu");
    let submenuButton = document.querySelector(".fa-solid.fa-chevron-down");
    let submenu = document.querySelector(".submenu");
    let barsIcon = document.querySelector(".fa-solid.fa-bars.fa-2xl");
    
    //Condition to apply the Toggle Menu functionality only for tablet and mobile
    if(window.innerWidth < 1000){
        toggleMenuAction(); 
    }
    else{
        return 0;
    }

    //Menu Toggle functionality
    function toggleMenuAction(){
        //Listening to "click" event to enable/disable the Menu
        menuButton.addEventListener("click", function(){
            if(menu.classList.contains("inactive")){
                menu.classList.remove("inactive");
                menu.classList.add("active");
                toggleSubmenuAction();
                toggleIcon();
                lockedScroll();
            }
            else{
                menu.classList.remove("active");
                menu.classList.add("inactive");
                toggleSubmenuAction();
                toggleIcon();
                lockedScroll();
            }
        });
    }

    //Submenu Toggle functionality
    function toggleSubmenuAction(){
        //Listening to "click" event to enable/disable the Submenu
        submenuButton.addEventListener("click", function(){
            if(submenu.style.display === "none" || submenu.style.display === ""){
                submenu.style.display = "block";
                submenuButton.className= "";
                submenuButton.classList.add("fa-solid", "fa-chevron-up");
            }
            else{
                submenu.style.display = "none";
                submenuButton.className= "";
                submenuButton.classList.add("fa-solid", "fa-chevron-down");
            }
        });
    }

    //Toggle functionality of Icon Bars and XMark
    function toggleIcon(){
        if(barsIcon.classList.contains("fa-bars")){
            barsIcon.className= "";
            barsIcon.classList.add("fa-solid", "fa-xmark", "fa-2xl");
        }
        else{
            barsIcon.className= "";
            barsIcon.classList.add("fa-solid", "fa-bars", "fa-2xl");
        }
    }

    //Functionality to block/unlock scrolling
    function lockedScroll(){
        if(scrollLock){
            document.body.style.overflow = "hidden";
        }
        else{
            document.body.style.overflow = "auto";
        }
        scrollLock = !scrollLock;
    }
     
}
