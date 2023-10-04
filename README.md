# Piedra, Papel o Tijera

PWA hecha con LitElement y WebComponents del clásico juego Piedra,Papel o Tijera! Inicia con tu nombre usuario y empieza a jugar contra el bot y a sumar puntos!

## Comenzando 🚀

Para obtener una copia del proyecto en funcionamiento en tu máquina local se deberá:
    * Nos dirigimos a una carpeta donde de deseemos clonar el repositorio con el comando 'cd ruta/del/directorio' para movernos a donde queramos.
    * Ya una vez dentro de la carpeta clonamos el repositorio con el comando git clone URL.

### Pre-requisitos 📋

Que cosas necesitas para instalar el software y como instalarlas

    * Instalamos Node.js, esto desde la web (https://nodejs.org/es) y siguiendo los pasos del instalador. La versión de Node.js usada es v18.15.0. Esto lo vemos con el comando 'node -v' desde la consola. Con esto también instalaremos automáticamente npm, su versión usada es la 9.5.0, esto lo verificamos con el comando npm -v.
    * Para inicializar el proyecto utilizamos el comando 'npm init @open-wc && npm i && npm start'.
    * En caso de al realizar npm run start para la lanzar la aplicación nos diga que "web-dev-server" no se reconoce como un comando, hacemos el comando npm install web-dev-server --save-dev.
    * Para realizar el Rooting fue necesario realizar el siguiente comando para la instalación del Root npm i @vaadin/router. 
    * Ya nuestra aplicación debería funcionar, solo vamos a la carpeta raíz del proyecto y ejecutamos npm run start

### Instalación 🔧

Ya con nuestro proyecto clonado y las librerias necesarias descargadas el siguiente paso será abrir una consola cmd, navegar hasta la dirección raíz de nuestro proyecto
y una vez estando ahí ejecutamos el comando npm run start para lanzar el proyecto en local.

## Despliegue 📦

Hemos intentado realizar el despliegue con Rollup mediante githubPages y Vercel utilizando el comando npm run build . Lamentablemente por fallos (creemos que en la construcción del build) al realizar el despliegue no conseguimos el funcionamiento. Queda pendiente de revisión.

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [OpenWC] (https://open-wc.org/) - Siguiendo la documentación (https://blog.bitsrc.io/routing-with-litelement-2a29465ec778)
* [LitElement] (https://lit.dev/docs/getting-started/) - Para la realización de componentes
* [IndexeDB] (https://es.javascript.info/indexeddb)  - Para el almacenamiento de los


---
⌨️ por [Carlos tabares](https://github.com/carlosdanieltc) 