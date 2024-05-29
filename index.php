<!doctype html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>HTML 5 Boilerplate</title>
      <link rel="stylesheet" href="index.css" />
   </head>
   <body>
      <button onclick="loadJSON()">Click me</button>
      <div id="vragenBox">
         <button
            id="opt1"
            onclick="checkAnswer(document.getElementById('opt1').innerHTML)">
            Optie 1</button>
         <button
            id="opt2"
            onclick="checkAnswer(document.getElementById('opt2').innerHTML)">
            Optie 2</button>
         <button
            id="opt3"
            onclick="checkAnswer(document.getElementById('opt3').innerHTML)">
            Optie 3</button>
      </div>
   </body>
</html>