// fade in after intro movie
document.getElementById('title_video').addEventListener(
    'ended',
    function() {

        // preserve body height
        const body_height = document.getElementById('title_video').clientHeight + "px";
        for (const element of ['body', 'landing_cover']) {
            document.getElementById(element).style.height = body_height;
        }
        
        // fade-out loading screen
        $("#loading_screen").fadeOut(1000);

        // fade-in header/footer
        $("#header").fadeTo(1000, 1);
        $("#footer").fadeTo(1000, 1);

        // make video cover image visible
        document.getElementById("video_cover").style.opacity = 1;
    },
    false
);

// click cover to play video
$('#landing_cover').click(function(){
    $('#landing_cover').fadeOut(1);
    document.getElementById("main_video").style.opacity = 1;
    document.getElementById("landing_video").play();
})
