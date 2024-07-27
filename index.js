var text = ["test","test2","test3"]

function onHeartClicked() {
    document.getElementById("heart").style.opacity = "1";
    document.getElementById("heart").style.top = "50%";
    setTimeout(function () { 
        document.getElementById("title").style.display = "none";
        document.getElementById("textbutton").style.display = "none";
        
        document.getElementById("description").innerText = text[(Math.floor(Math.random() * text.length))]
        document.getElementById("heart").style.top = "125%";
        document.getElementById("heart").style.opacity = "0";
    }, 2500)
    
}