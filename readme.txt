# Servidor de Archivos API

Este proyecto es un servidor de archivos simple construido con Express.js y Multer, diseñado para cargar, eliminar y servir archivos como vídeos. Utiliza un volumen Docker para el almacenamiento persistente de archivos.

## Comenzando

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Prerrequisitos

Necesitas tener instalado [Node.js](https://nodejs.org/en/) y [Docker](https://www.docker.com/) en tu sistema para ejecutar esta aplicación.

### Instalación

1. Clona el repositorio en tu máquina local:

git clone https://github.com/1400co/DockerFileServer.git


2. Navega al directorio del proyecto:

cd DockerFileServer


3. Construye y ejecuta el contenedor Docker:

docker-compose up --build


El servidor ahora debería estar corriendo en `http://localhost:3000`.

## Uso

La API soporta las siguientes operaciones:

- **Cargar Archivo**: Sube un archivo al servidor.

curl --request POST
--url http://localhost:3000/upload
--header 'Authorization: tu_token'
--form 'file=@tu_archivo'


- **Eliminar Archivo**: Elimina un archivo específico del servidor.

curl --request DELETE
--url http://localhost:3000/delete/nombre_del_archivo
--header 'Authorization: tu_token'


- **Servir Archivo**: Accede a un archivo específico.

Abre `http://localhost:3000/video/nombre_del_archivo` en tu navegador o usa un cliente HTTP para hacer la solicitud.

## Construido Con

- [Express.js](https://expressjs.com/) - El framework web usado
- [Multer](https://www.npmjs.com/package/multer) - Middleware para manejar `multipart/form-data`

## Contribuir

Por favor lee [CONTRIBUTING.md](https://github.com/1400co/DockerFileServer/CONTRIBUTING.md) para detalles sobre nuestro código de conducta, y el proceso para enviarnos pull requests.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - vea el archivo [LICENSE.md](LICENSE.md) para detalles.