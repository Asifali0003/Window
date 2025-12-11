const contextMenu = document.getElementById('context-menu');
const startBtn = document.querySelector('.start-btn');
const startMenu = document.getElementById('start-menu');
const iconExplorer = document.getElementById('open-explorer');
const win = document.getElementById('window');
const header = document.getElementById('window-header');


document.addEventListener('contextmenu' , function(e){
    e.preventDefault();

    contextMenu.style.display = "block";
    contextMenu.style.top = e.pageY + "px";
    contextMenu.style.left = e.pageX + "px";

    startMenu.style.display = "none";
});

document.addEventListener('click' , function(e){
        contextMenu.style.display = "none";
    });


startBtn.addEventListener("click", function(){
    startMenu.style.display = 
    startMenu.style.display === "block" ? "none" : "block";
});

iconExplorer.addEventListener('dblclick', function(){
    win.style.display = "block";
    
});


let offsetX = 0, offsetY=0, isDown = false;

header.addEventListener('mousedown' , function(e){
    isDown = true;
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
});

document.addEventListener('mouseup' , function(){ 
    isDown = false;
});

document.addEventListener('mousemove' , function(e){
    if(isDown) {
    win.style.left = (e.clientX - offsetX) + "px";
    win.style.top = (e.clientY - offsetY) + "px";
    }
});

let date = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
const timeDisplay = document.querySelector('.taskbar-right')

timeDisplay.textContent = date;