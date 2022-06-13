let options=["ROCK", "PAPER", "SCISSORS"];
let plscore=0;
let comscore=0;
let round=0;

function restart(){
    plscore=0;
    comscore=0;
    round=0;
    
    document.getElementById("round").innerHTML = "Round:"+round;
    document.getElementById("pl-score").innerHTML ="Player's Score: "+ plscore;
    document.getElementById("com-score").innerHTML ="Computer's Score: "+ comscore;
    document.getElementById("result").innerHTML = "____";
    document.getElementById("winner").innerHTML = "____";

}

document.getElementById("restart").addEventListener("click",restart)

//document.getElementById("strbtn").addEventListener("click", game);
document.getElementById("rockimg").addEventListener("click",function(){
    PS = "ROCK";
    CS = ComputerPlay();
    PlayRound(PS,CS);
})
document.getElementById("paperimg").addEventListener("click",function(){
    PS = "PAPER";
    CS = ComputerPlay();
    PlayRound(PS,CS);
})
document.getElementById("scissorsimg").addEventListener("click",function(){
    PS = "SCISSORS";
    CS = ComputerPlay();
    PlayRound(PS,CS);
})

function ComputerPlay(){
    const random = Math.floor(Math.random() * options.length);
    return options[random]; 
}

function PlayRound(PS,CS){
    round++;
    document.getElementById("round").innerHTML = "Round:"+round;
    if (PS === CS) {
        console.log("draw");
        document.getElementById("round").innerHTML = "Round:"+round;
        document.getElementById("result").innerHTML = "Round Result: Draw";
        document.getElementById("winner").innerHTML = "You have the same choice: "+PS;
    }
  
    if (PS === "ROCK" && CS === "SCISSORS") {
        console.log("player wins");
        plscore=plscore+1;
        document.getElementById("pl-score").innerHTML ="Player's Score: "+ plscore;
        document.getElementById("result").innerHTML = "Round Result: Win";
        document.getElementById("winner").innerHTML = "Your choice: Rock, Computer's choice: Scissors";
    }
  
    if (PS === "SCISSORS" && CS === "PAPER") {
        console.log("player wins");
        plscore=plscore+1;
        document.getElementById("pl-score").innerHTML = "Player's Score"+ plscore;
        document.getElementById("result").innerHTML = "Round Result: Win";
        document.getElementById("winner").innerHTML = "Your choice: Scissors, Computer's choice: Paper";
    }
    
  
    if (PS === "PAPER" && CS === "ROCK") {
        console.log("player wins");
        plscore=plscore+1;
        document.getElementById("pl-score").innerHTML ="Player's Score: "+ plscore;
        document.getElementById("result").innerHTML = "Round Result: Win";
        document.getElementById("winner").innerHTML = "Your choice: Paper, Computer's choice: Rock";
    }

  
    if (PS === "SCISSORS" && CS === "ROCK") {
        console.log("computer wins");
        comscore=comscore+1;
        document.getElementById("com-score").innerHTML = "Computer's Score: "+ comscore;
        document.getElementById("result").innerHTML = "Round Result: Lose";
        document.getElementById("winner").innerHTML = "Your choice: Scissors, Computer's choice: Rock";
    }
    
  
    if (PS === "PAPER" && CS === "SCISSORS") {
        console.log("computer wins");
        comscore=comscore+1;
        document.getElementById("com-score").innerHTML ="Computer's Score: "+ comscore;
        document.getElementById("result").innerHTML = "Round Result: Lose";
        document.getElementById("winner").innerHTML = "Your choice: Paper, Computer's choice: Scissors";
    }
      
    
  
    if (PS === "ROCK" && CS === "PAPER") {
        console.log("computer wins");
        comscore=comscore+1;
        document.getElementById("com-score").innerHTML ="Computer's Score: "+ comscore;
        document.getElementById("result").innerHTML = "Round Result: Lose";
        document.getElementById("winner").innerHTML = "Your choice: Rock, Computer's choice: Paper";
    }
    
  
    if(plscore==5 || comscore==5){
        setTimeout(final,1000);
};

function final(){
        if(plscore>comscore){
        html=`
        <div class="winner">
            <div>
                <img src="imgs/win.jpg" alt="you win" width="200px" height="150px">
            </div>
            <div>
                <h3>You win</h3>
            </div>
            <div class="firework"></div>
            <div id="final-btns">
                <button type="button" onclick="document.location='game.html'">Restart</button>
                <button type="button" onclick="document.location='index.html'">Home</button>
        </div>`;
        
        }
        else if(plscore<comscore){
            html=`
        <div class="winner">
            <div>
                <img src="imgs/lose.jpg" alt="you lose" width="200px" height="150px">
            </div>
            <div>
                <h3>You lose</h3>
            </div>
            <div id="final-btns">
                <button type="button" onclick="document.location='game.html'">Restart</button>
                <button type="button" onclick="document.location='index.html'">Home</button>
        </div>`;
        }
        else{
            html=`
            <div class="winner">
                <div>
                    <img src="imgs/draw.png" alt="Draw" width="200px" height="150px">
                </div>
                <div>
                    <h3>Draw</h3>
                </div>
                <div id="final-btns">
                    <button type="button" onclick="document.location='game.html'">Restart</button>
                    <button type="button" onclick="document.location='index.html'">Home</button>
            </div>`;
        }
    document.querySelector('.container').innerHTML = html;
    }
}