const username = sessionStorage.getItem("username");

if (username) {
  window.location.replace("/rooms");
}

const submitButton = document.getElementById("submit-button");
const input = document.getElementById("username-input");

const getInputValue = () => input.value;

const onClickSubmitButton = () => {
  const inputValue = getInputValue();
  if (!inputValue) {
    return;
  }
  sessionStorage.setItem("username", inputValue);
  window.location.replace("/select-room");
};

const onKeyUp = ev => {
  const enterKeyCode = 13;
  if (ev.keyCode === enterKeyCode) {
    submitButton.click();
  }
};

submitButton.addEventListener("click", onClickSubmitButton);
window.addEventListener("keyup", onKeyUp);
