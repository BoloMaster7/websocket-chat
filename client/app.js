const loginForm = document.querySelector('#welcome-form');
const messagesSection = document.querySelector('#messages-section');
const messagesList= document.querySelector('#messages-list');
const addMessageForm = document.querySelector('#add-messages-form');
const userNameInput = document.querySelector('#username');
const messageContentInpu = document.querySelector('#message-content');


let userName = '';

const login = (e) => {
  e.preventDefault();
  if (userNameInput.value.length > 0) {
    userName = userNameInput.value;
    loginForm.classList.remove('show');
    messagesSection.classList.add('show');
    addMessageForm.classList.add('show');
} else {
    alert('Please enter a username');
}
};

const sendMessage = (e) => {
  e.preventDefault();
  if (messageContentInput.value.length > 0) {
    addMessage(userName, messageContentInput.value);
    messageContentInput.value = "";
} else {
    alert('Please enter a message');
}
}
  
loginForm.addEventListener('submit', (e) => login(e));
addMessageForm.addEventListener('submit', (e) => sendMessage(e)); 
