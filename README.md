# moview
Moview es una plataforma de reseñas de películas (repositorio con propósitos académicos)

Manual de Instalacion del aplicativo web de Moview:

-A  En caso de que se haya descargado como .zip del repositorio de github (https://github.com/Majinka10/moview.git) Importante: Descargar de la branch 'front'

    1. Se debe crear un aplicativo de react con el nombre 'moview' (sin las comillas)
    2. Se debe descomprimir el .zip descargado del repositorio, luego copiar y pegar todos los archivos en la carpeta fuente del proyecto de react (creado en el paso 1) y darle a reemplazar a todos los archivos en caso de ser necesario.
    3.Luego se debe abrir Visual studio code, posicionarse en la carpeta del proyecto (moview) abrir la consola y ejecutar el comando 'npm install' para que instale todas las dependencias, librerias etc; las cuales estan declaradas en package.json. Con esto el aplicativo web ya deberia estar listo para las diferentes pruebas que quiera hacer.

-B En caso de hacer un git pull del repositorio (https://github.com/Majinka10/moview.git)

    1. Se debe crear un aplicativo de react con el nombre 'moview' (sin las comillas)
    2. Se debe iniciar un repositorio local para el proyecto (git init), luego añadir el repositorio para poder hacer el git pull (git remote add origin https://github.com/Majinka10/moview.git) luego pararse en la branch front, (npm checkout front) y hacer el git pull.
    3. Luego debera ejecutar el comando 'npm install' para que instale todas las dependencias, librerias etc; las cuales estan declaradas en package.json. Con esto el aplicativo web ya deberia estar listo para las diferentes pruebas que quiera hacer.

-C En caso de descargar el zip del enlace de drive (esta todo (incluido los modulos) por lo que el zip sera bastante pesado)

    1. Descomprimir el Zip
    2. Abrir Visual studio Code, pararse en la carpeta del proyecto (moview), abrir la terminal/consola y ejecutar el comando 'npm install' para que instale todas las dependencias, librerias etc; las cuales estan declaradas en package.json. Con esto el aplicativo web ya deberia estar listo para las diferentes pruebas que quiera hacer.

Manual de Funcionalidades Implementadas en la 1era entrega:

-A Paginas:

   Para acceder a todas las paginas descritas en el pdf, puede utilizar los botones 'help' y 'home' en el nav, ademas para acceder al ejemplo de como se ve el detalle pelicula, podemos acceder por medio de la ruta 'http://localhost:3000/detalle' a la pagina detallePelicula, tambien al usar cualquier ruta no reconocida en App.js Ejemplo: 'http://localhost:3000/busquedaXmWz', nos manda a la pagina de Error404.

-B Login: 

   Al darle al boton 'Iniciar Sesion' en el Nav, se muestra el modal de iniciar sesion, el cual tiene un captcha, la funcionalidad de mostrar la contraseña (el ojito) y un correo y contraseña por default (los cuales son: example@example.com y password respectivamente) que funcionan para mostrar la implementacion arcaica de las rutas publicas y privadas (que de momento es solo la pagina Comprobar).

