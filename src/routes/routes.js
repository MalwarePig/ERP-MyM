const express = require('express'); //guardar express en una variable de servidor
const router = express.Router(); //usar modulo de router de ex´press
const UserController = require('../Controllers/UserController');
/////////////////////////////////////////////////////////////////////////// USUARIOS /////////////////////////////////////////////////////////////////////////////////
//Acceder a login
var reinicio = router.get('/', (req, res) => {
    //res.send('holoo');
    res.render('index.html');
    //res.render('Admin/Login.html');
});

//Iniciar logueo
router.post('/Login', UserController.login);

//Acceder formulario Registrar usuario

//Iniciar logueo
router.get('/Signup', UserController.SignUp);

//Registrar usuario en db
router.post('/AddUser', UserController.save);

//Eliminar usuario en db
router.post('/EliminarUsuario', UserController.EliminarUsuario);

/////////////////////////////////////////////////////////////////////////// ENTRAR A HOME ///////////////////////////////////////////////////////////////////////////////
//Carga pagina principal
router.get('/home', UserController.HOME);
 





module.exports = router;
