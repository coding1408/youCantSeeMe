const box =document.getElementById("box");
const counter =document.getElementById("counter");
let count= 0;
counter.innerText = count;
let opac = 1;
const cont = document.getElementById("container");

box.addEventListener("click", () =>{
    count++;
    box.style.top= Math.random()*95+"vh";
    box.style.left= Math.random()*95+"vw";
    counter.innerText = count;
    console.log(count%5)
    

    if (count%5 == 0){
        
        opac = 0;
        box.style.cursor = "default"
        createNote();
        
    }
    else if (count%5  == 3){
        box.style.transition  = "top 0s linear"

    }
    else{
        opac = 1;
        box.style.cursor = "pointer"
        box.style.transition = "top 0.25s linear"
       
    }
    box.style.background = bgChagner(opac);
    
});

function bgChagner(opac){
    return `rgba(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)} ,${Math.floor(Math.random()*256)}, ${opac})`;
}
function createNote(){
    const notif = document.createElement("div");
    notif.classList.add("toast");

    notif.innerHTML="<img src=\"johncenanoneck.png\">";

    cont.appendChild(notif);


    setTimeout(() => {
        notif.remove();
    }, 5000);
}