const num1= Math.ceil(Math.random()*10);
const num2= Math.ceil(Math.random()*10);

const questionElement= document.getElementById("question");

const formElement= document.getElementById("form");
const formInput= document.getElementById("input");
questionElement.innerText = `What is ${num1} multiply by ${num2}?`;
const scoreElement= document.getElementById("score");
let score = JSON.parse(localStorage.getItem("score")); /* to convert the score value from string to number */
if(!score){
    score=0;    /* if ther is no score */
}
scoreElement.innerText = `score: ${score}`;
const correctAns = num1*num2;

formElement.addEventListener("submit",()=>{
    const userAns= +formInput.value;    /*  plus sign is use to convert string into number*/
    
    if (userAns===correctAns){
        score++;
        updateLocalStorage();
    }
    else{
        score--;
        if (score<0){
            score=0;
        }
        updateLocalStorage();
        
    }
})

/* need to store the score value to show so we need to store it value*/

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score)); /* to convert the score value from string to number */
}