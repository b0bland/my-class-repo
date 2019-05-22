/**
 * array of rock paper scissor
 * 
 * two variables to keep track of points, win and lost for player
 * 
 * popup prompt asking for input
 * 
 * establish hierarchy of rock paper and scissors
 * 
 * check if input is rock paper or scissors
 * 
 * have computer choose randomly from 0 to 2
 *  
 * compare input from user and computer and see who wins (or draw)
 * 
 * toss an alert of result
 * 
 * repeat from start
 */

 var rps = ["r", "p", "s"];

 var win = 0, lost = 0, draw = 0;

 var playerInput, comInput, score;
 
 


 
 function response(player, computer, result) { 
    document.getElementById("actions").textContent = ("You chose " + player + ", the computer chose " + computer + ". You " + result + ".")
 }

 
 function scoreUpdate() { 
    score = document.getElementById("score").textContent = ("Win: " + win + ". \nLoss: " + lost + ". \nDraw: " + draw + ".");
 }

    document.getElementById("instructions").textContent = ("Press r, p, or s, to pick rock, paper, or scissors.");
    scoreUpdate();
    document.onkeypress = function(event) {
        playerInput = event.key.toLowerCase();
        console.log(playerInput);
        
        comInput = rps[Math.floor(Math.random() * rps.length)];

        if (playerInput === "r" && comInput === "p") {
            lost++;
            response("rock", "paper", "lost")
        }

        else if (playerInput === "r" && comInput === "s") {
            win++;
            response("rock", "scissor", "win")
        }

        else if (playerInput === "r" && comInput === "r") {
            draw++;
            response("rock", "rock", "draw")
        }

        else if (playerInput === "p" && comInput === "p") {
            draw++;
            response("paper", "paper", "draw")
        }

        else if (playerInput === "p" && comInput === "s") {
            lost++;
            response("paper", "scissor", "lost")
        }

        else if (playerInput === "p" && comInput === "r") {
            win++;
            response("paper", "rock", "win")
        }

        else if (playerInput === "s" && comInput === "p") {
            win++;
            response("scissor", "paper", "win")
        }

        else if (playerInput === "s" && comInput === "s") {
            draw++;
            response("scissor", "scissor", "win")
        }

        else if (playerInput === "s" && comInput === "r") {
            lost++;
            response("scissor", "rock", "draw")
        }

        if (playerInput === "q") repeat = false;

        scoreUpdate();        
    }

