const form = document.getElementById("form");
const sendMail = document.getElementById("emailA");

function handleSendEmail(event) {
  event.preventDefault();
  const fd = new FormData(this);

  sendMail.setAttribute(
    "href",
    `mailTo: fany.turcios@tivitrace.com?subject=${fd.get(
      "subject"
    )}&body=${fd.get("message")}`
    // 'mailTo: fernandocantarero06@gmail.com?subject=${}'
  );

  sendMail.click();
}

form.addEventListener("submit", handleSendEmail);
