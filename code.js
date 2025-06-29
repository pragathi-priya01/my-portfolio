function toggleDarkMode(){
    document.body.classList.toggle('dark-mode');
}
const audio = document.getElementById("bg-music");
const btn = document.getElementById("toggleMusic");
let isPlaying = false;
btn.addEventListener("touchstart",toggleMusic); 
btn.addEventListener("click",toggleMusic);
function toggleMusic() {
    if (!isPlaying) {
        audio.play().then(() => {
            isPlaying = true;
            btn.textContent = "Pause Background Music";
        }).catch ((err)  => {
        alert("playback failed.try tapping again.");
        console.error("playback failed:",err);
    }); 
} else {
    audio.pause();
    isPlaying = false
    btn.textContent ="Play Background Music";
}
}

    
    