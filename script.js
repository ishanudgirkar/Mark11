const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function checkBirthDateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if (sum && dob)
    if (Number(luckyNumber.value) < 0 || Number(luckyNumber.value) === 0) {
      outputBox.innerText = "Lucky number can't be negative OR zero ! 😓"
    } else {
      compareValues(sum, luckyNumber.value);
    }
  else
    outputBox.innerText = "Please enter both the fields 😠";
}

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    outputBox.innerText = "Your birthday is lucky 🤞 ";
  } else {
    outputBox.innerText = "Your birthday is not lucky 😔 ";
  }
}





function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
}



checkNumberButton.addEventListener('click', checkBirthDateIsLucky)