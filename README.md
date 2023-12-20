
# Funkoshop

¡Bienvenido a Funkoshop! 

Esta es una aplicación web que simula un E-Commerce real. Ofrece funcionalidades completas de creación, visualización, actualización y eliminación de productos (CRUD). Además, permite el registro y el inicio de sesión de usuarios, otorgando acceso al cliente a la parte administrativa para el manejo de la tienda online.

![377shots_so](https://github.com/MarkoTeixido/FunkoshopCaC-Backend/assets/89801822/d0f4e578-46e3-47e7-a9dc-1922f162e6e4)
![373shots_so](https://github.com/MarkoTeixido/FunkoshopCaC-Backend/assets/89801822/5ec3d463-f93c-413f-88e0-4f2decc3a982)
![118shots_so](https://github.com/MarkoTeixido/FunkoshopCaC-Backend/assets/89801822/8a8ec40a-8bc6-4a6e-96ca-d051ea5d5c15)


## Stack de Tecnologías🎇

**Design:** Figma

**Front-End:** EJS, CSS, Javascript

**Back-End:** MVC (Arquitectura), NodeJS, Express, BcryptJS 

**Database:** MySQL, Sequelize(ORM)

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Instalación

> [!IMPORTANT]
> Es necesario ya tener instalado (y actualizados en versiones) NodeJS, NPM y GIT en tu máquina.

Primero que nada, debes descargar (.zip) o clonar el repositorio del proyecto de la siguiente manera:

```bash
  git clone https://github.com/MarkoTeixido/FunkoshopCaC-Backend.git
```
Ahora que ya tienes el proyecto, puedes abrirlo en tu editor de codigo y desde la terminal del mismo, instalar las dependencias de la siguiente manera:

```bash
  npm install
```
Ahora solo falta la parte de la base de datos para que tu proyecto funcione completamente.
> [!TIP]
> Si no tienes experiencia con base de datos, te recomiendo que crees una cuenta en AlwaysData y una vez hayas accedido, ve a la sección 'Databases' para crear una base de datos en MySQL y tambien, un usuario para que puedas acceder a la misma. Cuando hayas finalizado eso, puedes ir a https://phpmyadmin.alwaysdata.com/ y listo! Ahora puedes acceder con ese usuario a tu base de datos. 💪💪

En tu proyecto veras un archivo llamado 'markoadmin_funkoshopdb.sql' el cual en tu base de datos debes importar (o copiar el contenido y pegarlo como una consulta SQL) para armar la estructura que debe tener.

![EstructuraProyecto](https://github.com/MarkoTeixido/FunkoshopCaC-Backend/assets/89801822/512451b8-a56f-44be-b688-aaadd8eef786)


Ya casi tienes todo listo, solo queda un paso y es crear en tu proyecto un archivo .env, el cual debe contener la información de acceso a tu base de datos. Este archivo debe contener lo siguiente:

![Captura de pantalla 2023-12-20 130920](https://github.com/MarkoTeixido/FunkoshopCaC-Backend/assets/89801822/3eb390b0-0c7d-4fbd-9f6d-8ab300d36f48)


### Deployment

Para desplegar el proyecto de manera local:

```bash
  npm start
```
O puede probarlo simplemente accediendo a este link: https://funkoshopcac.vercel.app/

> [!NOTE]
> Si experimenta fallas al acceder en vercel, puede ser que los servidores no esten funcionando muy bien debido a que es un servicio gratuito. Puede esperar o recargar el sitio.

## Autores 📌

_Este proyecto fue realizado en equipo junto a los siguientes integrantes:_

* **Yamila Lerman** - [https://github.com/yamilerman](https://github.com/yamilerman)
* **Tomás Rivetta** - [https://github.com/TomasRivetta](https://github.com/TomasRivetta)
    