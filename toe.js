let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset")
let msgcnt = document.querySelector(".message")
let newgame= document.querySelector("#newgame")
let msg = document.querySelector("#msg")

let turnO = true;
const winner = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = ()=>{
    turnO = true;
    enablebox();
    msgcnt.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if(turnO){
          box.innerText = "O"
          turnO = false
        }
       else{
          box.innerText = "X"
          turnO = true
       }
       box.disabled = true;   // for button  disable
       check();
    });
   
});

const enablebox = ()=>{
   for(let box of boxes){
    box.disabled = false;         // for button  disable
    box.innerText = "";
   }
}

const disablebox= ()=>{
   for(let box of boxes){
    box.disabled = true;         // for button  disable
   }
}

const showinner = (winner)=>{
   msg.innerText = `congratulation winner is ${winner}`;
   msgcnt.classList.remove('hide');
   disablebox();
}


const check = ()=>{
    for( let ptrn of winner){
             let pos1val = boxes[ptrn[0]].innerText
             let pos2val = boxes[ptrn[1]].innerText
            let pos3val = boxes[ptrn[2]].innerText

            if(pos1val != "" && pos2val !="" && pos2val !="" ){
                if(pos1val === pos2val && pos2val === pos3val){
                    console.log("winner",pos1val);
                    showinner(pos1val);
                }
            }
    }
};


newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);

