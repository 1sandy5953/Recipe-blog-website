// script.js
document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('age').value;
        const phone = document.getElementById('phone').value;

        var option=document.getElementsByName('inlineRadioOptions');
     
if (!(option[0].checked || option[1].checked)) {
    alert("Please Select Your Experince");
    return false;
}





        
       
        if (
            name.length == " " ||
            email.length == " " ||
            age.length== " " ||
            phone.length == " "
          ) {
            alert("Ensure you input a value in all fields!");
          } else {
            // perform operation with form input
            alert("This form has been successfully submitted!");
            console.log(
              `This form has a username of ${username.value} and password of ${password.value}`
            );
  
            name.value = "";
            email.value = "";
            age.value = "";
            phone.value = "";
          }
     

    });
});
