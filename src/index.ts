import { buttonTransition, removeFirstMatch } from "./utils";

const View = {
  $: {
    currentQuestion: document.querySelector("#current_question"),
    totalQuestions: document.querySelector("#total_questions"),
    answer: document.querySelector("#answer"),
    letters: document.querySelector("#letters"),
  },

  setCurrentCount(count: number) {
    View.$.currentQuestion.replaceChildren(String(count));
  },
  setTotalQuestions(count: number) {
    View.$.totalQuestions.replaceChildren(String(count));
  },
  addLetterToAnswer(letter: string) {
    const length = View.$.answer.children.length;
    View.$.answer.insertAdjacentHTML(
      "beforeend",
      `<button type="button" class="btn btn-primary m-1" data-id=${
        letter + length
      } data-value=${letter}>${letter}</button>`
    );
    const $new = View.$.answer.querySelector(`[data-id='${letter + length}']`);
    buttonTransition($new, "btn-success", "btn-primary");
  },
  clearAnswer() {
    View.$.answer.replaceChildren();
  },
  setLetters(letters: string[]) {
    View.$.letters.replaceChildren();
    View.$.letters.insertAdjacentHTML(
      "afterbegin",
      letters
        .map(
          (letter) =>
            `<button type="button" data-value=${letter} class="btn btn-primary m-1">${letter}</button>`
        )
        .join("")
    );
  },
  setLetterErrorStatus(letter: string, i?: number) {
    if (i) {
      const $letter = View.$.letters.children[0];
      buttonTransition($letter, "btn-primary", "btn-danger");
    } else {
      const $letters = View.$.letters.querySelectorAll(
        `[data-value='${letter}']`
      );
      $letters.forEach(($letter) => {
        buttonTransition($letter, "btn-primary", "btn-danger");
      });
    }
  },
};

type GameStep = {
  word: string;
  answered: number;
  letters: string[];
  errors: number;
  state: "finish" | "progress" | "fail";
};

class Game {
  words: string[];
  history: GameStep[];
  current: GameStep;
  constructor(words: string[]) {
    this.words = words;
    this.history = [];
    this.startNewStep();
  }

  startNewStep() {
    const word = this.words.pop();
    this.history.push(this.current);
    this.current = {
      word,
      answered: 0,
      letters: word.split("").sort(() => Math.random() - 0.5),
      errors: 0,
      state: "progress",
    };
  }

  pickLetter(letter: string, i?: number): boolean {
    if (this.current.word[this.current.answered] === letter) {
      this.current.answered += 1;
      if (i) {
        this.current.letters.splice(i, 1);
      } else {
        this.current.letters = removeFirstMatch(this.current.letters, letter);
      }
      return true;
    }
    this.current.errors += 1;
    if (this.current.errors === 3) {
      this.startNewStep();
    }
    if (this.current.answered === this.current.word.length) {
      this.startNewStep();
    }
    return false;
  }

  get currentLetters() {
    return this.current.letters;
  }
  get currentAnswer() {
    return this.current.word.substring(0, this.current.answered);
  }
  get currentQuestion() {
    return this.history.length;
  }
  get totalQuestions() {
    return this.words.length;
  }
}

const WORDS = [
  "apple",
  "function",
  "timeout",
  "task",
  "application",
  "data",
  "tragedy",
  "sun",
  "symbol",
  "button",
  "software",
];

// @ts-ignore
window.appTest = View;
// @ts-ignore
window.game = new Game(WORDS);
