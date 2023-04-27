import { Game } from "./game";
import { buttonTransition, getRandomElements } from "./utils";
import { WORDS } from "./words";

const game = new Game(getRandomElements(WORDS, 6));

const App = {
  $: {
    currentQuestion: document.querySelector("#current_question"),
    totalQuestions: document.querySelector("#total_questions"),
    answer: document.querySelector("#answer"),
    letters: document.querySelector("#letters"),
    totalNoErrors: document.querySelector("#total_no_errors"),
    totalErrors: document.querySelector("#total_errors"),
    wordWithMaxErrors: document.querySelector("#word_with_max_errors"),
    gameContainer: document.querySelector("#game"),
    resultsContainer: document.querySelector("#results"),
  },

  setCurrentCount(count: number) {
    App.$.currentQuestion.replaceChildren(String(count));
  },
  setTotalQuestions(count: number) {
    App.$.totalQuestions.replaceChildren(String(count));
  },

  setTotalNoErrors(count: number) {
    App.$.totalNoErrors.replaceChildren(String(count));
  },

  setTotalErrors(count: number) {
    App.$.totalErrors.replaceChildren(String(count));
  },

  setWordWithMaxErrors(word: string) {
    App.$.wordWithMaxErrors.replaceChildren(word);
  },

  addLetterToAnswer(letter: string) {
    const length = App.$.answer.children.length;
    App.$.answer.insertAdjacentHTML(
      "beforeend",
      `<button type="button" class="btn btn-size btn-primary m-1" data-id=${
        letter + length
      } data-value=${letter}>${letter}</button>`
    );
    const $new = App.$.answer.querySelector(`[data-id='${letter + length}']`);
    buttonTransition($new, "btn-success", "btn-primary");
  },
  setErrorAnswer(letters: string[]) {
    App.$.answer.replaceChildren();
    App.$.answer.insertAdjacentHTML(
      "afterbegin",
      letters
        .map(
          (letter, i) =>
            `<button type="button" data-value=${letter} class="btn btn-danger m-1">${letter}</button>`
        )
        .join("")
    );
  },
  setCorrectAnswer(letters: string[]) {
    App.$.answer.replaceChildren();
    App.$.answer.insertAdjacentHTML(
      "afterbegin",
      letters
        .map(
          (letter) =>
            `<button type="button" data-value=${letter} class="btn btn-success m-1">${letter}</button>`
        )
        .join("")
    );
  },
  clearAnswer() {
    App.$.answer.replaceChildren();
  },
  setLetters(letters: string[]) {
    App.$.letters.replaceChildren();
    App.$.letters.insertAdjacentHTML(
      "afterbegin",
      letters
        .map(
          (letter, i) =>
            `<button type="button" data-index=${i} data-value=${letter} class="btn btn-primary m-1">${letter}</button>`
        )
        .join("")
    );
  },
  setLetterErrorStatus(letter: string, i?: number) {
    if (i) {
      const $letter = App.$.letters.children[i];
      buttonTransition($letter, "btn-primary", "btn-danger");
    } else {
      const $letters = App.$.letters.querySelectorAll(
        `[data-value='${letter}']`
      );
      $letters.forEach(($letter) => {
        buttonTransition($letter, "btn-primary", "btn-danger");
      });
    }
  },

  startNextStep() {
    game.startNewStep();
    App.renderStep();
  },

  renderStep() {
    App.clearAnswer();
    App.setCurrentCount(game.currentQuestion);
    App.setTotalQuestions(game.totalQuestions);
    App.setLetters(game.currentLetters);

    if (game.current.state === "finish") {
      App.setCorrectAnswer(game.current.word.split(""));
    }

    if (game.current.state === "fail") {
      App.setErrorAnswer(game.current.word.split(""));
    }

    if (game.current.state === "progress") {
      App.setCorrectAnswer(
        game.current.word.substring(0, game.current.answered).split("")
      );
    }
  },

  renderStats() {
    App.$.gameContainer.classList.add("d-none");
    App.$.resultsContainer.classList.remove("d-none");
    App.setTotalNoErrors(game.wordsWithNoErrors);
    App.setTotalErrors(game.totalErrors);
    App.setWordWithMaxErrors(game.wordWithMaxErrors);
  },

  init() {
    App.renderStep();
    App.$.letters.addEventListener("click", (e) => {
      const target = e.target as Element;
      if (target.matches("[data-value]")) {
        const dataValue = target.getAttribute("data-value");
        const dataIndex = target.getAttribute("data-index");

        game.pickLetter(dataValue, parseInt(dataIndex));
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key.match(/^[a-zA-Z]$/)) {
        game.pickLetter(event.key.toLowerCase());
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") {
        game.goBack();
      }
      if (event.key === "ArrowRight") {
        game.goNext();
      }
    });

    game.addEventListener(
      "picked",
      (e: CustomEvent<{ letter: string; index?: number }>) => {
        App.addLetterToAnswer(e.detail.letter);
        App.setLetters(game.currentLetters);
      }
    );

    game.addEventListener(
      "wrong button",
      (e: CustomEvent<{ letter: string; index?: number }>) => {
        App.setLetterErrorStatus(e.detail.letter, e.detail.index);
      }
    );

    game.addEventListener("step failed", (e) => {
      App.setLetters([]);
      App.setErrorAnswer(game.current.word.split(""));

      setTimeout(() => {
        App.startNextStep();
      }, 650);
    });

    game.addEventListener("step finished", (e) => {
      App.setLetters([]);
      App.setCorrectAnswer(game.current.word.split(""));

      setTimeout(() => {
        if (game.isGameFinished) {
          App.renderStats();
        }
        App.startNextStep();
      }, 650);
    });

    game.addEventListener("change step", (e) => {
      App.renderStep();
    });
  },
};

App.init();
