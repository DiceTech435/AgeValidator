let submit = document.getElementById("submit");



// When the ErrorTimes btn is clicked
let closeBox = document.getElementById("closeBox");
closeBox.addEventListener("click", function(e){
    // errorBox.classList.add("hide");
   let parent = closeBox.parentElement;
   parent.classList.add("hide");
});

// When the SuccessTimes btn is clicked
let sCloseBox = document.getElementById("sCloseBox");
sCloseBox.addEventListener("click", function(e){
    // errorBox.classList.add("hide");
   let parent = sCloseBox.parentElement;
   parent.classList.add("hide");
});


submit.addEventListener("click", function(e){
    e.preventDefault();

    let errText = document.getElementById("errText");
    let successText = document.getElementById("successText");
    var age = document.getElementById("age").value;
    let errorBox = document.getElementById("errorBox");

    // Check if number was entered
    // let rule1 = /^\d+$/;
    let rule = /^[0-9]+$/;


   if(age === ""){
    errText.innerText = "Enter your age";
    errorBox.classList.remove("hide");
    successBox.classList.add("hide");

   }
   else if(!rule.test(age)){
    errText.innerText = "Enter a valid age";
    errorBox.classList.remove("hide");
    successBox.classList.add("hide");
   }
   else if(age < 18 || age > 30){
    errText.innerText = "You must be between 18-30 years";
    errorBox.classList.remove("hide");
    successBox.classList.add("hide");
   }
   else{
    errorBox.classList.add("hide");
    successBox.classList.remove("hide");
    successText.innerText = "Congratulation!! Approved";

   }


});


// console.log(closeBox);