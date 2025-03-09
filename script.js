const container = document.querySelector("#container");
const btn = document.querySelector("#btn");

for(let i=0 ; i<16*16 ; i++){
    const div = document.createElement("div")
    div.classList.add("div-item");
    container.appendChild(div);

    var color = ["#53e346","#242fd1","#c42798","#204ee6","#e63420","#d2e317","#086308","#de1d57","#6ee0ca"]; 

    div.addEventListener("mouseover",() =>{
        div.style.background = color[Math.floor(Math.random()*color.length)];
    });

}


btn.addEventListener('click',()=>{
    let size = parseInt(prompt("Please Enter the grid size"));
    if(size<100){
        container.innerHTML="";
        const grid = size * size ;
        console.log(grid);
    
        const gridSize = parseInt(960 / size) ;
        console.log(gridSize);
        for(let i=0 ; i<grid ; i++){
            const div = document.createElement("div")
            div.classList.add("div-item");
            container.appendChild(div);
            div.style.height =`${gridSize}px`;
            div.style.width = `${gridSize}px`;
            var color = ["#53e346","#242fd1","#c42798","#204ee6","#e63420","#d2e317","#086308","#de1d57","#6ee0ca"]; 
        
            div.addEventListener("mouseover",() =>{
                div.style.background = color[Math.floor(Math.random()*color.length)];
            });
        
        }
    }else{
        alert("please size will be below 100")
    }
});



