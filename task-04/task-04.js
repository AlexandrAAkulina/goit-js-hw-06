let counterValue = 0;

const val = document.querySelector("#value");
const decrButton = document.querySelector("[data-action = 'decrement']");
const incrButton = document.querySelector("[data-action = 'increment']");

const clickdecrButton = () => {
    counterValue -= 1;
    val.textContent = counterValue;
} 

decrButton.addEventListener("click", clickdecrButton);

const clickincrButton = () => {
    counterValue += 1;
    val.textContent = counterValue;
}

incrButton.addEventListener("click", clickincrButton);