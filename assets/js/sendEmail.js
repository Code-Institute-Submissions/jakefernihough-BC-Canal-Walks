let nameInput = document.getElementById("fullname");
let emailInput = document.getElementById("emailaddress");
let informationsummaryInput = document.getElementById("informationsummary");

// Code inspired and designed around the Code Institute User-Centric-Frontend module of Emailjs
function sendMail(contactForm) {
    emailjs.send("gmail","template_1b5075x", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.informationsummary.value
    })
    .then(
        function () {
          $(".contact-request").html(
          `<p class="paragraph text-center">Thank you for reaching out to us! <br>We shall be in touch real soon!.</p>`
        );
      },
      function (error) {
        $(".contact-request").html(
          `<p class="paragraph text-center">Error ${error.status}. Unfortunately that did not go through! <br> Please try again.</p>`
        );
      }
    );    

        
    return false;
}