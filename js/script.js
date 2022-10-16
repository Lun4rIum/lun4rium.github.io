document.getElementById('searchbar').value = "";

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

const searchIcon = document.getElementById("searchIcon")
open=false
searchIcon.addEventListener("click", function toggleSearchBar() {
  if (open == false){
    document.getElementById("searchbar").style="display: unset;"
    open = true
  } else{
    document.getElementById("searchbar").style="display: none;"
    open = false
  }
});

function search(){

  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchbar');
  filter = input.value.toUpperCase();
  elements = document.getElementsByClassName("searchable");

  for (i = 0; i < elements.length; i++) {

    a = elements[i].getElementsByTagName("p")[0];
    txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      elements[i].style.display = "";

    } else {
      elements[i].style.display = "none";
      
    };
    
    if (txtValue.toUpperCase().indexOf(filter) == -1) {
      document.getElementById("noResult").style = "display: unset";
    } else{
      document.getElementById("noResult").style = "display: none";
    };

  }
  
};



var modeButton = document.getElementById("modeIcon");

  modeButton.addEventListener("click", function toggleSearchBar() {
    document.body.classList.toggle('light-mode');
    
});