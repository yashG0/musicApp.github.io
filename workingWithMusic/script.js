const play = document.getElementById('play');
const music = document.querySelector('audio');
const img = document.querySelector("img");
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const prev = document.getElementById('back');
const next = document.getElementById('ford');

isPlaying = false;

const pauseMusic = ()=> {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
    img.classList.add("anime");
};


// for pause functionality -
const playMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
    img.classList.remove("anime");
};

const songs = [
    {
        name:"m_01",
        title:"Joker",
        artist:"indila",
        img: "img_01"
    },
    {
        name:"m_02",
        title:"faded",
        artist:"Alan Walker",
        img: "img_02"
    },
    {
        name:"m_03",
        title:"Childhood",
        artist:"Rauf & falk",
        img: "img_03"
    },
    {
        name:"m_04",
        title:"Carol of the Bell",
        artist:"Lindsey Stirling",
        img: "img_04"
    }
]


play.addEventListener('click',()=>{
    if(isPlaying){
        playMusic();
    }
    else{
        pauseMusic();
    }
});

// changing the music-title and name -

const loadSongs = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/"+songs.name+".mp3";
    img.src = "img/"+songs.img+".jpg";
};

// loadSongs(songs[0]);
let songIndex = 0;

const nextSong = () => {
    songIndex = (songIndex+1) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
}

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length)%songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
}


next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);