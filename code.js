function toggleDarkMode(){
    document.body.classList.toggle('dark-mode');
}
function playMusic(){
    const audio = document.getElementById("bg-music");
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
}