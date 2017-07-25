(function() {
  'use strict';

  // Users list
  let users = [{
    name: 'Anuar',
    password: '@Comparte'
  },{
    name: 'Diego',
    password: 'Centraal'
  }];

  let forbiddenUsers = [{
    name: 'David',
    password: 'pirateria'
  }]

  // DOM variables
  let loginForm = document.getElementById("login");
  let registerForm = document.getElementById("register");
  const boxMessage = document.getElementById("message-box");
  const boxMessageDiv = document.getElementById("box-message-div");
  const overlay = document.getElementById("overlay");
  const messageName = document.getElementById("message-name");
  const message = document.getElementById("message");
  const messageButton = document.getElementById("message-button");
  const messageButton2 = document.getElementById("message-button-2");

  // Event Listeners
  document.getElementById("login-button").addEventListener("click", function() {
    let inputValue = formHandler(loginForm);
    loginFunction(inputValue);
  });
  document.getElementById("register-button").addEventListener("click", function() {
    let inputValue = formHandler(registerForm);
    registerFunction(inputValue);
  });

  // Form input value handler
  function formHandler(form) {
    let inputValue = [];
    for (let input of form) {
      inputValue.push(input.value);
      input.value = "";
    };
    return inputValue;
  }

  // User Validation
  function loginFunction(inputValue) {
    for (let user of users) {
      if (inputValue[0] == user.name && inputValue[1] == user.password) {
        console.log('Login Exitoso', user.name);
        displayMessage(user, 'Gracias por usar Facabook Login, puedes continuar')
        return
      }
      else {
        forbiddenUser(inputValue);
      }
    }
  }

  function forbiddenUser(inputValue) {
    for (let forbiddenUser of forbiddenUsers) {
      if (inputValue[0] == forbiddenUser.name && inputValue[1] == forbiddenUser.password) {
        console.log('Eres un usuario inaceptable');
        displayMessage(forbiddenUser, '¡Por tus malos actos y piratería, estas condenado a no hacer login!')
        boxMessageDiv.style.borderColor = 'darkred';
        messageButton.style.display = 'none';
        return
      } else {
        console.log('Tu nombre de usuario o contraseña son incorrectos');
      }
    }
  }

  // Register new user
  function registerFunction (inputValue){
    for (let user of users) {
      if (inputValue[0] == user.name) {
        console.log('Este usuario ya está registrado');
        displayMessage(user, 'Ya estabas registrado, gracias por usar Facabook Login, puedes continuar')
        return
      } else {
        for (let forbiddenUser of forbiddenUsers) {
          if (inputValue[0] == forbiddenUser.name) {
            console.log('Este usuario ya está registrado y además es prohibido');
            displayMessage(forbiddenUser, 'Ni pienses en registrate de nuevo... ¡Por tus malos actos y piratería, estas condenado a no hacer login!')
            boxMessageDiv.style.borderColor = 'darkred';
            messageButton.style.display = 'none';
            return
          }
          else {
            let newUser = {
              name:inputValue[0],
              password:inputValue[1]
            };
            users.push(newUser);
            console.log(users);
            displayMessage(newUser, 'Gracias por registrarte, ahora puedes hacer login')
            messageButton.style.display = 'none';
            messageButton2.style.display = 'inline-block';
            document.getElementById("message-button-2").addEventListener("click", function() {
              hideMessage()
            });
            return
          }
        }
      }
    }
  }

  // Show and hide message box
  function displayMessage(user, messageText) {
    boxMessage.style.display = "block";
    overlay.style.display = "block";
    messageButton.style.display = 'inline-block';
    messageButton2.style.display = 'none';
    messageName.innerHTML = user.name;
    message.innerHTML = messageText;
  }

  function hideMessage() {
    boxMessage.style.display = "none";
    overlay.style.display = "none";
  }

})();
