
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

  cli1.textContent += "Uploading payload.exe [███████████████████████████████████████] 100% \r\n";
   let cli4 = document.getElementById("cli_4");
   document.getElementById("gameButton").value="New Game";

     computerText1 = document.getElementById("results").textContent =
      "Random Number Generated";