const box =document.getElementById("box");
const counter =document.getElementById("counter");
let count= 0;
let countChecker = count;
counter.innerText = count;
let opac = 1;
const cont = document.getElementById("container");

const startingMinutes = 1;
let time = startingMinutes * 60;
let timeChecker = time
const countdownEl = document.getElementById("timer");
const gameover = document.getElementById("gameover");
const reset = document.getElementById("reset");
const highscoreh1 = document.getElementById("highscore");

let highScore = 0;

setInterval(updateCountdown, 1000);

function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time %60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    timeChecker--;
    time--;
    

   

    if (time < 0) {
        gameover.classList.add("active");
        countdownEl.innerText = "0:00";
        let gamehighScore = count;
        if (gamehighScore > highScore){
             highScore = gamehighScore
            }
        highscoreh1.innerText = `High Score: ${highScore} \n Current Score: ${gamehighScore}`;

        reset.addEventListener("click",()=>{
            gameover.classList.remove("active");
            time = startingMinutes*60;
           
            count = 0;
            counter.innerText = count;
            box.style.background = bgChagner(1);
           
            
        })

        /*document.body.style.background= "black";
        document.body.innerText = "Game over";
        document.body.style.color= "white";
        document.body.innerText = "Game over, Your final score:" + count;*/

    }

    console.log(timeChecker);
        console.log(time);

    if ( timeChecker != (time) ){
        createNote2(); /* ADD JAMAL HERE */
        time = 60;
        timeChecker=time;
        time=timeChecker;
        
        highScore = -20;
        
    }

 }



    box.addEventListener("click", () =>{
        console.log(countChecker)
        console.log(count)
        if (countChecker != count){
            alert("you are a bad person")
            count = -20;
           
        }
        count++;
        countChecker = count;
        
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

    notif.innerHTML="<img src=\"johncenanoneck.png\" height = \"150\">";

    cont.appendChild(notif);


    setTimeout(() => {
        notif.remove();
    }, 5000);
}

function createNote2(){
    const notif = document.createElement("div");
    notif.classList.add("toast");

    notif.innerHTML="<img src=\"https://i.imgflip.com/22s4ze.jpg\" height = \"550\">";

    cont.appendChild(notif);


    setTimeout(() => {
        notif.remove();
    }, 5000);
}
