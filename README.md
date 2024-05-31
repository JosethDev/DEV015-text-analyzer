# Text AnalyzerText
Analyzer es una aplicación web que permite analizar texto proporcionando información como el conteo de palabras, conteo de caracteres, longitud promedio de las palabras, conteo de números y la suma de los números presentes en el texto.

# ESTRUCTURA  DEL PROYECTO
  * Alalyzer.js: Engloba las funciones del proyecto
    - getWordCount: Contador de palabras.
    - getCharacterCount: Contador de caracteres
    - getCharacterCountExcludingSpaces: Contador de caracteres excluyendo espacios
    - getAverageWordLength: Longitud de palabras
    - getNumberCoun: Contador de números
    - getNumberSum: Suma de los números.

  * Index.html: Contiene la estructura base cumpliendo los criterios
  * Index. js: Llama las funciones del analyzer y lo enlacé con el html
  * Style.css: Contiene los estilos base cumpliendo los criterios

# Instalación del proyecto:
  1. Hacemos un fork del proyecto de github de Laboratoria
    https://github.com/Laboratoria/DEV015-text-analyzer
  2. Descargamos el proyecto utilisando ssh.
  3. Instalamos npm: npm install
  4. Corremos el proyecto: npm start

# Demo

https://josethdev.github.io/DEV015-text-analyzer/


# Sprint 1
Leí el readme para bajar el proyecto de github y me ayudé de tutoriales para hacerlo correctamentre,  Volví a revisar el README para entender cómo empezar el proyecto. Desarrollé la base HTML siguiendo las especificaciones establecidas y ejecuté los tests de HTML con npm run test:oas-html para asegurarme de cumplir con los requisitos.

Consulté la documentación oficial de JavaScript para implementar las funciones del analyzer, comenzando con la función getWordCount. Utilicé console.log para probar la funcionalidad antes de integrarla en index.js. Después de verificar que funcionaba correctamente, continué con index.js, enlazando la lista de funciones en el HTML. Luego, añadí la funcionalidad de escuchar el evento addEventListener para el texto ingresado en el textarea. Finalmente, implementé el evento addEventListener en el botón para detectar el clic.

# Sprint 2
En el segundo sprint, me enfoqué en implementar las cinco funcionalidades restantes del analyzer. La primera función fue getCharacterCount, que devuelve el total de caracteres ingresados en el textarea. Utilicé la propiedad .length para contar los caracteres, lo cual funcionó adecuadamente.

La siguiente función fue getCharacterCountExcludingSpaces, que retorna los caracteres excluyendo los espacios. Utilicé una expresión regular para reemplazar los espacios con una cadena vacía, lo que me permitió contar los caracteres sin incluir los espacios.

Luego implementé getAverageWordLength, que calcula la longitud media de las palabras. Utilicé el método split para dividir el texto en palabras, luego recorrí las palabras con un bucle for para calcular la longitud total de las palabras y finalmente dividí esta longitud total por el número de palabras para obtener la longitud media.

La cuarta función fue getNumberCount, que retorna la cantidad de números en el texto. Para esto, utilicé un filtro para eliminar los espacios, símbolos y letras, y luego conté la longitud de los números restantes.

La quinta función fue getNumberSum, que retorna la suma de todos los números en el texto, incluyendo los decimales. Para lograrlo, apliqué un filtro similar al de getNumberCount para obtener los números, luego utilicé un bucle for para recorrer todos los elementos, y finalmente utilicé parseFloat para incluir los números decimales en la suma total.

Integré todas estas funciones en index.js y agregué una función para limpiar los valores cuando se presiona el botón de limpiar en el textarea.

Realicé pruebas unitarias y corregí errores con la ayuda de mi coach Marcia. Después de superar todos los tests, comencé a trabajar en el diseño CSS. Implementé estilos básicos siguiendo el prototipo proporcionado en el README, con algunos cambios en los colores.

Finalmente, ejecuté dos tests que aún no había realizado, npm run test y npm run test:e2e. Realicé las correcciones necesarias, realicé pruebas manuales y solicité feedback project.
