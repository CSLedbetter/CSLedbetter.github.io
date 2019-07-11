function flipCard() {
    var state = 1;
    if (state == 1) {
        document.getElementById("front").style.webkitTransform="rotateY(-180deg)";    
        document.getElementById("back").style.webkitTransform="rotateY(0deg)";
        state = 0;
    } else {
        document.getElementById("front").style.webkitTransform="rotateY(0deg)";    
        document.getElementById("back").style.webkitTransform="rotateY(180deg)";
        state = 1;
    }        
}