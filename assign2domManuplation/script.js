let count = 0;
const counter = document.getElementById("counter");
const plusButton = document.getElementById("plus_button");
const subButton = document.getElementById("sub_button");

counter.innerHTML = count;
plusButton.addEventListener("click", ()=> {
    count += 1
    counter.innerHTML = count;})
subButton.addEventListener("click", () => {
    count -= 1
    counter.innerHTML = count;})




let interval;

function startCounterUp(){
    if (!interval){
        interval = setInterval(countUp, 10);
    }
}
function countUp(){
    count += 1;
    counter.innerHTML = count;
}

function countDown(){
    count -= 1;
    counter.innerHTML = count
}

function endCounterUp(){
    clearInterval(interval)
    interval = null;
}


plusButton.addEventListener("mouseover", startCounterUp);
plusButton.addEventListener("mouseout", endCounterUp);

subButton.addEventListener("mouseover", startCounterUp);
subButton.addEventListener("mouseout", endCounterUp)

