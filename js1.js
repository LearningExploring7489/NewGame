let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn"); 
let newGame= document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-Container");
let msg= document.querySelector("#msg");
let hideMe= document.querySelector(".hide");

let turn0= true; //playerX, player0
const winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = ()=>{
    turn0= true;
    enableBoxes();
    msgContainer.classList.add("hideMe");

};

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if (turn0){
            //player0
            box.innerText="0";
            turn0= false;
        }
        else{
            //plasyerX
            box.innerText="X";
            turn0= true;
        }
       box.disabled= true;

       checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled =true;
    }
};
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
};

const showWinner= (winner) =>{
    msg.innerText = `Congratulations, winner is  ${winner}`;
    msgContainer.classList.remove("hideMe");
    disableBoxes();
};

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1Var=boxes[pattern[0]].innerText;
        let pos2Var= boxes[pattern[1]].innerText;
        let pos3Var= boxes[pattern[2]].innerText;
        
        if(pos1Var != "" && pos2Var != "" && pos3Var != ""){
            if(pos1Var === pos2Var&& pos2Var===pos3Var){
                showWinner(pos1Var);
            }
        }
    }
};

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

