 const express = require('express');
 const router = express.Router();
 const path = require('path');
 //////
//  const { mostrarTodo, agregar } = require('./db');
// router.use(express.static("static"))
 router.use(express.json());

// router.get('/home',(req,res)=>{
//     res.sendFile("./static/index.html",{
//         root:__dirname
//     })
// })


//para que lea el styles del personajes.ejs
router.use('/public', express.static('public'));
//////////////////////////////////////////////////////

// router.use(express.static(__dirname + '/public'));
router.use(express.static("views"))
// router.set('view engine', 'ejs');
// router.set("views", path.join(__dirname, "views"));
// router.use(express.static(__dirname + '/public'));
// router.use('/public', express.static('public'));
// Para servir archivos estáticos
router.use('/public', express.static(path.join(__dirname, 'public')));
router.use(express.static(path.join(__dirname, 'public')));
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.get('/home', (req,res)=>{
    res.render(index);
});

// router.get('/personajes', async (req, res) => {
//     try {
//         const personajes = await mostrarTodo();
//         res.render('personajes', { personajes });
//     } catch (err) {
//         res.status(500).send('Error al cargar la lista de personajes');
//     }
// });








module.exports = router;