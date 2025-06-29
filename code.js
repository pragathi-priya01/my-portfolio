function toggleDarkMode(){
    document.body.classList.toggle('dark-mode');
}
const audio = document.getElementById("bg-music");
const toggleBtn = document.getElementById("toggleMusic");
toggleBtn.addEventListener("click",function() {
    if (audio.paused) {
       audio.play().then(() => {
        toggleBtn.textContent = "Pause Background Music";
    }).catch((error) => {
        alert("playback failed.try tapping again");
        console.log(error);
    });
} else{
    audio.pause();
    toggleBtn.textContent ="Play Background Music";
}
});
    