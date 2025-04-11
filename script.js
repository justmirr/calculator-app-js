const toggle_mode = document.getElementById("toggle-mode");
const light_mode = document.querySelector(".light-mode");
const dark_mode = document.querySelector(".dark-mode");
const input = document.querySelector(".display-area h3");
const result = document.querySelector(".display-area h1");
const clear = document.getElementById("erase");

toggle_mode.addEventListener("click", () => {
    const elements = document.querySelectorAll("body *");
    elements.forEach((element) => {
        element.classList.toggle("dark");
    });
});

const calculate = () => {
    try{
        result.textContent = eval(input.textContent);
    }
    catch{
        result.textContent = 'Error';
    }
}

const appendInput = (value)=> {
    input.textContent += value; 
}

const changeSign = () => {
    if(input.textContent.charAt(0) !== '-'){
        input.textContent = '-'+input.textContent;
    }
    else{
        input.textContent = input.textContent.slice(1);
    }
}

clear.addEventListener('click', ()=>{
    input.textContent = "";
    result.textContent = "";
})