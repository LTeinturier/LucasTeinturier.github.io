var allowedKeys = {
    37:'ArrowLeft',
    38:'ArrowUp',
    39:'ArrowRight',
    40:'ArrowDown',
    65:'a',
    66:'b'
};

//the code sequence
var konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight',
                'ArrowLeft','ArrowRight','b','a'];
var position = 0;
// console.log(position)

document.addEventListener('keydown',function(e) {
    var myKey = allowedKeys[e.keyCode]; //keyCode is depreacted apparently, use .key
    var requiredKey = konamiCode[position];
    if (myKey === requiredKey){
        //move to the next key in the sequence
        position++;
        // if we reached the end
        if (position === konamiCode.length){
            // let elToRemove = document.getElementById("img1");//.style_display="none";
            // elToRemove.remove()
            activateCheats(); //see function below
            position = 0;
        }
    } else {
        position = 0; // because we didn't put the right sequence
    }
});

function activateCheats() {
    // document.getElementById("img1").style_display='none';
    // im1.parentNode.removeChild(im1);
    // document.body.style.backgroundImage = "url(images/cheatcode.jpg)";
    var audio = new Audio('audio/cheat.mp3');
    audio.play();

    // alert("Cheats activated");
}