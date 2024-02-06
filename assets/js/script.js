document.getElementById('generateBtn').addEventListener('click', generatePassword);

function generatePassword() {
  const length = document.getElementById('length').value;
  const includeSymbols = document.getElementById('includeSymbols').checked;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" + (includeSymbols ? "!@#$%^&*()_+-=[]{}|;:,.<>?/" : "");
  let password = "";
  let passwordArray = [];
  passwordArray.push(getRandomChar("abcdefghijklmnopqrstuvwxyz"));
  passwordArray.push(getRandomChar("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));
  passwordArray.push(getRandomChar("0123456789"));
  if (includeSymbols) {
    passwordArray.push(getRandomChar("!@#$%^&*()_+-=[]{}|;:,.<>?/"));
  }
  for (let i = passwordArray.length; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    passwordArray.push(charset[randomIndex]);
  }
  passwordArray = shuffleArray(passwordArray);
  password = passwordArray.join('');
  document.getElementById('passwordDisplay').textContent = password;
}

function getRandomChar(charset) {
  const randomIndex = Math.floor(Math.random() * charset.length);
  return charset[randomIndex];
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}