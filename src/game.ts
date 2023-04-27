import { removeFirstMatch } from "./utils";

type GameStep = {
  word: string;
  answered: number;
  letters: string[];
  errors: number;
  state: "finish" | "progress" | "fail";
};

export class Game extends EventTarget {
  private words: string[];
  private history: GameStep[];
  private totalCount: number;
  private currentIndex: number;
  constructor(words: string[]) {
    super();
    this.words = words;
    this.totalCount = words.length;
    this.currentIndex = 0;
    this.history = [];
    this.startNewStep();
  }

  get current() {
    return this.history[this.currentIndex];
  }

  goBack() {
    const prev = this.currentIndex - 1;
    this.currentIndex = prev > 0 ? prev : 0;

    this.dispatchEvent(new CustomEvent("change step"));
  }

  goNext() {
    const next = this.currentIndex + 1;
    this.currentIndex =
      next > this.history.length - 1 ? this.history.length - 1 : next;

    this.dispatchEvent(new CustomEvent("change step"));
  }

  startNewStep() {
    if (this.history.length === this.totalCount) {
      return;
    }
    const word = this.words.pop();
    this.history.push({
      word,
      answered: 0,
      letters: word.split("").sort(() => Math.random() - 0.5),
      errors: 0,
      state: "progress",
    });
    this.currentIndex = this.history.length - 1;
  }

  pickLetter(letter: string, i?: number) {
    if (this.current.state !== "progress") {
      return;
    }
    if (this.current.word[this.current.answered] === letter) {
      this.current.answered += 1;
      if (i) {
        this.current.letters.splice(i, 1);
      } else {
        this.current.letters = removeFirstMatch(this.current.letters, letter);
      }
      this.dispatchEvent(
        new CustomEvent("picked", { detail: { letter, index: i } })
      );
    } else {
      this.current.errors += 1;
      this.dispatchEvent(
        new CustomEvent("wrong button", { detail: { letter, index: i } })
      );
    }
    this.checkEndStep();
  }

  private checkEndStep() {
    if (this.current.errors >= 3) {
      this.current.state = "fail";
      this.current.letters = [];
      this.dispatchEvent(new CustomEvent("step failed"));
    }
    if (this.current.word.length === this.current.answered) {
      this.current.state = "finish";
      this.current.letters = [];
      this.dispatchEvent(new CustomEvent("step finished"));
    }
  }

  get currentLetters() {
    return this.current.letters;
  }
  get currentAnswer() {
    return this.current.word.substring(0, this.current.answered);
  }
  get currentQuestion() {
    return this.currentIndex + 1;
  }
  get totalQuestions() {
    return this.totalCount;
  }

  get wordsWithNoErrors() {
    return this.history.filter((step) => step.errors === 0).length;
  }

  get totalErrors() {
    return this.history
      .flatMap((step) => step.errors)
      .reduce((acc, err) => acc + err, 0);
  }

  get wordWithMaxErrors() {
    const history = [...this.history];
    return (
      history
        .filter((step) => step.errors > 0)
        .sort((a, b) => b.errors - a.errors)[0]?.word ?? "-"
    );
  }

  get isGameFinished() {
    return this.history.length === this.totalCount;
  }
}
