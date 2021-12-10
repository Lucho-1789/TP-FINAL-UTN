const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = new Router();
const mysql = require('mysql');


//Conexion a base de datos
const conn = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: 'luisfragabenitez'
})

conn.connect ((err) => {
    if(err) throw err;
    console.log('Conexion establecida..')
});

// Rutas 
router.get("/", (req, res) => {
  	res.render("index"); 
  });
  
// router.post("/registro", (req, res) => {
//   	req.session.myvariable = req.body;
//   	res.redirect('perfil');
//   });

router.post("/registro", (req,res) => {
  let data = { email: req.body.email, }
    let sql = "INSERT INTO Suscriptos SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.redirect('/perfil');
      });
    });
 
  
router.get("/perfil", (req, res) => {
  	const usuario = req.session.myvariable;
  	delete req.session.myvariable;
  	res.render('perfil', {
  		usuario
  	})
    
  })







// SELECT 
router.get('/', (req, res) => {
  let sql = "SELECT * FROM productos";
  let query = conn.query(sql, (err, results) => {
      if (err) throw err;
      res.render('../views/productos', {
          results: results
      });
  });
});

//Insertar
router.post('/save', (req, res) => {
    //guardar la sentencia para despues insertar un dato
    let data = {producto_nombre: req.body.producto_nombre, producto_precio: req.body.producto_precio};
    let sql = "INSERT INTO productos SET ? ";
    let query = conn.query(sql, data, (err, results) =>{
        if (err) throw err;
        res.redirect('/');
    });
});

// Update 

  router.post('/update', (req, res) => {
    let sql = "UPDATE productos SET producto_nombre='" +req.body.producto_nombre+ "', producto_precio='" +req.body.producto_precio+ "' WHERE producto_id=" +req.body.id;
    let query = conn.query(sql, (err, results) => {
      if (err) throw err;
      res.redirect('/');
    });
  });

// Delete
  router.post('/delete',(req, res) => {
    let sql = "DELETE FROM productos WHERE producto_id=" +req.body.producto_id+"";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.redirect('/');
    });
});



//Routes 
// app.get('/', (req, res) => {
//     let sql ="SELECT * FROM productos";
//     let query = conn.query(sql, (err, results) => {
//         if(err) throw err;
//         res.render('productos', {
//             results
//         });
//     });
// });


// //Envio de mail

    // router.get('/contacto',(req, res) => {
    //     res.render('contacto');
    // });
    
    
    //     router.post("/send-email",(req, res) =>{
    //     const nombre = req.body.nombre;
    //     const apellido = req.body.apellido;
    //     const email = req.body.email;
    //     const asunto = req.body.asunto;
    //     const mensaje = req.body.mensaje;


    //     const transporter = nodemailer.createTransport({
    //         host: process.env.SMTP_HOST,
    //         port: process.env.SMTP_PORT,
    //         secure: false,
    //         auth: {
    //         user: process.env.SMTP_USER,
    //         pass: process.env.SMTP_PASS,
    //     },
    //     });
    //     const mailOptions={
    //         from: "Remitente",
    //         to:"naranjaspintdas@gmail.com",
    //         subject: `${asunto}`,
    //         html:`<h1>Consulta de ${nombre} ${apellido} sobre ${mensaje}. Responder a ${email}</h1>`,
    //     };

    //     transporter.sendMail(mailOptions,(error, info)=>{
    //         if(error){
    //         res.status(500).send(error.message);
    //             }else{
    //             console.log("Email enviado")
    //             res.status(200).jsonp(reqbody);
    //             }
    //     });
    // });


module.exports = router;