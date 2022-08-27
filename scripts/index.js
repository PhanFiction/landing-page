let isPlaying = false;
const myAudio = document.getElementById('myAudio');

function toggleMusic(id) {
    id.classList.toggle("fa-volume-high");
    id.classList.toggle("fa-volume-xmark");
    if(isPlaying) {
        isPlaying = false;
        myAudio.pause();
    }else {
        isPlaying = true;
        myAudio.play();
    }
}