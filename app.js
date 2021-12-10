
// Indicar que servidor se va a usar
    require ('dotenv').config();
    const path = require('path');
	const express = require("express");
	const session = require("express-session");
	const hbs = require("hbs");
	
	const app = express();
	const port = process.env.PORT

//Setting esto estaría para borrar!!!!!!!!!!!!!!
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Middlewares (funciones que agregan funcionalidad)
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//Setting esto estaría para borrar!!!!!!!!!!!!!!
app.use('/assets', express.static (__dirname + '/public'));
app.use(require ('./router/router'));
app.use(require ('./router/contacto'));

app.use(
	session ({
		  secret: "12345abcde",
		  resave: true,
		  saveUninitialized: true
  }) 
);

// router.get("/", (req, res) => {
// 	res.render("index"); 
// });

// router.post("/registro", (req, res) => {
// 	req.session.myvariable = req.body;
// 	res.redirect('/perfil');
// })


// router.get("/perfil", (req, res) => {
// 	const usuario = req.session.myvariable;
// 	delete req.session.myvariable;
// 	res.render('perfil', {
// 		usuario
// 	})
	
// })

	


//Handlebars
    app.set( 'view engine' , 'hbs')
	hbs.registerPartials(__dirname + "/views/partials/")


//Mostrar contenido estático
    app.use(express.static('public'))  
	 
	app.get('/', (req, res) => {
	  res.render('index');
	}) 

	app.get('/inscripcion', (req, res) => {
		res.render('inscripcion');
	}) 

	app.get('/formulario', (req, res) => {
		res.render('formulario');
	})

	app.get('/perfil', (req, res) => {
		res.render('perfil');
	})
	

// Indicar la ruta/método
	app.get('/contacto', (req, res) => {
		res.send('contacto');
	  })
	
	app.listen(port, () => {
	    console.log(`Example: ${port}`)
	});

	



	