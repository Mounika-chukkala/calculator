let text = "";
const buttons = document.querySelectorAll(".value");
const expression = document.querySelector(".expression");
const clear = document.querySelector(".ac");
const del = document.querySelector(".del");
const equal = document.querySelector(".equal");
const remove=document.querySelector(".clr");
const blinkingText = document.getElementById('toggled');
const power=document.querySelector(".power")
const addval = (event) => {
    expression.style.paddingRight=`5px`;
    text += event.target.innerText;
    expression.innerText = text
};
function evaluateExpression(expression) {
    try {
        const correctedExpression = expression
            .replace(/x/g, '*')
            .replace(/÷/g, '/')
            .replace(/√\(/g, 'Math.sqrt(')
            .replace(/(\d+)\^(\d+)/g, "$1**$2");

        const result = eval(correctedExpression);
        return result;
    } catch (error) {
        return error;
    }
}

const giveOutput = () => {
    if (text === "") {
        alert("ENTER THE VALUES");
        return;
    }
    const answer = evaluateExpression(text);
    if (answer instanceof Error) {
        expression.innerText = "Error";
        expression.style.paddingRight=`50px`;
        console.log("evaluating expression:" + answer.message)
    }
    else {
        expression.innerText = answer;
    }
    text = ""
}
const delchar = () => {
    if (text !== "") {
        text = text.slice(0, -1);
        expression.innerText = text;
    }
}
const clearingScreen=()=>{

    blinkingText.classList.toggle('blink');
    expression.innerText="";
    text="";
}
const removeExpression=()=>{
    expression.innerText="";
    text="";
}
const powerappl=(event)=>{
    text +="^";
    expression.innerText=text;
}
power.addEventListener("click",powerappl)
remove.addEventListener("click",removeExpression);
clear.addEventListener("click",clearingScreen);
del.addEventListener("click", delchar);
equal.addEventListener("click", giveOutput);
buttons.forEach((button) => {
    button.addEventListener('click', addval);
});
