
  
  function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
  }
  
  function validatePassword(password) {
    var requirements = [];

    // Проверка длины пароля (минимум 8 символов)
    if (password.length < 8) {
      requirements.push("Длина пароля должна быть не менее 8 символов");
    }
  
    // Проверка наличия хотя бы одной заглавной буквы
    if (!/[A-Z]/.test(password)) {
      requirements.push("Пароль должен содержать хотя бы одну заглавную букву");
    }
  
    // Проверка наличия хотя бы одной строчной буквы
    if (!/[a-z]/.test(password)) {
      requirements.push("Пароль должен содержать хотя бы одну строчную букву");
    }
  
    // Проверка наличия хотя бы одной цифры
    if (!/[0-9]/.test(password)) {
      requirements.push("Пароль должен содержать хотя бы одну цифру");
    }
  
    // Проверка наличия хотя бы одного специального символа
    if (!/[!@#$%^&*]/.test(password)) {
      requirements.push("Пароль должен содержать хотя бы один специальный символ (!@#$%^&*)");
    }
  
    return requirements;
  }

  document.getElementById("registration-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Предотвращаем отправку формы

  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");

  var requirements = validatePassword(passwordInput.value);

  if (validateEmail(emailInput.value) && requirements.length === 0) {
    document.getElementById("success-message").style.display = "block";
    document.getElementById("error-message").style.display = "none";
  } else {
    var errorMessage = "Пожалуйста, исправьте следующие ошибки:\n";
    for (var i = 0; i < requirements.length; i++) {
      errorMessage += "- " + requirements[i] + "\n";
    }
    document.getElementById("success-message").style.display = "none";
    document.getElementById("error-message").style.display = "block";
    document.getElementById("error-message").innerText = errorMessage;
  }
});