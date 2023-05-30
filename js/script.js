// Created by: Sam Makuc
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function repeatSentence() {
  // initialize counter
  let counter = 0

  // initialize sentence to display
  let finalSentences = ""

  // get number of times to repeat
  let sentence = document.getElementById("user-sentence").value

  // get user number
  let userNum = parseInt(document.getElementById("user-num").value)
  
  // use a do ... while loop to display the sentence
  do {
    // build string of sentences
    finalSentences = finalSentences + sentence + "<br>"

    // increment the counter
    counter = counter + 1
  } while (counter < userNum)

  // return sentences to user
  document.getElementById('display-results').innerHTML = finalSentences
}