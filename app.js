let maximumNumber= parseInt(prompt("Enter Your Maximum Number"));
  while(!maximumNumber){
    maximumNumber= parseInt(prompt("Please Enter Valid Maximum Number"));
    
  }

  const targetNumber=  Math.floor(Math.random()*maximumNumber)+1;

  let guess= parseInt(prompt("Enter Your First Guess"));
  let attempt= 1;
  while(parseInt(guess) !==targetNumber){
    if(guess=='quit') break;
    attempt++;
    if(guess>targetNumber){
        guess= prompt("too high!! Guess Again");
    }
    else if(guess<targetNumber){
        guess= prompt("too low!! New Guess");
    }
    else{
        guess= prompt("Enter the valid number Please !");
    }
  }
  if(guess==='quit'){
    console.log("Ok You Quit The Game !")
  }
  else{
    console.log(`Conratulation You Win It Takes ${attempt} attempt `);
  }

