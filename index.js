
function home() {
    console.log("clicked on home section")
}
function about() {
    console.log("clicked on about section")
}
//-------------------------song section-------------------------------
function firstsong() {
    console.log("clicked first song");
}
function secondsong() {
    console.log("clicked second song.");
}
function thirdsong() {
    console.log("clicked third song");
}
function fourthsong() {
    console.log("clicked fourth song")
}
function fifthsong() {
    console.log("clicked fifth song")
}
function sixthsong() {
    console.log("clicked sixth song");
}

let songs = ["1.mp3", "2.mp3", "3.mp3", "4.mp3", "5.mp3", "6.mp3"]
console.log(songs)
//-----------------------progress bar-----------------------------------------
// This function will be callled everytime when the song is playing/progressing
const audioplayer = document.querySelector('#audioplayer')
const currenttimeofsong = document.querySelector('#currenttime')
const totaldurationofsong = document.querySelector('#totalduration')
const progressbar = document.querySelector('#progressbar')

/*function roundoff(){
    let number = x.y;
    if(y>=5){
        let res1 = x+1 ;
        return(res1)
    }
    else{
        let res =x ;
        return(x)
    }
}*/

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let extraSeconds = seconds % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    extraSeconds = extraSeconds < 10 ? "0" + Math.floor(extraSeconds) : Math.floor(extraSeconds);
    return (minutes + ":" + extraSeconds)
}

function audioPlayerTimeUpdate() {
    //console.log("Current and Total song duration: ", audioplayer.currentTime, audioplayer.duration);
    // Now update the html elements to display this information
    const currentTime = audioplayer.currentTime;
    //const formattedTime = formatTime(currentTime);
    currenttimeofsong.innerText = formatTime(audioplayer.currentTime);
    //console.log(currenttimeofsong.innerText);
      /*(//console.log("current time is: ", currenttime)
    //const formattedtime = formatTime(currenttimeofsong);
    
    //console.log("Formated time is:",formattedtime)
    
    //currenttimeofsong.innerText;
    //currenttimeofsong.innertext = currenttime;
    //console.log(currenttimeofsong);)
    //setInterval(audioPlayerTimeUpdate, 1000);*/

    totaldurationofsong.innerText = formatTime(audioplayer.duration);
    //console.log(totaldurationofsong.innerText);

    progressbar.value = currentTime;

    
   
    //console.log(formattedTime);
}




//------------------button section---------------------------------------------
let currentSongIndex = 0;

function rewindButtonClickHandler() {
    console.log("Rewind button clicked!!!!");

    if (currentSongIndex > 0) {
        currentSongIndex = currentSongIndex - 1;
        console.log(currentSongIndex);


        audioplayer.src = songs[currentSongIndex];
        console.log
        playButtonClickHandler();
    }
    else {
        currentSongIndex = songs.length - 1;
        audioplayer.src = songs[currentSongIndex]
        playButtonClickHandler();
    }
}

const buttonplay = document.querySelector('#buttonplay')
audioplayer.src = songs[currentSongIndex];

const playButtonClickHandler = () => {
    //TODO: impelent play and pause functionality
    if (audioplayer.paused) {
        audioplayer.play()
        buttonplay.src = "pause.png"
    }
    else {
        audioplayer.pause()
        buttonplay.src = "play-button.png"
    }
}
/*
// Get the html tag
const playButton = document.querySelector(".playbutton");

// register event handler/listner
playButton.addEventListener("click", playButtonClickHandler);*/

function forwardButtonClickHandler() {
    console.log("forward button clicked!!!!!");

    if (currentSongIndex < (songs.length - 1)) {
        currentSongIndex = currentSongIndex + 1;

        audioplayer.src = songs[currentSongIndex];
        playButtonClickHandler();
        console.log("Song playing is", + songs[currentSongIndex])
    }
    else {
        currentSongIndex = 0;
        audioplayer.src = songs[currentSongIndex];
        playButtonClickHandler();
    }
}

