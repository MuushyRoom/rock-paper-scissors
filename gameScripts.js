let playerHand = 0;

let buttonText = document.getElementById("gameButton");
function gameStart(){
    

    document.getElementById("gameButton").addEventListener("click", function(gameStart) {

        if(buttonText == "Start"){
  
            let computerChoice = Math.floor(Math.random() * 3) + 1;
            let resultText = document.getElementById("textHeader");
           
            if(playerHand == 0){
             alert("Please select a hand first!");
         
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
            resultText.textContent = "It's a tie!"; 
            
            } else if(playerHand == 1 && computerChoice == 2){
               
                resultText.textContent = "You Lose!"; 
            }else if(playerHand == 1 && computerChoice == 3){
              
                resultText.textContent = "You Win!"; 
            } else if(playerHand == 2 && computerChoice == 1){
              
                resultText.textContent = "You Win!"; 
            }else if(playerHand == 2 && computerChoice == 3){
              
                resultText.textContent = "You Win!"; 
            } else if(playerHand == 3 && computerChoice == 1){
             
                resultText.textContent = "You Lose!"; 
            }else if(playerHand == 3 && computerChoice == 2){
                
                resultText.textContent = "You Win!"; 
            }
            document.getElementById("gameButton").value="New Game";
            playerChoice = 0;
        }else if(buttonText == "New Game"){
            
        }
      

     });


    





    
}

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


