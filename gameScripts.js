let playerChoice = 0;
let text1 = document.getElementById("textHeader");




function checkWinner(computerChoice){
if(playerChoice == computerChoice){
text1.textContent = "It's a tie!"; 

} else if(playerChoice == 1 && computerChoice == 2){
   
text1.textContent = "You Lose!"; 
}else if(playerChoice == 1 && computerChoice == 3){
  
text1.textContent = "You Win!"; 
} else if(playerChoice == 2 && computerChoice == 1){
  
text1.textContent = "You Win!"; 
}else if(playerChoice == 2 && computerChoice == 3){
  
text1.textContent = "You Win!"; 
} else if(playerChoice == 3 && computerChoice == 1){
 
text1.textContent = "You Lose!"; 
}else if(playerChoice == 3 && computerChoice == 2){
    
text1.textContent = "You Win!"; 
}

playerChoice = 0;
}




