console.log("Spotify Clone initialized");

let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let currentSong = document.getElementById('currentSong');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Let me love you - Justin Bieber", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "We don't talk anymore - Charlie Puth", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Rockbae - DIVINE", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Attention - Charlie Puth", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Alone - Alan Walker", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Wanna be yours - Arctic Monkeys", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Back it up - DIVINE", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Gangnam Style - PSY", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Cupid - Fifty Fifty", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "True Love - Coldplay", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
];

// Initialize song items
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName.split(' - ')[0];
});

// Play/pause toggle
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

// Update progress bar
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = songs[songIndex].filePath;
        currentSong.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    });
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    playSong(songIndex);
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex -= 1;
    }
    playSong(songIndex);
});

const playSong = (index) => {
    makeAllPlays();
    audioElement.src = songs[index].filePath;
    currentSong.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
    
    // Update play button for the current song
    document.getElementById(index).classList.remove('fa-circle-play');
    document.getElementById(index).classList.add('fa-circle-pause');
};

// Auto play next song when current ends
audioElement.addEventListener('ended', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    playSong(songIndex);
});