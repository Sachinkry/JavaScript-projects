const musicData = [
    {
        name: 'ukulele',
        artist: 'Benzenes',
        img: 'ukulele.jpg',
        audio: 'ukulele.mp3',
    },
    {
        name: 'hey',
        artist: 'Lido',
        img: 'hey.jpg',
        audio: 'hey.mp3',
    },
    {
        name: 'summer',
        artist: 'Galactica',
        img: 'summer.jpg',
        audio: 'summer.mp3',
    },
]

let musicDataIndex = 0;
let isPlaying = false;

const nameEl = document.querySelector('.music-name');
const artistEl = document.querySelector('.music-artist');
const imgEl = document.getElementById('img');
const audioContainerEl = document.querySelector('.audio-container');

const audioEl = document.getElementById('audio');
const prevEl = document.getElementById('prev-btn');
const playEl = document.getElementById('play-btn');
const nextEl = document.getElementById('next-btn');

// audioEl.play();

playEl.addEventListener('click', () => {


    if (isPlaying) {
        audioEl.pause();
        isPlaying = false;
        // playEl.classList.remove('fa-solid fa-circle-pause');
        // playEl.classList.add('fa-solid fa-circle-play');
        playEl.classList.toggle("fa-solid fa-circle-play");

    } else {
        audioEl.play();
        isPlaying = true;
        playEl.classList.toggle("fa-solid fa-circle-pause");
    }
});

function changeIcon() {
    playEl.classList.replace("fa-circle-play", "fa-circle-pause");
}


// next song function
nextEl.addEventListener('click', () => {

    if (musicDataIndex == 2) {
        musicDataIndex = 0;
    } else {
        musicDataIndex++;
    }

    nameEl.innerHTML = `${musicData[musicDataIndex].name}`;
    artistEl.innerHTML = `${musicData[musicDataIndex].artist}`;
    imgEl.src = `images/${musicData[musicDataIndex].img}`;
    audioEl.src = `music/${musicData[musicDataIndex].audio}`;
    audioEl.play();
    isPlaying = true;

});


// play song function
// function playSong() {
//     audioEl.play();
// }

// prev song function
prevEl.addEventListener('click', () => {

    if (musicDataIndex == 0) {
        musicDataIndex = 2;
    } else {
        musicDataIndex--;
    }

    nameEl.innerHTML = `${musicData[musicDataIndex].name}`;
    artistEl.innerHTML = `${musicData[musicDataIndex].artist}`;
    imgEl.src = `images/${musicData[musicDataIndex].img}`;
    audioEl.src = `music/${musicData[musicDataIndex].audio}`;
    audioEl.play();
    isPlaying = true;
})


