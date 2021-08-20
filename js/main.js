let main = {
    init:()=> {
        nav.menu();
        video.createButton();
        nav.displayMenu();
    }
}

document.addEventListener("DOMContentLoaded",main.init);