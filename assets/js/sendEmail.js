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
            location.reload()
            window.alert("Message Recieved!");
        },
        function(error) {
            console.log("FAILED", error);
            window.alert("So Sorry! Something went wrong! please try again.");
        });
        
    return false;
}