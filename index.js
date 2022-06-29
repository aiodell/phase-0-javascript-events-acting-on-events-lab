// Your code here

// save a reference of the dodger to a variable
document.addEventListener("keydown", function (event) {
    if(event.key === "ArrowLeft"){
        moveDodgerLeft();
    }
});

document.addEventListener("keydown", function (event) {
    if(event.key === "ArrowRight"){
        dodger = document.getElementById('dodger')
        moveDodgerRight();
    }
});

// move the dodger to the left
function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if(left > 0){
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if(left > 0){
        dodger.style.left = `${left + 1}px`;
    }
}