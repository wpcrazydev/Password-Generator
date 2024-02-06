document.getElementById('generateBtn').addEventListener('click', generatePassword);

function generatePassword() {
  const length = document.getElementById('length').value;
  const includeSymbols = document.getElementById('includeSymbols').checked;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" + (includeSymbols ? "!@#$%^&*()_+-=[]{}|;:,.<>?/" : "");
  let password = "";
  let passwordArray = [];

  // Ensure at least one character from each character set
  passwordArray.push(getRandomChar("abcdefghijklmnopqrstuvwxyz"));
  passwordArray.push(getRandomChar("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));
  passwordArray.push(getRandomChar("0123456789"));
  if (includeSymbols) {
    passwordArray.push(getRandomChar("!@#$%^&*()_+-=[]{}|;:,.<>?/"));
  }

  // Generate remaining characters
  for (let i = passwordArray.length; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    passwordArray.push(charset[randomIndex]);
  }

  // Shuffle the array to ensure unpredictability
  passwordArray = shuffleArray(passwordArray);

  // Convert array to string
  password = passwordArray.join('');

  const passwordDisplay = document.getElementById('passwordDisplay');
  passwordDisplay.textContent = password;

  // Enable copy button
  const copyBtn = document.getElementById('copyBtn');
  copyBtn.disabled = false;
  copyBtn.addEventListener('click', function() {
    // Copy password to clipboard
    navigator.clipboard.writeText(password)
      .then(() => {
        alert('Password copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy password: ', err);
      });
  });
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
