var modeButton = document.getElementById("modeIcon");

  modeButton.addEventListener("click", function toggleSearchBar() {
    document.body.classList.toggle('light-mode');
    
});

var btnContainer = document.getElementById("topNav");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


var youtubeIcon = document.getElementById("youtubeIcon");

    youtubeIcon.addEventListener("click", function redirectYoutube() {
        window.open("https://youtube.com/Lun4rIum","_newtab")
    
});


var githubIcon = document.getElementById("githubIcon");

    githubIcon.addEventListener("click", function redirectGithub() {
        window.open("https://github.com/Lun4rIum","_newtab")
    
});