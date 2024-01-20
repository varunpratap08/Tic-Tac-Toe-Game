let boxes=document.querySelectorAll(".box");
let resetBtn =document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#newGame");
let msg=document.querySelector(".msg");
let msgContainer=document.querySelector(".msg-container")
let turnO = true ;
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetButton=()=>{
    turnO=true ;
    enableBoxes();
    msgContainer.classList.add("hide");
  }
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false ;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true ;
        checkwinners();
    });
});

const disableBoxes=()=>{
    for( let box of boxes){
        box.disabled=true ;
    }
}
const enableBoxes=()=>{
    for( let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
     msg.innerText = `Congratulations,The Winner is ${winner}`;
     msgContainer.classList.remove("hide");
     disableBoxes();
};
const checkwinners=()=>{
    for(let pattern of winPatterns)
    {
        /*console.log(pattern[0],pattern[1],pattern[2]);
       console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);*/
      let pos1Val=boxes[pattern[0]].innerText ;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
               showWinner(pos1Val);
            }
        }
    }
}
resetBtn.addEventListener("click",resetButton);
newGameBtn.addEventListener("click",resetButton);