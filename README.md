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
Para mi segundo spring, me enfoqué en las 5 funcionalidades restantes del analyzer. La siguiente fue getCharacterCount, en esta funcion nos pedia el total de caracteres ingresados al textarea para ello use la propiedad .length, esta propiedad me rotonó adecuadamente la cantidad de caracteres.
La tercera funcion getCharacterCountExcludingSpaces me pedia que le retornara los caracteres excluyendo espacios, aqui utilice una expresion regular para que los espacios por un vacio.
La cuarta funcion getAverageWordLength me pedia calcular la longitud media de las palabras, para ellos utilice un split para cortar los espacios y un for para que recorra el texto y me devuelva las palabras 
