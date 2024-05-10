let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#btn")

let turnO = true; //player1,player2[X,Y]

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("game starts");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
    
    
  });

  const checkWinner =  () => {
    for(let patters of winPatterns){
        console.log(patters[0],patters[1],patters[2]);
       let pos2 =  boxes[patters[1]].innerText;
       let pos3 =  boxes[patters[2]].innerText;
    }
    if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3){
            console.log("winner");
        }
    }

  }