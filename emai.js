// Initialize EmailJS with your public key
emailjs.init("_caQxeSLChfYaIti3DYM9"); // replace with your EmailJS public key

// Get the form element
const form = document.getElementById("contact-form");

// Listen for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent page reload

  // 1️⃣ Send form data to your main EmailJS template
  emailjs.sendForm("service_btnkvw9", "template_txcyzuk", this).then(
    () => {
      alert("Message sent successfully! ✅");
      form.reset(); // clear the form
    },
    (error) => {
      alert("Oops! Something went wrong... ❌\n" + JSON.stringify(error));
    }
  );

  // 2️⃣ Optional: send auto-reply to the user
  const userEmail = document.getElementById("mail").value;
  const userName = document.getElementById("name").value;

  emailjs.send("service_btnkvw9", "template_txcyzuk", {
    to_email: userEmail,
    to_name: userName,
    message: "Thanks for contacting us! I'll get back to you soon.",
  });
});
