$(document).ready(function () {
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[./@-]).{8,}$/;

  $("#username").on("input", function () {
    var username = $(this).val();
    if (username.length > 20) {
      $(this).val(username.substr(0, 20));
      alert("Solo se permiten 20 caracteres");
    }
  });

  $('#btnEnviar').click(function (e) {
    e.preventDefault();
    
    var username = $('#username').val();

    if (username.length < 5 || username.length > 20) {
      $('#messageLogin').text('Ingresa tu nombre de usuario (debe tener entre 5 y 20 caracteres)').fadeIn();
      return false;
    } else if (username.indexOf(' ') >= 0) {
      $('#messageLogin').text('El nombre de usuario no puede contener espacios').fadeIn();
      return false;
    } else {
      $('#messageLogin').fadeOut();
    }

    var password = $('#password').val();

    if (password == "") {
      $('#messagePass').text('La contraseña no puede estar vacía').fadeIn();
      return false;
    } else if (!passwordRegex.test(password)) {
      $('#messagePass').text('La contraseña debe tener al menos una mayúscula, una minúscula, un número y un carácter especial: . / - @').fadeIn();
      return false;
    } else {
      $('#messagePass').fadeOut();
    }

    Swal.fire({
      title: '¡Bienvenido!',
      text: 'Credenciales correctas',
      icon: 'success',
      confirmButtonText: 'CONTINUAR',
      timer: 6000
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = '../index.html';
      }
    });

    setTimeout(function(){
      $('form').submit();
    }, 6000);
  });
});
