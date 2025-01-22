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
        interval = setInterval(countUp, 100);
    }
}

function startCounterDown(){
    if (!interval){
        interval = setInterval(countDown, 100);
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

function endCounterDown(){
    clearInterval(interval);
    interval = null;
}

function set0(){
    count = 0;
    counter.innerHTML = count;
}


plusButton.addEventListener("mousedown", startCounterUp);
plusButton.addEventListener("mouseup", endCounterUp);

subButton.addEventListener("mousedown", startCounterDown);
subButton.addEventListener("mouseup", endCounterDown);

counter.addEventListener("click", set0)

