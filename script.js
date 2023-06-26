dice1=document.getElementById("dice1");
        dice2=document.getElementById("dice2");
         function button(){
            a=Math.floor((Math.random()*6)+1);
            b=Math.floor((Math.random()*6)+1);
            dice1.setAttribute("src","images/dice"+a+".png")
            dice2.setAttribute("src","images/dice"+b+".png")
            Game(a,b);


            
        }
        winner=document.getElementById("result");
        function Game(x,y){
            if(x>y){
                winner.textContent="Player 1 Wins the Argument";
            }
            else if(y>x){
                winner.textContent="Player 2 Wins the Argument";

            }

            else{
                winner.textContent="U Both are so  dumb that ur Argument cant be solved";
            }
    
        }

