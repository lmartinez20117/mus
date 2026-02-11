let canço1 = new Audio("./morado.mp3")
let canço2 = new Audio("./francisco.mp3")
let canço3 = new Audio("./bb.mp3")

document.getElementById("Musica 1").addEventListener("click",function(){

    canço1.play();
})
document.getElementById("Musica 2").addEventListener("click",function(){

    canço2.play();
})
document.getElementById("Musica 3").addEventListener("click",function(){

    canço3.play();
})
document.getElementById("Stop1").addEventListener("click",function(){
    canço1.pause();
})
document.getElementById("Stop2").addEventListener("click",function(){
    canço2.pause();
})
document.getElementById("Stop3").addEventListener("click",function(){
    canço3.pause();
})

document.addEventListener("keydown",function (e){
    if(e.key == "a"){
        let so = new Audio("./sonido 1.mp3");
        so.play()
    }
    if(e.key == "b"){
        let so = 
        so.play()
    }

})