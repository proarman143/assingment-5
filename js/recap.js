const kbds = document.getElementsByClassName('kbd');
for (const kbd of kbds) {
    let clickCounter = 0;
    kbd.addEventListener("click", function () {
        kbd.removeEventListener("click", arguments.callee);
        
    });

}