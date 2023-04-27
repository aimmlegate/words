/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Game = /*#__PURE__*/function (_EventTarget) {
  _inherits(Game, _EventTarget);
  var _super = _createSuper(Game);
  function Game(words) {
    var _this;
    _classCallCheck(this, Game);
    _this = _super.call(this);
    _this.words = words;
    _this.totalCount = words.length;
    _this.currentIndex = 0;
    _this.history = [];
    _this.startNewStep();
    return _this;
  }
  _createClass(Game, [{
    key: "current",
    get: function get() {
      return this.history[this.currentIndex];
    }
  }, {
    key: "goBack",
    value: function goBack() {
      var prev = this.currentIndex - 1;
      this.currentIndex = prev > 0 ? prev : 0;
      this.dispatchEvent(new CustomEvent("change step"));
    }
  }, {
    key: "goNext",
    value: function goNext() {
      var next = this.currentIndex + 1;
      this.currentIndex = next > this.history.length - 1 ? this.history.length - 1 : next;
      this.dispatchEvent(new CustomEvent("change step"));
    }
  }, {
    key: "startNewStep",
    value: function startNewStep() {
      if (this.history.length === this.totalCount) {
        return;
      }
      var word = this.words.pop();
      this.history.push({
        word: word,
        answered: 0,
        letters: word.split("").sort(function () {
          return Math.random() - 0.5;
        }),
        errors: 0,
        state: "progress"
      });
      this.currentIndex = this.history.length - 1;
    }
  }, {
    key: "pickLetter",
    value: function pickLetter(letter, i) {
      if (this.current.state !== "progress") {
        return;
      }
      if (this.current.word[this.current.answered] === letter) {
        this.current.answered += 1;
        if (i) {
          this.current.letters.splice(i, 1);
        } else {
          this.current.letters = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.removeFirstMatch)(this.current.letters, letter);
        }
        this.dispatchEvent(new CustomEvent("picked", {
          detail: {
            letter: letter,
            index: i
          }
        }));
      } else {
        this.current.errors += 1;
        this.dispatchEvent(new CustomEvent("wrong button", {
          detail: {
            letter: letter,
            index: i
          }
        }));
      }
      this.checkEndStep();
    }
  }, {
    key: "checkEndStep",
    value: function checkEndStep() {
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
  }, {
    key: "currentLetters",
    get: function get() {
      return this.current.letters;
    }
  }, {
    key: "currentAnswer",
    get: function get() {
      return this.current.word.substring(0, this.current.answered);
    }
  }, {
    key: "currentQuestion",
    get: function get() {
      return this.currentIndex + 1;
    }
  }, {
    key: "totalQuestions",
    get: function get() {
      return this.totalCount;
    }
  }, {
    key: "wordsWithNoErrors",
    get: function get() {
      return this.history.filter(function (step) {
        return step.errors === 0;
      }).length;
    }
  }, {
    key: "totalErrors",
    get: function get() {
      return this.history.flatMap(function (step) {
        return step.errors;
      }).reduce(function (acc, err) {
        return acc + err;
      }, 0);
    }
  }, {
    key: "wordWithMaxErrors",
    get: function get() {
      var _a, _b;
      var history = _toConsumableArray(this.history);
      return (_b = (_a = history.filter(function (step) {
        return step.errors > 0;
      }).sort(function (a, b) {
        return b.errors - a.errors;
      })[0]) === null || _a === void 0 ? void 0 : _a.word) !== null && _b !== void 0 ? _b : "-";
    }
  }, {
    key: "isGameFinished",
    get: function get() {
      return this.history.length === this.totalCount;
    }
  }]);
  return Game;
}( /*#__PURE__*/_wrapNativeSuper(EventTarget));

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonTransition": () => (/* binding */ buttonTransition),
/* harmony export */   "getRandomElements": () => (/* binding */ getRandomElements),
/* harmony export */   "removeFirstMatch": () => (/* binding */ removeFirstMatch)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var removeFirstMatch = function removeFirstMatch(array, valueToRemove) {
  var index = array.indexOf(valueToRemove);
  var copy = _toConsumableArray(array);
  if (index !== -1) {
    copy.splice(index, 1);
  }
  return copy;
};
var buttonTransition = function buttonTransition($btn, classFrom, classTo) {
  $btn.classList.remove(classFrom);
  $btn.classList.add(classTo);
  setTimeout(function () {
    $btn.classList.remove(classTo);
    $btn.classList.add(classFrom);
  }, 300);
};
var getRandomElements = function getRandomElements(arr, n) {
  if (n > arr.length) {
    throw new Error("n cannot be greater than the length of the array");
  }
  var shuffledArr = Array.from(arr).sort(function () {
    return Math.random() - 0.5;
  });
  return shuffledArr.slice(0, n);
};

/***/ }),

/***/ "./src/words.ts":
/*!**********************!*\
  !*** ./src/words.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WORDS": () => (/* binding */ WORDS)
/* harmony export */ });
var WORDS = ["apple", "function", "timeout", "task", "application", "data", "tragedy", "sun", "symbol", "button", "software"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _words__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./words */ "./src/words.ts");



var game = new _game__WEBPACK_IMPORTED_MODULE_0__.Game((0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRandomElements)(_words__WEBPACK_IMPORTED_MODULE_2__.WORDS, 6));
var App = {
  $: {
    currentQuestion: document.querySelector("#current_question"),
    totalQuestions: document.querySelector("#total_questions"),
    answer: document.querySelector("#answer"),
    letters: document.querySelector("#letters"),
    totalNoErrors: document.querySelector("#total_no_errors"),
    totalErrors: document.querySelector("#total_errors"),
    wordWithMaxErrors: document.querySelector("#word_with_max_errors"),
    gameContainer: document.querySelector("#game"),
    resultsContainer: document.querySelector("#results")
  },
  setCurrentCount: function setCurrentCount(count) {
    App.$.currentQuestion.replaceChildren(String(count));
  },
  setTotalQuestions: function setTotalQuestions(count) {
    App.$.totalQuestions.replaceChildren(String(count));
  },
  setTotalNoErrors: function setTotalNoErrors(count) {
    App.$.totalNoErrors.replaceChildren(String(count));
  },
  setTotalErrors: function setTotalErrors(count) {
    App.$.totalErrors.replaceChildren(String(count));
  },
  setWordWithMaxErrors: function setWordWithMaxErrors(word) {
    App.$.wordWithMaxErrors.replaceChildren(word);
  },
  addLetterToAnswer: function addLetterToAnswer(letter) {
    var length = App.$.answer.children.length;
    App.$.answer.insertAdjacentHTML("beforeend", "<button type=\"button\" class=\"btn btn-size btn-primary m-1\" data-id=".concat(letter + length, " data-value=").concat(letter, ">").concat(letter, "</button>"));
    var $new = App.$.answer.querySelector("[data-id='".concat(letter + length, "']"));
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.buttonTransition)($new, "btn-success", "btn-primary");
  },
  setErrorAnswer: function setErrorAnswer(letters) {
    App.$.answer.replaceChildren();
    App.$.answer.insertAdjacentHTML("afterbegin", letters.map(function (letter, i) {
      return "<button type=\"button\" data-value=".concat(letter, " class=\"btn btn-sizer btn-danger m-1\">").concat(letter, "</button>");
    }).join(""));
  },
  setCorrectAnswer: function setCorrectAnswer(letters) {
    App.$.answer.replaceChildren();
    App.$.answer.insertAdjacentHTML("afterbegin", letters.map(function (letter) {
      return "<button type=\"button\" data-value=".concat(letter, " class=\"btn btn-sizer btn-success m-1\">").concat(letter, "</button>");
    }).join(""));
  },
  clearAnswer: function clearAnswer() {
    App.$.answer.replaceChildren();
  },
  setLetters: function setLetters(letters) {
    App.$.letters.replaceChildren();
    App.$.letters.insertAdjacentHTML("afterbegin", letters.map(function (letter, i) {
      return "<button type=\"button\" data-index=".concat(i, " data-value=").concat(letter, " class=\"btn btn-sizer btn-primary m-1\">").concat(letter, "</button>");
    }).join(""));
  },
  setLetterErrorStatus: function setLetterErrorStatus(letter, i) {
    if (i) {
      var $letter = App.$.letters.children[i];
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.buttonTransition)($letter, "btn-primary", "btn-danger");
    } else {
      var $letters = App.$.letters.querySelectorAll("[data-value='".concat(letter, "']"));
      $letters.forEach(function ($letter) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.buttonTransition)($letter, "btn-primary", "btn-danger");
      });
    }
  },
  startNextStep: function startNextStep() {
    game.startNewStep();
    App.renderStep();
    if (game.isGameFinished) {
      App.renderStats();
    }
  },
  renderStep: function renderStep() {
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
      App.setCorrectAnswer(game.current.word.substring(0, game.current.answered).split(""));
    }
  },
  renderStats: function renderStats() {
    App.$.gameContainer.classList.add("d-none");
    App.$.resultsContainer.classList.remove("d-none");
    App.setTotalNoErrors(game.wordsWithNoErrors);
    App.setTotalErrors(game.totalErrors);
    App.setWordWithMaxErrors(game.wordWithMaxErrors);
  },
  init: function init() {
    App.renderStep();
    App.$.letters.addEventListener("click", function (e) {
      var target = e.target;
      if (target.matches("[data-value]")) {
        var dataValue = target.getAttribute("data-value");
        var dataIndex = target.getAttribute("data-index");
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
    game.addEventListener("picked", function (e) {
      App.addLetterToAnswer(e.detail.letter);
      App.setLetters(game.currentLetters);
    });
    game.addEventListener("wrong button", function (e) {
      App.setLetterErrorStatus(e.detail.letter, e.detail.index);
    });
    game.addEventListener("step failed", function (e) {
      App.setLetters([]);
      App.setErrorAnswer(game.current.word.split(""));
      setTimeout(function () {
        App.startNextStep();
      }, 650);
    });
    game.addEventListener("step finished", function (e) {
      App.setLetters([]);
      App.setCorrectAnswer(game.current.word.split(""));
      setTimeout(function () {
        App.startNextStep();
      }, 650);
    });
    game.addEventListener("change step", function (e) {
      App.renderStep();
    });
  }
};
// @ts-ignore
window.game = game;
App.init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQ2RXLEdBQUcsQ0FBQ29DLGFBQWEsRUFBRTtNQUNyQixDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ1QsQ0FBQyxDQUFDO0lBRUZyQyxJQUFJLENBQUM0QyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsVUFBQ0MsQ0FBQyxFQUFJO01BQ3pDNUMsR0FBRyxDQUFDcUMsVUFBVSxFQUFFO0lBQ2xCLENBQUMsQ0FBQztFQUNKO0NBQ0Q7QUFFRDtBQUNBaUIsTUFBTSxDQUFDdkQsSUFBSSxHQUFHQSxJQUFJO0FBRWxCQyxHQUFHLENBQUMwQyxJQUFJLEVBQUUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmRzLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vd29yZHMvLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vd29yZHMvLi9zcmMvd29yZHMudHMiLCJ3ZWJwYWNrOi8vd29yZHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd29yZHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dvcmRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd29yZHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93b3Jkcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW1vdmVGaXJzdE1hdGNoIH0gZnJvbSBcIi4vdXRpbHNcIjtcblxudHlwZSBHYW1lU3RlcCA9IHtcbiAgd29yZDogc3RyaW5nO1xuICBhbnN3ZXJlZDogbnVtYmVyO1xuICBsZXR0ZXJzOiBzdHJpbmdbXTtcbiAgZXJyb3JzOiBudW1iZXI7XG4gIHN0YXRlOiBcImZpbmlzaFwiIHwgXCJwcm9ncmVzc1wiIHwgXCJmYWlsXCI7XG59O1xuXG5leHBvcnQgY2xhc3MgR2FtZSBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcbiAgcHJpdmF0ZSB3b3Jkczogc3RyaW5nW107XG4gIHByaXZhdGUgaGlzdG9yeTogR2FtZVN0ZXBbXTtcbiAgcHJpdmF0ZSB0b3RhbENvdW50OiBudW1iZXI7XG4gIHByaXZhdGUgY3VycmVudEluZGV4OiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKHdvcmRzOiBzdHJpbmdbXSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy53b3JkcyA9IHdvcmRzO1xuICAgIHRoaXMudG90YWxDb3VudCA9IHdvcmRzLmxlbmd0aDtcbiAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgdGhpcy5oaXN0b3J5ID0gW107XG4gICAgdGhpcy5zdGFydE5ld1N0ZXAoKTtcbiAgfVxuXG4gIGdldCBjdXJyZW50KCkge1xuICAgIHJldHVybiB0aGlzLmhpc3RvcnlbdGhpcy5jdXJyZW50SW5kZXhdO1xuICB9XG5cbiAgZ29CYWNrKCkge1xuICAgIGNvbnN0IHByZXYgPSB0aGlzLmN1cnJlbnRJbmRleCAtIDE7XG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSBwcmV2ID4gMCA/IHByZXYgOiAwO1xuXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZSBzdGVwXCIpKTtcbiAgfVxuXG4gIGdvTmV4dCgpIHtcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5jdXJyZW50SW5kZXggKyAxO1xuICAgIHRoaXMuY3VycmVudEluZGV4ID1cbiAgICAgIG5leHQgPiB0aGlzLmhpc3RvcnkubGVuZ3RoIC0gMSA/IHRoaXMuaGlzdG9yeS5sZW5ndGggLSAxIDogbmV4dDtcblxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2Ugc3RlcFwiKSk7XG4gIH1cblxuICBzdGFydE5ld1N0ZXAoKSB7XG4gICAgaWYgKHRoaXMuaGlzdG9yeS5sZW5ndGggPT09IHRoaXMudG90YWxDb3VudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB3b3JkID0gdGhpcy53b3Jkcy5wb3AoKTtcbiAgICB0aGlzLmhpc3RvcnkucHVzaCh7XG4gICAgICB3b3JkLFxuICAgICAgYW5zd2VyZWQ6IDAsXG4gICAgICBsZXR0ZXJzOiB3b3JkLnNwbGl0KFwiXCIpLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSksXG4gICAgICBlcnJvcnM6IDAsXG4gICAgICBzdGF0ZTogXCJwcm9ncmVzc1wiLFxuICAgIH0pO1xuICAgIHRoaXMuY3VycmVudEluZGV4ID0gdGhpcy5oaXN0b3J5Lmxlbmd0aCAtIDE7XG4gIH1cblxuICBwaWNrTGV0dGVyKGxldHRlcjogc3RyaW5nLCBpPzogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudC5zdGF0ZSAhPT0gXCJwcm9ncmVzc1wiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmN1cnJlbnQud29yZFt0aGlzLmN1cnJlbnQuYW5zd2VyZWRdID09PSBsZXR0ZXIpIHtcbiAgICAgIHRoaXMuY3VycmVudC5hbnN3ZXJlZCArPSAxO1xuICAgICAgaWYgKGkpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50LmxldHRlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXJyZW50LmxldHRlcnMgPSByZW1vdmVGaXJzdE1hdGNoKHRoaXMuY3VycmVudC5sZXR0ZXJzLCBsZXR0ZXIpO1xuICAgICAgfVxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJwaWNrZWRcIiwgeyBkZXRhaWw6IHsgbGV0dGVyLCBpbmRleDogaSB9IH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnQuZXJyb3JzICs9IDE7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBDdXN0b21FdmVudChcIndyb25nIGJ1dHRvblwiLCB7IGRldGFpbDogeyBsZXR0ZXIsIGluZGV4OiBpIH0gfSlcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMuY2hlY2tFbmRTdGVwKCk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrRW5kU3RlcCgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50LmVycm9ycyA+PSAzKSB7XG4gICAgICB0aGlzLmN1cnJlbnQuc3RhdGUgPSBcImZhaWxcIjtcbiAgICAgIHRoaXMuY3VycmVudC5sZXR0ZXJzID0gW107XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwic3RlcCBmYWlsZWRcIikpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jdXJyZW50LndvcmQubGVuZ3RoID09PSB0aGlzLmN1cnJlbnQuYW5zd2VyZWQpIHtcbiAgICAgIHRoaXMuY3VycmVudC5zdGF0ZSA9IFwiZmluaXNoXCI7XG4gICAgICB0aGlzLmN1cnJlbnQubGV0dGVycyA9IFtdO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInN0ZXAgZmluaXNoZWRcIikpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjdXJyZW50TGV0dGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50LmxldHRlcnM7XG4gIH1cbiAgZ2V0IGN1cnJlbnRBbnN3ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudC53b3JkLnN1YnN0cmluZygwLCB0aGlzLmN1cnJlbnQuYW5zd2VyZWQpO1xuICB9XG4gIGdldCBjdXJyZW50UXVlc3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudEluZGV4ICsgMTtcbiAgfVxuICBnZXQgdG90YWxRdWVzdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG90YWxDb3VudDtcbiAgfVxuXG4gIGdldCB3b3Jkc1dpdGhOb0Vycm9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5oaXN0b3J5LmZpbHRlcigoc3RlcCkgPT4gc3RlcC5lcnJvcnMgPT09IDApLmxlbmd0aDtcbiAgfVxuXG4gIGdldCB0b3RhbEVycm9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5oaXN0b3J5XG4gICAgICAuZmxhdE1hcCgoc3RlcCkgPT4gc3RlcC5lcnJvcnMpXG4gICAgICAucmVkdWNlKChhY2MsIGVycikgPT4gYWNjICsgZXJyLCAwKTtcbiAgfVxuXG4gIGdldCB3b3JkV2l0aE1heEVycm9ycygpIHtcbiAgICBjb25zdCBoaXN0b3J5ID0gWy4uLnRoaXMuaGlzdG9yeV07XG4gICAgcmV0dXJuIChcbiAgICAgIGhpc3RvcnlcbiAgICAgICAgLmZpbHRlcigoc3RlcCkgPT4gc3RlcC5lcnJvcnMgPiAwKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYi5lcnJvcnMgLSBhLmVycm9ycylbMF0/LndvcmQgPz8gXCItXCJcbiAgICApO1xuICB9XG5cbiAgZ2V0IGlzR2FtZUZpbmlzaGVkKCkge1xuICAgIHJldHVybiB0aGlzLmhpc3RvcnkubGVuZ3RoID09PSB0aGlzLnRvdGFsQ291bnQ7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCByZW1vdmVGaXJzdE1hdGNoID0gPEE+KGFycmF5OiBBcnJheTxBPiwgdmFsdWVUb1JlbW92ZTogQSkgPT4ge1xuICBjb25zdCBpbmRleCA9IGFycmF5LmluZGV4T2YodmFsdWVUb1JlbW92ZSk7XG4gIGNvbnN0IGNvcHkgPSBbLi4uYXJyYXldO1xuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgY29weS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgcmV0dXJuIGNvcHk7XG59O1xuXG5leHBvcnQgY29uc3QgYnV0dG9uVHJhbnNpdGlvbiA9IChcbiAgJGJ0bjogRWxlbWVudCxcbiAgY2xhc3NGcm9tOiBzdHJpbmcsXG4gIGNsYXNzVG86IHN0cmluZ1xuKSA9PiB7XG4gICRidG4uY2xhc3NMaXN0LnJlbW92ZShjbGFzc0Zyb20pO1xuICAkYnRuLmNsYXNzTGlzdC5hZGQoY2xhc3NUbyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICRidG4uY2xhc3NMaXN0LnJlbW92ZShjbGFzc1RvKTtcbiAgICAkYnRuLmNsYXNzTGlzdC5hZGQoY2xhc3NGcm9tKTtcbiAgfSwgMzAwKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRSYW5kb21FbGVtZW50cyA9IDxUPihhcnI6IFRbXSwgbjogbnVtYmVyKTogVFtdID0+IHtcbiAgaWYgKG4gPiBhcnIubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwibiBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuIHRoZSBsZW5ndGggb2YgdGhlIGFycmF5XCIpO1xuICB9XG5cbiAgY29uc3Qgc2h1ZmZsZWRBcnIgPSBBcnJheS5mcm9tKGFycikuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcbiAgcmV0dXJuIHNodWZmbGVkQXJyLnNsaWNlKDAsIG4pO1xufTtcbiIsImV4cG9ydCBjb25zdCBXT1JEUyA9IFtcbiAgXCJhcHBsZVwiLFxuICBcImZ1bmN0aW9uXCIsXG4gIFwidGltZW91dFwiLFxuICBcInRhc2tcIixcbiAgXCJhcHBsaWNhdGlvblwiLFxuICBcImRhdGFcIixcbiAgXCJ0cmFnZWR5XCIsXG4gIFwic3VuXCIsXG4gIFwic3ltYm9sXCIsXG4gIFwiYnV0dG9uXCIsXG4gIFwic29mdHdhcmVcIixcbl07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgeyBidXR0b25UcmFuc2l0aW9uLCBnZXRSYW5kb21FbGVtZW50cyB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBXT1JEUyB9IGZyb20gXCIuL3dvcmRzXCI7XG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShnZXRSYW5kb21FbGVtZW50cyhXT1JEUywgNikpO1xuXG5jb25zdCBBcHAgPSB7XG4gICQ6IHtcbiAgICBjdXJyZW50UXVlc3Rpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VycmVudF9xdWVzdGlvblwiKSxcbiAgICB0b3RhbFF1ZXN0aW9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3RhbF9xdWVzdGlvbnNcIiksXG4gICAgYW5zd2VyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Fuc3dlclwiKSxcbiAgICBsZXR0ZXJzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xldHRlcnNcIiksXG4gICAgdG90YWxOb0Vycm9yczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3RhbF9ub19lcnJvcnNcIiksXG4gICAgdG90YWxFcnJvcnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG90YWxfZXJyb3JzXCIpLFxuICAgIHdvcmRXaXRoTWF4RXJyb3JzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dvcmRfd2l0aF9tYXhfZXJyb3JzXCIpLFxuICAgIGdhbWVDb250YWluZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZVwiKSxcbiAgICByZXN1bHRzQ29udGFpbmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc3VsdHNcIiksXG4gIH0sXG5cbiAgc2V0Q3VycmVudENvdW50KGNvdW50OiBudW1iZXIpIHtcbiAgICBBcHAuJC5jdXJyZW50UXVlc3Rpb24ucmVwbGFjZUNoaWxkcmVuKFN0cmluZyhjb3VudCkpO1xuICB9LFxuICBzZXRUb3RhbFF1ZXN0aW9ucyhjb3VudDogbnVtYmVyKSB7XG4gICAgQXBwLiQudG90YWxRdWVzdGlvbnMucmVwbGFjZUNoaWxkcmVuKFN0cmluZyhjb3VudCkpO1xuICB9LFxuXG4gIHNldFRvdGFsTm9FcnJvcnMoY291bnQ6IG51bWJlcikge1xuICAgIEFwcC4kLnRvdGFsTm9FcnJvcnMucmVwbGFjZUNoaWxkcmVuKFN0cmluZyhjb3VudCkpO1xuICB9LFxuXG4gIHNldFRvdGFsRXJyb3JzKGNvdW50OiBudW1iZXIpIHtcbiAgICBBcHAuJC50b3RhbEVycm9ycy5yZXBsYWNlQ2hpbGRyZW4oU3RyaW5nKGNvdW50KSk7XG4gIH0sXG5cbiAgc2V0V29yZFdpdGhNYXhFcnJvcnMod29yZDogc3RyaW5nKSB7XG4gICAgQXBwLiQud29yZFdpdGhNYXhFcnJvcnMucmVwbGFjZUNoaWxkcmVuKHdvcmQpO1xuICB9LFxuXG4gIGFkZExldHRlclRvQW5zd2VyKGxldHRlcjogc3RyaW5nKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gQXBwLiQuYW5zd2VyLmNoaWxkcmVuLmxlbmd0aDtcbiAgICBBcHAuJC5hbnN3ZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgIGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2l6ZSBidG4tcHJpbWFyeSBtLTFcIiBkYXRhLWlkPSR7XG4gICAgICAgIGxldHRlciArIGxlbmd0aFxuICAgICAgfSBkYXRhLXZhbHVlPSR7bGV0dGVyfT4ke2xldHRlcn08L2J1dHRvbj5gXG4gICAgKTtcbiAgICBjb25zdCAkbmV3ID0gQXBwLiQuYW5zd2VyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPScke2xldHRlciArIGxlbmd0aH0nXWApO1xuICAgIGJ1dHRvblRyYW5zaXRpb24oJG5ldywgXCJidG4tc3VjY2Vzc1wiLCBcImJ0bi1wcmltYXJ5XCIpO1xuICB9LFxuICBzZXRFcnJvckFuc3dlcihsZXR0ZXJzOiBzdHJpbmdbXSkge1xuICAgIEFwcC4kLmFuc3dlci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICBBcHAuJC5hbnN3ZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgXCJhZnRlcmJlZ2luXCIsXG4gICAgICBsZXR0ZXJzXG4gICAgICAgIC5tYXAoXG4gICAgICAgICAgKGxldHRlciwgaSkgPT5cbiAgICAgICAgICAgIGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLXZhbHVlPSR7bGV0dGVyfSBjbGFzcz1cImJ0biBidG4tc2l6ZXIgYnRuLWRhbmdlciBtLTFcIj4ke2xldHRlcn08L2J1dHRvbj5gXG4gICAgICAgIClcbiAgICAgICAgLmpvaW4oXCJcIilcbiAgICApO1xuICB9LFxuICBzZXRDb3JyZWN0QW5zd2VyKGxldHRlcnM6IHN0cmluZ1tdKSB7XG4gICAgQXBwLiQuYW5zd2VyLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIEFwcC4kLmFuc3dlci5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICBcImFmdGVyYmVnaW5cIixcbiAgICAgIGxldHRlcnNcbiAgICAgICAgLm1hcChcbiAgICAgICAgICAobGV0dGVyKSA9PlxuICAgICAgICAgICAgYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtdmFsdWU9JHtsZXR0ZXJ9IGNsYXNzPVwiYnRuIGJ0bi1zaXplciBidG4tc3VjY2VzcyBtLTFcIj4ke2xldHRlcn08L2J1dHRvbj5gXG4gICAgICAgIClcbiAgICAgICAgLmpvaW4oXCJcIilcbiAgICApO1xuICB9LFxuICBjbGVhckFuc3dlcigpIHtcbiAgICBBcHAuJC5hbnN3ZXIucmVwbGFjZUNoaWxkcmVuKCk7XG4gIH0sXG4gIHNldExldHRlcnMobGV0dGVyczogc3RyaW5nW10pIHtcbiAgICBBcHAuJC5sZXR0ZXJzLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIEFwcC4kLmxldHRlcnMuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgXCJhZnRlcmJlZ2luXCIsXG4gICAgICBsZXR0ZXJzXG4gICAgICAgIC5tYXAoXG4gICAgICAgICAgKGxldHRlciwgaSkgPT5cbiAgICAgICAgICAgIGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLWluZGV4PSR7aX0gZGF0YS12YWx1ZT0ke2xldHRlcn0gY2xhc3M9XCJidG4gYnRuLXNpemVyIGJ0bi1wcmltYXJ5IG0tMVwiPiR7bGV0dGVyfTwvYnV0dG9uPmBcbiAgICAgICAgKVxuICAgICAgICAuam9pbihcIlwiKVxuICAgICk7XG4gIH0sXG4gIHNldExldHRlckVycm9yU3RhdHVzKGxldHRlcjogc3RyaW5nLCBpPzogbnVtYmVyKSB7XG4gICAgaWYgKGkpIHtcbiAgICAgIGNvbnN0ICRsZXR0ZXIgPSBBcHAuJC5sZXR0ZXJzLmNoaWxkcmVuW2ldO1xuICAgICAgYnV0dG9uVHJhbnNpdGlvbigkbGV0dGVyLCBcImJ0bi1wcmltYXJ5XCIsIFwiYnRuLWRhbmdlclwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgJGxldHRlcnMgPSBBcHAuJC5sZXR0ZXJzLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgIGBbZGF0YS12YWx1ZT0nJHtsZXR0ZXJ9J11gXG4gICAgICApO1xuICAgICAgJGxldHRlcnMuZm9yRWFjaCgoJGxldHRlcikgPT4ge1xuICAgICAgICBidXR0b25UcmFuc2l0aW9uKCRsZXR0ZXIsIFwiYnRuLXByaW1hcnlcIiwgXCJidG4tZGFuZ2VyXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIHN0YXJ0TmV4dFN0ZXAoKSB7XG4gICAgZ2FtZS5zdGFydE5ld1N0ZXAoKTtcbiAgICBBcHAucmVuZGVyU3RlcCgpO1xuICAgIGlmIChnYW1lLmlzR2FtZUZpbmlzaGVkKSB7XG4gICAgICBBcHAucmVuZGVyU3RhdHMoKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyU3RlcCgpIHtcbiAgICBBcHAuY2xlYXJBbnN3ZXIoKTtcbiAgICBBcHAuc2V0Q3VycmVudENvdW50KGdhbWUuY3VycmVudFF1ZXN0aW9uKTtcbiAgICBBcHAuc2V0VG90YWxRdWVzdGlvbnMoZ2FtZS50b3RhbFF1ZXN0aW9ucyk7XG4gICAgQXBwLnNldExldHRlcnMoZ2FtZS5jdXJyZW50TGV0dGVycyk7XG5cbiAgICBpZiAoZ2FtZS5jdXJyZW50LnN0YXRlID09PSBcImZpbmlzaFwiKSB7XG4gICAgICBBcHAuc2V0Q29ycmVjdEFuc3dlcihnYW1lLmN1cnJlbnQud29yZC5zcGxpdChcIlwiKSk7XG4gICAgfVxuXG4gICAgaWYgKGdhbWUuY3VycmVudC5zdGF0ZSA9PT0gXCJmYWlsXCIpIHtcbiAgICAgIEFwcC5zZXRFcnJvckFuc3dlcihnYW1lLmN1cnJlbnQud29yZC5zcGxpdChcIlwiKSk7XG4gICAgfVxuXG4gICAgaWYgKGdhbWUuY3VycmVudC5zdGF0ZSA9PT0gXCJwcm9ncmVzc1wiKSB7XG4gICAgICBBcHAuc2V0Q29ycmVjdEFuc3dlcihcbiAgICAgICAgZ2FtZS5jdXJyZW50LndvcmQuc3Vic3RyaW5nKDAsIGdhbWUuY3VycmVudC5hbnN3ZXJlZCkuc3BsaXQoXCJcIilcbiAgICAgICk7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlclN0YXRzKCkge1xuICAgIEFwcC4kLmdhbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcbiAgICBBcHAuJC5yZXN1bHRzQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XG4gICAgQXBwLnNldFRvdGFsTm9FcnJvcnMoZ2FtZS53b3Jkc1dpdGhOb0Vycm9ycyk7XG4gICAgQXBwLnNldFRvdGFsRXJyb3JzKGdhbWUudG90YWxFcnJvcnMpO1xuICAgIEFwcC5zZXRXb3JkV2l0aE1heEVycm9ycyhnYW1lLndvcmRXaXRoTWF4RXJyb3JzKTtcbiAgfSxcblxuICBpbml0KCkge1xuICAgIEFwcC5yZW5kZXJTdGVwKCk7XG4gICAgQXBwLiQubGV0dGVycy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS12YWx1ZV1cIikpIHtcbiAgICAgICAgY29uc3QgZGF0YVZhbHVlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIik7XG4gICAgICAgIGNvbnN0IGRhdGFJbmRleCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpO1xuXG4gICAgICAgIGdhbWUucGlja0xldHRlcihkYXRhVmFsdWUsIHBhcnNlSW50KGRhdGFJbmRleCkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQua2V5Lm1hdGNoKC9eW2EtekEtWl0kLykpIHtcbiAgICAgICAgZ2FtZS5waWNrTGV0dGVyKGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgICBnYW1lLmdvQmFjaygpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgZ2FtZS5nb05leHQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGdhbWUuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwicGlja2VkXCIsXG4gICAgICAoZTogQ3VzdG9tRXZlbnQ8eyBsZXR0ZXI6IHN0cmluZzsgaW5kZXg/OiBudW1iZXIgfT4pID0+IHtcbiAgICAgICAgQXBwLmFkZExldHRlclRvQW5zd2VyKGUuZGV0YWlsLmxldHRlcik7XG4gICAgICAgIEFwcC5zZXRMZXR0ZXJzKGdhbWUuY3VycmVudExldHRlcnMpO1xuICAgICAgfVxuICAgICk7XG5cbiAgICBnYW1lLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcIndyb25nIGJ1dHRvblwiLFxuICAgICAgKGU6IEN1c3RvbUV2ZW50PHsgbGV0dGVyOiBzdHJpbmc7IGluZGV4PzogbnVtYmVyIH0+KSA9PiB7XG4gICAgICAgIEFwcC5zZXRMZXR0ZXJFcnJvclN0YXR1cyhlLmRldGFpbC5sZXR0ZXIsIGUuZGV0YWlsLmluZGV4KTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgZ2FtZS5hZGRFdmVudExpc3RlbmVyKFwic3RlcCBmYWlsZWRcIiwgKGUpID0+IHtcbiAgICAgIEFwcC5zZXRMZXR0ZXJzKFtdKTtcbiAgICAgIEFwcC5zZXRFcnJvckFuc3dlcihnYW1lLmN1cnJlbnQud29yZC5zcGxpdChcIlwiKSk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBBcHAuc3RhcnROZXh0U3RlcCgpO1xuICAgICAgfSwgNjUwKTtcbiAgICB9KTtcblxuICAgIGdhbWUuYWRkRXZlbnRMaXN0ZW5lcihcInN0ZXAgZmluaXNoZWRcIiwgKGUpID0+IHtcbiAgICAgIEFwcC5zZXRMZXR0ZXJzKFtdKTtcbiAgICAgIEFwcC5zZXRDb3JyZWN0QW5zd2VyKGdhbWUuY3VycmVudC53b3JkLnNwbGl0KFwiXCIpKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIEFwcC5zdGFydE5leHRTdGVwKCk7XG4gICAgICB9LCA2NTApO1xuICAgIH0pO1xuXG4gICAgZ2FtZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlIHN0ZXBcIiwgKGUpID0+IHtcbiAgICAgIEFwcC5yZW5kZXJTdGVwKCk7XG4gICAgfSk7XG4gIH0sXG59O1xuXG4vLyBAdHMtaWdub3JlXG53aW5kb3cuZ2FtZSA9IGdhbWU7XG5cbkFwcC5pbml0KCk7XG4iXSwibmFtZXMiOlsicmVtb3ZlRmlyc3RNYXRjaCIsIkdhbWUiLCJfRXZlbnRUYXJnZXQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJ3b3JkcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiY2FsbCIsInRvdGFsQ291bnQiLCJsZW5ndGgiLCJjdXJyZW50SW5kZXgiLCJoaXN0b3J5Iiwic3RhcnROZXdTdGVwIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiZ2V0IiwidmFsdWUiLCJnb0JhY2siLCJwcmV2IiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZ29OZXh0IiwibmV4dCIsIndvcmQiLCJwb3AiLCJwdXNoIiwiYW5zd2VyZWQiLCJsZXR0ZXJzIiwic3BsaXQiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsImVycm9ycyIsInN0YXRlIiwicGlja0xldHRlciIsImxldHRlciIsImkiLCJjdXJyZW50Iiwic3BsaWNlIiwiZGV0YWlsIiwiaW5kZXgiLCJjaGVja0VuZFN0ZXAiLCJzdWJzdHJpbmciLCJmaWx0ZXIiLCJzdGVwIiwiZmxhdE1hcCIsInJlZHVjZSIsImFjYyIsImVyciIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9iIiwiX2EiLCJhIiwiYiIsIl93cmFwTmF0aXZlU3VwZXIiLCJFdmVudFRhcmdldCIsImFycmF5IiwidmFsdWVUb1JlbW92ZSIsImluZGV4T2YiLCJjb3B5IiwiYnV0dG9uVHJhbnNpdGlvbiIsIiRidG4iLCJjbGFzc0Zyb20iLCJjbGFzc1RvIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2V0VGltZW91dCIsImdldFJhbmRvbUVsZW1lbnRzIiwiYXJyIiwibiIsIkVycm9yIiwic2h1ZmZsZWRBcnIiLCJBcnJheSIsImZyb20iLCJzbGljZSIsIldPUkRTIiwiZ2FtZSIsIkFwcCIsIiQiLCJjdXJyZW50UXVlc3Rpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b3RhbFF1ZXN0aW9ucyIsImFuc3dlciIsInRvdGFsTm9FcnJvcnMiLCJ0b3RhbEVycm9ycyIsIndvcmRXaXRoTWF4RXJyb3JzIiwiZ2FtZUNvbnRhaW5lciIsInJlc3VsdHNDb250YWluZXIiLCJzZXRDdXJyZW50Q291bnQiLCJjb3VudCIsInJlcGxhY2VDaGlsZHJlbiIsIlN0cmluZyIsInNldFRvdGFsUXVlc3Rpb25zIiwic2V0VG90YWxOb0Vycm9ycyIsInNldFRvdGFsRXJyb3JzIiwic2V0V29yZFdpdGhNYXhFcnJvcnMiLCJhZGRMZXR0ZXJUb0Fuc3dlciIsImNoaWxkcmVuIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiY29uY2F0IiwiJG5ldyIsInNldEVycm9yQW5zd2VyIiwibWFwIiwiam9pbiIsInNldENvcnJlY3RBbnN3ZXIiLCJjbGVhckFuc3dlciIsInNldExldHRlcnMiLCJzZXRMZXR0ZXJFcnJvclN0YXR1cyIsIiRsZXR0ZXIiLCIkbGV0dGVycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwic3RhcnROZXh0U3RlcCIsInJlbmRlclN0ZXAiLCJpc0dhbWVGaW5pc2hlZCIsInJlbmRlclN0YXRzIiwiY3VycmVudExldHRlcnMiLCJ3b3Jkc1dpdGhOb0Vycm9ycyIsImluaXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsIm1hdGNoZXMiLCJkYXRhVmFsdWUiLCJnZXRBdHRyaWJ1dGUiLCJkYXRhSW5kZXgiLCJwYXJzZUludCIsImV2ZW50IiwibWF0Y2giLCJ0b0xvd2VyQ2FzZSIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=