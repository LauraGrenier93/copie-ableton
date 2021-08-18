let handle = {
    handleMenu: (event) => {
        event.target.classList.toggle('open');

        document.querySelector('.menu-lists').classList.toggle('open');

        let logoUpright = document.querySelectorAll('.logo-upright');
        logoUpright.forEach(line=>line.classList.toggle('open'));

        let logoHorizontally = document.querySelectorAll('.logo-horizontally');
        for(line of logoHorizontally){
            line.classList.toggle('open');
        }
        document.querySelector('.separation').classList.toggle('open');

        init:()=> {
            nav.menu();
        }
    },
}