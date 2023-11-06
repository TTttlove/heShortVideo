function playPause(){
    var video = document.getElementById("video");
    if(video.paused)
        video.play();
    else
        video.pause();
}

function makeBig(){
    var video = document.getElementById("video");
    video.width=900;
}

function makeNormal(){
    var video = document.getElementById("video");
    video.width=700;
}

function makeSmall(){
    var video = document.getElementById("video");
    video.width=420;
}
