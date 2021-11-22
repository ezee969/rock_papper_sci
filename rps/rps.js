function genRandomHand(){
    const rps=["rock","papper","scissor"];
    return rps[Math.floor(Math.random()*3)];
}

function playRound(playerSelection,computerSelection){
    if (playerSelection===computerSelection){
        return "tie";
    }
    else if (playerSelection==="rock"&&computerSelection==="scissor"||playerSelection==="papper"&&computerSelection==="rock"||playerSelection==="scissor"&&computerSelection==="papper"){
        return "win";
    }
    else{
        return "lose";
    }
}

function play(){
    winsP1=0;
    winsP2=0;
    const rpsElements = document.querySelectorAll(".container > div ");
        rpsElements.forEach(function(element){
            element.addEventListener("click",(e)=>{
                const manoComputadora=genRandomHand()
                document.getElementById("mano1").innerHTML=element.id
                document.getElementById("mano2").innerHTML=manoComputadora
                const result=playRound(element.id,manoComputadora);
                if (result == "win"){
                winsP1++;
                }
                else if (result == "lose"){
                    winsP2++;
                }
                document.getElementById("ronda").innerHTML=Number(document.getElementById("ronda").innerHTML)+1
                document.getElementById("puntaje1").innerHTML=winsP1
                document.getElementById("puntaje2").innerHTML=winsP2;
                if (winsP1>2 || winsP2>2){
                    const manos = document.querySelector(".manos")
                    document.getElementById("mano1").remove()
                    if (winsP1>winsP2){
                        document.getElementById("mano2").innerHTML="JUGADOR GANADOR"
                        }
                    else{
                        document.getElementById("mano2").innerHTML="COMPUTADORA GANADOR"
                    }
                }
            })
        });
}

play();

