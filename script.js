var icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("darkMode");
    if(document.body.classList.contains("darkMode")){
        icon.src = "Images/sun.png"
    }
    else{
        icon.src = "Images/moon.png"
    }
}