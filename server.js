const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 3000;

const VIDEOS_DIR = '/app/data'; // Cambiado para coincidir con el volumen Docker

const storage = multer.diskStorage({
  destination: VIDEOS_DIR, // Usando la ruta actualizada
  filename: function (req, file, cb) {
    const uniqueFilename = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
    cb(null, uniqueFilename);
  }
});

const upload = multer({ storage: storage });

app.use(express.static('public'));

// Middleware para verificar el header de autorización
const authorize = (req, res, next) => {
  const authHeader = req.headers.authorization; // Cambiado de 'authorize' a 'authorization'
  if (authHeader === '123456789') {
    next();
  } else {
    res.status(401).send('No autorizado');
  }
};

// Ruta para cargar archivos
app.post('/upload', authorize, upload.single('file'), (req, res) => {
  if (req.file) {
    // Devuelve un JSON con el nombre del archivo guardado.
    res.json({ message: 'Archivo subido con éxito', filename: req.file.filename });
  } else {
    res.status(400).send('No se pudo subir el archivo');
  }
});

// Ruta para eliminar archivos
app.delete('/delete/:name', authorize, (req, res) => {
  const fileName = req.params.name;
  const filePath = path.join(VIDEOS_DIR, fileName);

  fs.unlink(filePath, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send('No se pudo eliminar el archivo');
    }
    res.send(`Archivo ${fileName} eliminado con éxito`);
  });
});

// Ruta para servir los videos
app.get('/file/:name', (req, res) => {
  const videoName = req.params.name;
  const videoPath = path.join(VIDEOS_DIR, videoName);
  res.sendFile(videoPath, (err) => {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
