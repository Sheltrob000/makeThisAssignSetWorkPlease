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

