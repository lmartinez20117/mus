document.getElementById("Musica 1").addEventListener("click",function(){
    let canço = new Audio("./morado.mp3")
    canço.play();
})
document.getElementById("Musica 2").addEventListener("click",function(){
    let canço = new Audio("./francisco.mp3")
    canço.play();
})
document.getElementById("Musica 3").addEventListener("click",function(){
    let canço = new Audio("./bb.mp3")
    canço.play();
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