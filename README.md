# Sitio web codaltec.com

Se compone de 4 contenedores:

- **db**: La base de datos *MySQL*
- **front**: Las vistas web, utiliza *NextJS*
- **back**: La lógica backend, conexiones a base de datos, utiliza *Typescript*
- **proxy**: Un servidor Nginx que centraliza las peticiones web.

Para acceder al servidor Nginx: http://localhost:18080

Las peticiones a `/api` se enviarán internamente al contenedor de *backend*, el resto irá al contenedor de *frontend*.