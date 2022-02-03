const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = new Router();
const mysql = require('mysql');


// Del commit de marcelo---------------------------------------------------
// const port = process.env.PORT || 3000

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

// Del commit de marcelo---------------------------------------------------
  router.get('/index', (req, res) => {
    res.render('index', {
    }
    );
});

// Ruta Marcelo---------------------------------------------------------
// router.get('/productos', (req, res) => {
//   res.render('perfil2');
// });

 
// Pruebo con esto
// router.post("/registro", (req, res) => {
//   	req.session.myvariable = req.body;
//   	res.redirect('/perfil');
//   });


// a ver------------------------------------------------------------------------
router.post("/registro", (req,res) => {
  let data = { email: req.body.email, }
    let sql = "INSERT INTO suscriptos SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.redirect('/perfil');
      });
    });
   

//Pruebo con esto------------------------------------------------------------------------
    // router.post("/inscripcion", (req,res) => {
    //   let data = { nombre: req.body.nombre, }      
    //     let sql = "INSERT INTO inscribite SET ?";  
    //     let query = conn.query(sql, data, (err, results) => {
    //         if (err) throw err;
    //         res.redirect('/perfil');
    //       });
    //     });
 
 
// Pruebo comentando esto------------------------------------------------------
// router.get("/perfil", (req, res) => {
//   	const usuario = req.session.myvariable;
//   	delete req.session.myvariable;
//   	res.render('perfil', {
//   		usuario
//   	})
    
//   })







// SELECT 
router.get('/productos', (req, res) => {
  let sql = "SELECT * FROM productos";
  let query = conn.query(sql, (err, results) => {
      if (err) throw err;
      res.render('../views/productos', {
          results: results
      });
  });
});

// Probando inscripcion-----------------------------------------------------------
// router.get('/inscripcion', (req, res) => {
//   let sql = "SELECT * FROM inscribite";
//   let query = conn.query(sql, (err, results) => {
//       if (err) throw err;
//       res.render('../views/', {
//           results: results
//       });
//   });
// });

//Insertar
//guardar la sentencia para despues insertar un dato
router.post('/save', (req, res) => {    
    let data = { producto_nombre: req.body.producto_nombre, producto_precio: req.body.producto_precio };
    let sql = "INSERT INTO productos SET ? ";
    let query = conn.query(sql, data, (err, results) =>{
        if (err) throw err;
        res.redirect('/productos');
    });
});

// Update 

  router.post('/update', (req, res) => {
    let sql = "UPDATE productos SET producto_nombre='" +req.body.producto_nombre+ "', producto_precio='" +req.body.producto_precio+ "' WHERE producto_id=" +req.body.id;
    let query = conn.query(sql, (err, results) => {
      if (err) throw err;
      res.redirect('/productos');
    });
  });

// Delete
  router.post('/delete',(req, res) => {
    let sql = "DELETE FROM productos WHERE producto_id=" +req.body.producto_id+"";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.redirect('/productos');
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


//Envio de mail

    router.get('/contacto',(req, res) => {
        res.render('contacto');
    });
    
    
        router.post("/perfil",(req, res) =>{
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const email = req.body.email;
        const asunto = req.body.asunto;
        const mensaje = req.body.mensaje;


        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        });
        const mailOptions={
            from: "Remitente",
            to:"naranjaspintdas@gmail.com",
            // to:"levi.halvorson18@ethereal.email",
            subject: `${asunto}`,
            html: `Hola como estas? ${nombre}`,
            // `<h1>Consulta de ${nombre} ${apellido} sobre ${mensaje}. Responder a ${email}</h1>`,
        };

        transporter.sendMail(mailOptions,(error, info)=>{
            if(error){
            res.status(500).send(error.message);
                }else{
                console.log("Email enviado")
                res.status(200).jsonp(reqbody);
                }
        });
    });



    // SMTP_USER=urban.eichmann25@ethereal.email
    // SMTP_PASS=gM5m8HBEEn35v1yp98HFXBqKMbQWFTASV5D6


module.exports = router;