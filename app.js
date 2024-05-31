
   let ansBreak = "Remmen.";
   let ansRelease = "Laat gas los.";
   let ansNothing = "Doe niets.";
   let answer;

   let ansMultipleText0 = "";
   let ansMultipleText1 = "";
   let ansMultipleText2 = "";

   let empty = ""


   let questionIndex = 0;

   async function loadJSON() {
      path_to_json = "remgasniks.json";

      let questions;
      // Read JSON file with fetch
      let data = await fetch(path_to_json)
         .then((response) => response.json())
         .then((q) => {
            questions = q;
         });
//score, so if every question is correct it gets a +1 score.
      let question = questions[questionIndex++];
//The answer is everytime the first in the row, so on number 0. This is the beginning.
      answer = question.options[0];
//btnOp1 is ansBreak, btnOpt2 is ansRelease, btnOpt3 is ansNothing
//btnOp1 is JA, btnOp2 is NEE btnOpt3 is display none, so the button is hiding and is not displayed on screen. JA en NEE are the string in the json file so if they are written the same in both files..
      let btnOpt1 = document.getElementById("opt1");
      let btnOpt2 = document.getElementById("opt2");
      let btnOpt3 = document.getElementById("opt3");
//bij vragen type 4 is btnOp1 is remmen, btnOp2 is laat gas los, btnOpt3 is Doe niets.
      if (question.type == 4) {
         btnOpt1.innerHTML = ansBreak;
         btnOpt2.innerHTML = ansRelease;
         btnOpt3.innerHTML = ansNothing;
//....
         answer = convertAnswerForQuestionType4(answer);
      }
      //bij vragen type 2 is btnOp1 is JA, btnOp2 is NEE btnOpt3 is verstopt, dus niet te zien (display none).
      if (question.type == 2) {
         btnOpt1.innerHTML = "JA";
         btnOpt2.innerHTML = "NEE";
         btnOpt3.style.display = "none";
      }
//Voor elk button kijkt de functie of er tekst in staat.
//voor knop 1 komt optie0 erin. en het hide de knop als de optie leeg is.
      if (question.type ==1){
         hideOrDisplayAnswer(btnOpt1, question.options[0]);
         hideOrDisplayAnswer(btnOpt2, question.options[1]);
         hideOrDisplayAnswer(btnOpt3, question.options[2]);
      }
   }

   // Laad optie in button en hide button
   // als optie leeg is
   function hideOrDisplayAnswer(button, option) {
      //innerHTML is alle tekst wat in de element staat. BV <p>....</P>
      button.innerHTML = option;
      // kijk of option leeg is
      if (option.trim().length == 0) {
         // option is empty, dus hide knop
         button.style.display = "none";
      } 
   }

// if whichbutton == the rigth answer do answer than it gives correct. If it's not it's incorrect.
   function checkAnswer(buttonContents) {
      if (buttonContents == answer) {
         console.log("Correct");
         //"correct"
      } else {
         console.log("Incorrect");
      }
      
   }
//if answerInput is the first one 0, than its ansBreak so answer remmen. if it's 1 return ansRelease so answer is gas loslaten, if it's 2 return doe niets. If it doesn't work than it gives an error.
   function convertAnswerForQuestionType4(answerInput) {
      console.log(typeof answerInput);
      switch (answerInput) {
         case "0":
            return ansBreak;
         case "1":
            return ansRelease;
         case "2":
            return ansNothing;
         default:
            throw new Error(
               "convertAnswerForQuestionType4 received an inparsible answer.",
            );
      }
   }






  