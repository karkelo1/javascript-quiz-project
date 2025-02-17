class Question {
    constructor(text, choices, answer, difficulty) {
      this.text = text; // is a str
      this.choices = choices; //is an array
      this.answer = answer; // is a str
      this.difficulty = difficulty; //is a number
    }
  
    shuffleChoices() {
      for (let i = this.choices.length - 1; i > 0; i--) {
        const randomize = Math.floor(Math.random() * (i + 1));
        [this.choices[i], this.choices[randomize]] = [this.choices[randomize], this.choices[i]];
      };
    };
  };
  
