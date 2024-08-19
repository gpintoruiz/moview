# Moview Backend
Este es el backend de la aplicación Moview. Proporciona una API para acceder a datos de películas y realizar operaciones relacionadas.
Instalación
1. Clona este repositorio en tu máquina local:
git clone https://github.com/guillepinto/moview.git

2. Accede al directorio del backend:

cd moview/back

3. Instala las dependencias:

npm install

Configuración

Antes de ejecutar el backend, asegúrate de configurar las variables de entorno necesarias. Crea un archivo .env y completa las variables según tu configuración.

Ejecución

Una vez configurado, puedes ejecutar el backend utilizando el siguiente comando:

npm run dev

Esto iniciará el servidor en el puerto especificado en el archivo .env (por defecto, el puerto 3001).

Uso
El backend proporciona una API para acceder a datos de películas. Puedes utilizar herramientas como Postman o curl para realizar solicitudes a la API. A continuación se muestra un ejemplo de cómo obtener la lista de películas:

GET http://localhost:3001/api/users
