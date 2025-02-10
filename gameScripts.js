let playerHand = 0;



function setPlayerRock() {
    
    playerHand = 1;
    console.log("Player selected Rock");
   
}
function setPlayerPaper() {
    
    playerHand = 2;
    console.log("Player selected Paper");
 
}
function setPlayerScissors() {
    
    playerHand = 3;
    console.log("Player selected Scissors");
    
}



   
    document.getElementById("gameButton").addEventListener("click", function(gameStart) {

let resultText = document.getElementById("resultText");
        let computerChoice = Math.floor(Math.random() * 3) + 1;
           
            console.log("222222222");
            if(playerHand == 0){
                resultText.textContent = "SELECT A HAND!"; 
         
            }else if(computerChoice == 1){
             const myImg = document.getElementById("computerImg");
             const myButton = document.getElementById("gameButton");
         
                 myImg.src = "imgs/1.png";    
         }else if(computerChoice == 2){
             const myImg = document.getElementById("computerImg");
             const myButton = document.getElementById("gameButton");
            
                 myImg.src = "imgs/2.png";
         }else if(computerChoice == 3){
             const myImg = document.getElementById("computerImg");
             const myButton = document.getElementById("gameButton");    
                 myImg.src = "imgs/3.png";
     
         }
         
         if(playerHand == computerChoice){
            resultText.textContent = "TIE!"; 
            
            } else if(playerHand == 1 && computerChoice == 2){
               
                resultText.textContent = "YOU LOSE!"; 
            }else if(playerHand == 1 && computerChoice == 3){
              
                resultText.textContent = "YOU WIN!"; 
            } else if(playerHand == 2 && computerChoice == 1){
              
                resultText.textContent = "YOU WIN!"; 
            }else if(playerHand == 2 && computerChoice == 3){
              
                resultText.textContent = "YOU LOSE!"; 
            } else if(playerHand == 3 && computerChoice == 1){
             
                resultText.textContent = "YOU LOSE!";
            }else if(playerHand == 3 && computerChoice == 2){
                
                resultText.textContent = "You Win!"; 
            }
            
          
     });
 

