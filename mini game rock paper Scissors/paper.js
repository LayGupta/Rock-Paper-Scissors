let user=0;
let comp=0;
let msg=document.querySelector(".msg")
let choices =document.querySelectorAll(".choice")
let finalcomp=document.querySelector("#Computer-score")
let finaluser=document.querySelector("#user-score")
const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    let a=Math.floor(Math.random()*3);
    return options[a];
}
const showWinner=(userwin,compchoice,userchoice)=>{
    if(userwin){
        finaluser.innerText=++user;
        console.log("you won");
        msg.innerText=`you won your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        finalcomp.innerText=++comp;
        console.log("you lose");
        msg.innerText=`you lose your ${userchoice} was beaten by ${compchoice}`;
        msg.style.backgroundColor="red";
        
    }
}
const playgame=(userchoice)=>{
    const compchoice=gencompchoice();
    console.log("computer has chose",compchoice);
    if(userchoice===compchoice){
        console.log("draw");4
        msg.innerText=`draw both have chose ${userchoice}`;
        msg.style.backgroundColor="blue";
    }
    else{
        let userwin=true;
        if(userchoice==="paper"){
            userwin=(compchoice==="scissors")?false:true;
        }
        else if(userchoice==="rock"){
            userwin=(compchoice==="paper")?false:true;
        }
        else{
            userwin=(compchoice==="rock")?false:true;
        }
        showWinner(userwin,compchoice,userchoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log(`${userchoice} was clicked`)
        playgame(userchoice);
    });
 });

