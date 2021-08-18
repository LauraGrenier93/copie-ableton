let video = {
    playPauseMedia: (event) => {
        if(media.paused) {
            event.target.classList.add("play-in-progress");
            event.target.setAttribute('data-icon','u');
            media.play();
          } else {
            event.target.setAttribute('data-icon','P');
            event.target.classList.remove("play-in-progress");
            media.pause();
          }
    },
    
    createButton:() => {
        let play = document.querySelector('.play');
        controlesBox = document.querySelector(".controller");
        controlesBox.removeAttribute("hidden");
        controlesBox.style.visibility = 'visible';

        media = document.querySelector(".main-video");
        media.removeAttribute("controls");

        play.addEventListener("click", video.playPauseMedia);
    }
}