const container = document.querySelector("#container");


for(let i=0 ; i<16*16 ; i++){
    const div = document.createElement("div")
    div.classList.add("div-item");
    container.appendChild(div);

    var color = ["#53e346","#242fd1","#c42798","#204ee6","#e63420","#d2e317","#086308","#de1d57","#6ee0ca"]; 

    div.addEventListener("mouseover",() =>{
        div.style.background = color[Math.floor(Math.random()*color.length)];
    });

}



