class Question {
  // YOUR CODE HERE:
  //
  // 1. constructor (text, choices, answer, difficulty)
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices; // array
    this.answer = answer;
    this.difficulty = difficulty; // number between 1 and 3
  }
  // 2. shuffleChoices()

  // [1, 2, 3 , 4] ==>
  shuffleChoices() {
    this.choices.sort(() => Math.random() - 0.5);
  }
}

// question = new Question("text", [4, 2, 1, 3], "answer", 3);
// console.log(question);
// console.log(question.shuffleChoices);
