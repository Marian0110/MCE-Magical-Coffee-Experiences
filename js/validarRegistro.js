$(document).ready(function () {
    $('#form-register').submit(function (e) {
        e.preventDefault();
        var passwordRegister = $("#pass").val();
        var verifyPassword = $("#verifyPass").val();
        var user = $('#usuarioRegistro').val();
        var userTrim = $.trim(user);

        if (userTrim.length < 5 || userTrim.length > 20) {
            $('#messageUsuario').text('Ingresa tu nombre de usuario (debe tener entre 5 y 20 caracteres)').fadeIn();
            return false;
        } else if (userTrim.indexOf(' ') >= 0) {
            $('#messageUsuario').text('El nombre de usuario no puede contener espacios').fadeIn();
            return false;
        } else {
            $('#messageUsuario').fadeOut();
        }

        var email = $('#emailRegistro').val();

        if (email == '') {
            $('#messageEmail').text('El campo de correo no puede estar vacío').fadeIn();
            return false;
        } else if (!isEmail(email)) {
            $('#messageEmail').text('El correo electrónico no es válido, ocupa @ y dominio').fadeIn();
            return false;
        } else {
            $('#messageEmail').fadeOut();
        }

        if (passwordRegister == '') {
            $('#messagePassword').text('La contraseña no puede estar vacía').fadeIn();
            return false;
        } else if (!isPass(passwordRegister)) {
            $('#messagePassword').text('La contraseña debe tener al menos una mayúscula, una minúscula, un número y un carácter especial: . / - @').fadeIn();
            return false;
        } else {
            $('#messagePassword').fadeOut();
        }

        if (verifyPassword == '') {
            $('#messageConfirm').text('Confirma la contraseña').fadeIn();
            return false;
        } else if (verifyPassword !== passwordRegister) {
            $('#messageConfirm').text('La contraseña debe ser la misma').fadeIn();
            return false;
        } else {
            $('#messageConfirm').fadeOut();
        }

        if (!$('#formCheck').prop('checked')) {
            $('#checkeado').text('Debes aceptar los términos y condiciones para continuar').fadeIn();
            return false;
        } else {
            $('#checkeado').fadeOut();
        }

        // Alerta Sweet
        Swal.fire({
            title: 'Registro Exitoso',
            text: '¡Tu registro ha sido completado con éxito!',
            icon: 'success',
            confirmButtonText: 'Iniciar Sesión',
            timer: 6000
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '../users/login.html';
            } else {
                $('form').unbind('submit').submit();
            }
        });
    });

    function isEmail(emailTrim) {
        var emailRegex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
        return emailRegex.test(emailTrim);
    }

    function isPass(pass) {
        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[./@-]).{8,}$/;
        return passwordRegex.test(pass);
    }
});