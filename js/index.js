// Creating a Footer

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.createElement("footer");
document.body.appendChild(footer);

const copyright = document.createElement("p");
copyright.innerHTML = `© Denys Dzhulai ${thisYear} `;
footer.appendChild(copyright);

// Modifying "Skills" section using DOM manipulations

const skills = ["JavaScript", "HTML", "CSS", "GitHub"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

//Find the leave messages form and add the callback for submit
let messageForm = document.forms["leave_message"];

//Adding an event listener to the form
messageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let usersName = event.target.usersName.value;
  let usersEmail = event.target.usersEmail.value;
  let usersMessage = event.target.usersMessage.value;

  console.log(usersName, usersEmail, usersMessage);

  let messageSection = document.getElementById("messages");
  let messageList = messageSection.querySelector("ul");
  let newMessage = document.createElement("li");

  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span> says: ${usersMessage}</span>
  `;

  //The Rremove button for each message
  let removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", function () {
    let entry = removeButton.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  messageForm.reset();
});
