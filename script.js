
function replcePara(){
    var width=window.innerWidth
    var paracontainer=document.getElementById("para-container")
paracontainer.innerHTML=""
    var para=""
    if(width > 400){
        para="Lorem ipsum dolor sit amet consectetur.Porttitor leo eros in urna id. Tortor amet non libero tellus adipiscing nibh est enim purus. "
        var newPara=document.createElement("p")
        newPara.innerText=para
        paracontainer.appendChild(newPara)
    }
    else{
        para=""
    }

    
}

replcePara()
window.addEventListener("resize", replcePara);







