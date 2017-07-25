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
        return
      } else {
        for (let forbiddenUser of forbiddenUsers) {
          if (inputValue[0] == forbiddenUser.name) {
            console.log('Este usuario ya está registrado y además es prohibido');
            return
          }
          else {
            users.push({name:inputValue[0], password:inputValue[1]});
            console.log(users);
            return
          }
        }
      }
    }
  }

})();
