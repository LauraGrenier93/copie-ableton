let nav  = {
    /**
     * add listener to menu
     */
    menu:()=>{
        document.querySelector(".nav-menu").addEventListener("click", handle.handleMenu);       
    },

    displayMenu:()=>{
        window.addEventListener('scroll', handle.handleDisplayMenu);
    }
}
