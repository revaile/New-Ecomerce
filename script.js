const checkbox = document.querySelector('.check-box');


checkbox.addEventListener("click", function (){
    
})

checkbox.addEventListener("change", function () {
    if (this.checked) {
        document.querySelector('body').style.color = "#fff";
        document.querySelector('body').style.backgroundColor = "#000";
        console.log("Checkbox is not checked..");
    } else {
        console.log("Checkbox is not checked..");

    }
})