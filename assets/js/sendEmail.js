let nameInput = document.getElementById("fullname");
let emailInput = document.getElementById("emailaddress");
let informationsummaryInput = document.getElementById("informationsummary");

function sendMail(contactForm) {
    emailjs.send("gmail","template_1b5075x", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.informationsummary.value
    })
    .then(
        
        function(response) {
            nameInput.value = '',
            emailInput.value='',
            informationsummaryInput.value='',
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
    return false;
}