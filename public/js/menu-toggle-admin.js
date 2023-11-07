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
                toggleIcon();
                lockedScroll();
            }
            else{
                menu.classList.remove("active");
                menu.classList.add("inactive");
                toggleIcon();
                lockedScroll();
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
