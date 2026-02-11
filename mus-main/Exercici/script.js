let canço1 = new Audio("./morado.mp3")
let canço2 = new Audio("./francisco.mp3")
let canço3 = new Audio("./bb.mp3")

document.getElementById("Morado").addEventListener("click",function(){

    canço1.play();
})
document.getElementById("Francisco").addEventListener("click",function(){

    canço2.play();
})
document.getElementById("BB").addEventListener("click",function(){

    canço3.play();
})
document.getElementById("Stop Morado").addEventListener("click",function(){
    canço1.pause();
})
document.getElementById("Para francisco").addEventListener("click",function(){
    canço2.pause();})
document.getElementById("Stop BB").addEventListener("click",function(){
    canço3.pause();
})

document.addEventListener("keydown",function (e){
    if(e.key == "a"){
        let so = new Audio("./sonido 1.mp3");
        so.play()
    }
    if(e.key == "s"){
        let so = new Audio("./sonido 2.mp3");
        so.play()
    }
    if(e.key == "d"){
        let so = new Audio("./sonido 3.mp3");
        so.play()
    }

})