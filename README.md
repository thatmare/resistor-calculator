# Calculadora de código de colores de resistencias eléctricas

[1. Sobre el proyecto](#1-sobre-el-proyecto)

[2. Instrucciones](#2-instrucciones)

[3. Pruebas unitarias](#3-pruebas-unitarias)

## 1. Sobre el proyecto

![resistorcolorcode](https://github.com/thatmare/resistor-calculator/assets/113146161/d194be1d-0939-4c84-a9eb-95eabffd3d41)

La calculadora es una aplicación web que permite a los usuarios calcular el valor en Ohmios de una resistencia eléctrica en función de los colores de sus bandas. La aplicación sigue el estándar de codificación de colores utilizado en las resistencias eléctricas, donde cada color representa un valor numérico. El _backend_ se encarga de recuperar los valores para las bandas del multiplicador y la tolerancia; fue desarrollado con Node.js, Express y MongoDB. El _frontend_ permite a los usuarios seleccionar un color para sus bandas y así calcular el valor; fue desarrollado con React.js y Tailwind CSS. Por el momento, la aplicación solo tiene soporte para resistencias eléctricas de cuatro bandas.

## 2. Instrucciones
**- Es necesario tener [instalado MongoDB](https://www.mongodb.com/docs/manual/installation/) y tenerlo en ejecución.**

1. Clona el repositorio.
   ```
   $ git clone git@github.com:thatmare/resistor-calculator.git
   ```

2. Abre el proyecto en terminal y dirígite al directoro `server`.
   ```
   $ cd server
   ```
   
3. Instala las dependencias para el servidor.
   ```
   $ npm install
   ```
   
4. Corre el servidor. Este buscará conexión con `mongodb://127.0.0.1:27017`.
   ```
   $ npm run dev
   ```
   En consola debe aparecer el mensaje `Server started on port 5000` que indica que el servidor corre correctamente en el puerto 5000. 
  
5. Desde la carpeta raíz del proyecto abre una segunda terminal y dirígete al directorio `client`.
   ```
   $ cd client
   ```

6. Instala las dependencias para el cliente.
   ```
   $ npm install
   ```
   
7. Antes de correr el cliente, vamos a popular la base de datos. Para esto corre el archivo seedValues.js con node.
   ```
   $ node src/services/seedValues.js
   ```
   En consola debe aparecer el mensaje `Successfully completed data seeding` que indica que la base de datos se ha populado correctamente. También puedes abrir MongoDB Compass y corroborar que se haya creado la base de datos `seed_resistor`.

8. Corre el lado del cliente.
   ```
   $ npm run dev
   ```
   Vite te redirige al puerto 5173.

Listo, puedes utilizar la calculadora.
   
## 3. Pruebas unitarias

Se realizaron 6 pruebas unitarias con la librería [Vitest](https://vitest.dev/) para poner prueba el funcionamiento del método `CalculateOhmValue`. Dichas pruebas se encuentran del lado del cliente. 

1. Abre la terminal.
2. Dirígete o asegúrate de estar en el directorio del cliente.
3. Corre el comando `npm test`.

   ![image](https://github.com/thatmare/resistor-calculator/assets/113146161/79f690d8-c7b3-4429-9f76-9c9be785cc13)
