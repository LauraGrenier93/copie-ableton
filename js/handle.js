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
    },

    handleDisplayMenu:() => {
            console.log('la page est scrollée');
            console.log('window.pageXOffset', window.pageXOffset);
            console.log('window.pageYOffset', window.pageYOffset);
            if(window.pageYOffset<100){
                console.log("document.querySelector('.nav-container-fixe'",document.querySelector('.nav-container-fixe'));
                document.querySelector('.nav-container-fixe').classList.add('hide');
            } else {
                document.querySelector('.nav-container-fixe').classList.remove('hide');
            }
    },
}