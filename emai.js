// Get the contact form
const form = document.getElementById("contact-form");

// Make sure the form exists before adding listener
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // 1️⃣ Send message to YOU
    emailjs
      .sendForm(
        "service_btnkw9", // 🔁 your SERVICE ID
        "template_txcyzuk", // 🔁 template that sends message to YOU
        form
      )
      .then(() => {
        // 2️⃣ Send auto-reply to USER
        return emailjs.sendForm(
          "service_btnkw9", // 🔁 same service ID
          "template_zytrgo", // 🔁 AUTO-REPLY template ID
          form
        );
      })
      .then(() => {
        alert("Message sent successfully! ✅");
        form.reset();
      })
      .catch((error) => {
        alert("Oops! Something went wrong ❌");
        console.error("EmailJS Error:", error);
      });
  });
}
