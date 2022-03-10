// general function for toggling blocks
function show_block(prefix) {
    return function() {

        // reset other blocks
        for (var p of ["video", "read", "pnp"]) {

            // de-highlight buttons
            document.getElementById(p + "_button").classList.remove("clicked");

            // hide thumbnails
            document.getElementById(p + "_thumbnails").style.display = "none";
        }
        
        // highlight button
        document.getElementById(prefix + "_button").classList.add("clicked");

        // show thumbnails
        document.getElementById(prefix + "_thumbnails").style.display = "block";
    }
}

// set jqueries
for (var prefix of ["video", "read", "pnp"]) {
    $("#" + prefix + "_button").click(show_block(prefix));
}
