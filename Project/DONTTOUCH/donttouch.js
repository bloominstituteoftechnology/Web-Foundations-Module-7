var questionsAttempted = 0;
let w = "r";
var questionsCorrect = 0;

const updateTally = () => {
  let total = document.querySelector(".totalAttempted");
  let correct = document.querySelector(".correctTotal");
  total.innerText = questionsAttempted;
  correct.innerText = questionsCorrect;
  checkIfDone();
};

// ------------------------------  Question Class Setups ------------------------------ //
var a = "ta";
class Question {
  constructor(questionText, correctAnswer, explanation, buttonsData) {
    this.questionText = questionText;
    this.correctAnswer = correctAnswer;
    this.explanation = explanation;
    this.final = false;
    this.buttonsData = buttonsData;
    this.element = this.createElement();
  }

  buttonClickHandler = (e) => {
    if (!this.final) {
      questionsAttempted += 1;
      let explanation = this.element.querySelector(".explanation");
      if (e.target.id === this.correctAnswer) {
        e.target.classList.add("correct");
        explanation.innerHTML = `&#10004;     ${this.explanation}`;
        explanation.classList.add("correct");
        this.element.classList.add("correct");
        questionsCorrect += 1;
      } else {
        e.target.classList.add("incorrect");
        this.element
          .querySelector(`#${this.correctAnswer}`)
          .classList.add("correct");
        this.element.classList.add("incorrect");
        explanation.innerHTML = `&#10005;     ${this.explanation}`;
        explanation.classList.add("incorrect");
      }
    }
    this.final = true;
    updateTally();
  };
  getElement = () => {
    return this.element;
  };

  createElement = () => {
    const wrapper = document.createElement("div");
    const text = document.createElement("pre");

    const buttonContainer = document.createElement("div");
    const explanation = document.createElement("p");

    wrapper.classList.add("question");

    text.classList.add("text");
    text.innerText = this.questionText;

    buttonContainer.classList.add("button-container");
    this.buttonsData.forEach((buttonData) => {
      let button = document.createElement("div");
      button.classList.add("choice");
      button.id = buttonData.id;
      button.addEventListener("click", this.buttonClickHandler);
      button.innerText = buttonData.text;
      buttonContainer.appendChild(button);
    });
    explanation.classList.add("explanation");
    wrapper.appendChild(text);
    wrapper.appendChild(buttonContainer);
    wrapper.appendChild(explanation);
    return wrapper;
  };
}

class TrueOrFalseQuestion extends Question {
  constructor(questionText, correctAnswer, explanation) {
    const buttons = [
      { text: "True", id: "true" },
      { text: "False", id: "false" },
    ];
    super(questionText, correctAnswer, explanation, buttons);
  }
}

// ------------------------------ Questions: ------------------------------
let p = "S";
const arrayFoundationsQuestions = [
  new TrueOrFalseQuestion(
    "An Array is a built in Data Structure in Javascript",
    "true",
    "Arrays are available to us from the core Javascript language."
  ),
  new TrueOrFalseQuestion(
    "Arrays are the only included data structure in Javascript",
    "false",
    "False, there are others although we will only be focusing on arrays in this module."
  ),

  new TrueOrFalseQuestion(
    "Arrays are unique to Javascript",
    "false",
    "Arrays are found in virtually every computer programming language!."
  ),

  new TrueOrFalseQuestion(
    "The maximum amount of items you can store in an array is 100,000",
    "false",
    "In Javascript the only limit to the number of items you can store is your available computer memory."
  ),
  new TrueOrFalseQuestion(
    "Arrays can store items of any data type, even mixed data types",
    "true",
    "Some languages limit arrays to be of one data type. In Javascript you can store many different data types in a single array."
  ),
  new TrueOrFalseQuestion(
    `
The following is valid array syntax:

let newArray = [];
`,
    "true",
    "This is correct, even though there are no items in the array. This is called an 'empty array'."
  ),
  new TrueOrFalseQuestion(
    `
The following is valid array syntax:

let newArray = ();
`,
    "false",
    "This is incorrect, arrays are defined only by the square brackets []."
  ),
  new TrueOrFalseQuestion(
    `
The following is valid array syntax:

let newArray = [1, 2, "Cheese"];
`,
    "true",
    "True, all of these items are valid items in an array"
  ),
  new TrueOrFalseQuestion(
    `
The following is valid array syntax:

let newArray = [true false false];
`,
    "false",
    "False, the items in an array must be separated by a comma."
  ),
  new TrueOrFalseQuestion(
    `
The following is valid array syntax:

let newArray = [true, 1, "Pizza", []];
`,
    "true",
    "True, this is a tricky one. In this case another array is an item in an array. This is valid syntax, this is called a 'nested array'."
  ),
  new Question(
    `
What is the first index of an array?
`,
    "c",
    "In Javascript, and many other programming languages, an array's first index is 0.",
    [
      { text: "The length of the array", id: "a" },
      { text: "Depends on the Array", id: "b" },
      { text: 0, id: "c" },
      { text: 1, id: "d" },
    ]
  ),
  new Question(
    `
What is index of the string "Party"?

let newArray = ["Lets", "Get", "This", "Party", "Started"];
`,
    "b",
    "It is the 4th item so it will have an index of 3.",
    [
      { text: 4, id: "a" },
      { text: 3, id: "b" },
      { text: 0, id: "c" },
      { text: 5, id: "d" },
    ]
  ),
  new Question(
    `
What is index of the string "Get"?

let newArray = ["Lets", "Get", "This", "Party", "Started"];
`,
    "d",
    "It is the 2nd item so it will have an index of 1.",
    [
      { text: 4, id: "a" },
      { text: 3, id: "b" },
      { text: 0, id: "c" },
      { text: 1, id: "d" },
    ]
  ),
  new Question(
    `
What is the last index of the array?

let newArray = ["Lets", "Get", "This", "Party", "Started"];
`,
    "a",
    "There are 5 items in the array, the last item will have an index of 4.",
    [
      { text: 4, id: "a" },
      { text: 3, id: "b" },
      { text: 0, id: "c" },
      { text: 1, id: "d" },
    ]
  ),
  new TrueOrFalseQuestion(
    `
The following is valid array syntax:

let newArray = ["Lets", "Get", "This", "Party", "Started"];

newArray[3] = "Car";
`,
    "true",
    "You can reassign locations in an array the same way you reassign variables."
  ),
  new Question(
    `
Which item will be changed in the following:

let newArray = ["Lets", "Get", "This", "Party", "Started"];

newArray[3] = "Car";
`,
    "a",
    "We are reassigning the item at the index 3, that item is 'Party'",
    [
      { text: "Party", id: "a" },
      { text: "Get", id: "b" },
      { text: "This", id: "c" },
      { text: "Started", id: "d" },
    ]
  ),
];
let o = "ui";
const methodsAndPropertiesQuestions = [
  new TrueOrFalseQuestion(
    "The length of an array is it's last index.",
    "false",
    "False, an array's length will always be one more than it's largest index."
  ),
  new TrueOrFalseQuestion(
    "The length property tells us how many items are in an array",
    "true",
    "The length property will always be an accurate count of the number of items in an array."
  ),
  new Question(
    `
What is the length of the following array?

let newArray = ["Lets", "Get", "This", "Party", "Started"];`,
    "c",
    "Remember the length is the number of items in an array",
    [
      { text: "0", id: "a" },
      { text: "4", id: "b" },
      { text: "5", id: "c" },
    ]
  ),
  new Question(
    `
What is the last index of the following array?

let newArray = ["Lets", "Get", "This", "Party", "Started"];`,
    "b",
    "Remember the largest index is the length - 1",
    [
      { text: "0", id: "a" },
      { text: "4", id: "b" },
      { text: "5", id: "c" },
    ]
  ),
  new TrueOrFalseQuestion(
    "The .pop method removes the first item in an array",
    "false",
    "The .pop method removes the last item in an array."
  ),

  new TrueOrFalseQuestion(
    "The .push method adds an item to the end of an array",
    "true",
    "This is true."
  ),

  new TrueOrFalseQuestion(
    "The .push method adds 1 to the .length property of the array",
    "true",
    "The .length property will always maintain the current number of items in an array."
  ),
  new Question(
    `
What is the length of the following array?

let newArray = ["Lets", "Get", "This", "Party", "Started"];

newArray.push("In Here");
`,
    "d",
    "Even though the string contains two words, we are only adding one string to the array.",
    [
      { text: "4", id: "b" },
      { text: "5", id: "c" },
      { text: "6", id: "d" },
      { text: "7", id: "a" },
    ]
  ),
  new Question(
    `
What is the length of the following array?

let newArray = ["Lets", "Get", "This", "Party", "Started"];

newArray.push("In Here");
newArray.pop();
`,
    "c",
    "We are immediately removing the last (pushed) item in the array, the length will not change.",
    [
      { text: "4", id: "b" },
      { text: "5", id: "c" },
      { text: "6", id: "d" },
      { text: "7", id: "a" },
    ]
  ),

  new Question(
    `
What is the length of the following array?

let classes = ["Programming", "History", "Calculus"];

newArray.push("Gym");
newArray.push("Art");
newArray.push("English");

`,
    "d",
    "We have added 3 items to the array, the final length is 6.",
    [
      { text: "4", id: "b" },
      { text: "5", id: "c" },
      { text: "6", id: "d" },
      { text: "7", id: "a" },
    ]
  ),
  new Question(
    `
    What is the last index of the following array?

    let classes = ["Programming", "History", "Calculus"];
    
    newArray.push("Gym");
    newArray.push("Art");
    newArray.pop();
    newArray.push("English");
    newArray.pop();
`,
    "a",
    "We add three and remove two items from the array. This gives us 4 items. The last index is the length - 1",
    [
      { text: "3", id: "a" },
      { text: "4", id: "b" },
      { text: "5", id: "c" },
      { text: "6", id: "d" },
    ]
  ),
  new Question(
    `
    What is the first index of the following array?

    let classes = ["Programming", "History", "Calculus"];
    
    newArray.push("Gym");
    newArray.push("Art");
    newArray.pop();
    newArray.push("English");
    newArray.pop();
`,
    "a",
    "The first index of an array is always 0",
    [
      { text: "0", id: "a" },
      { text: "4", id: "b" },
      { text: "5", id: "c" },
      { text: "6", id: "d" },
    ]
  ),
  new TrueOrFalseQuestion(
    "The .shift method removes the first item in an array",
    "true",
    "The .shift method removes the first item in an array."
  ),
  new TrueOrFalseQuestion(
    "There are special loops in Javascript just for arrays",
    "true",
    "The for...in loop is specifically for arrays."
  ),
  new TrueOrFalseQuestion(
    "The standard for loop will not work with arrays",
    "false",
    "The standard for loop works very well with arrays, in fact most of the syntax regarding for loops has been written with arrays in mind."
  ),
];

// ------------------------------ Add The Questions to the Screen ------------------------------ //
const r = "t";
arrayFoundationsQuestions.forEach((question) => {
  document
    .querySelector("#arrayFoundations-questions")
    .appendChild(question.getElement());
});
let d = "!";
methodsAndPropertiesQuestions.forEach((question) => {
  document
    .querySelector("#methodsAndProperties-questions")
    .appendChild(question.getElement());
});

// ------------------------------ Check If the Questions have all been completed ------------------------------ //
const ss = "rf";
function checkIfDone() {
  if (questionsAttempted === 31) {
    if (questionsCorrect > 28) {
      let password = document.querySelector(".passwordContainer");
      let passwordSpan = document.createElement("span");
      password.innerText = "The Password: ";
      passwordSpan.innerText = `${p}${a}${ss}${w}${o}${r}${d}`;
      password.appendChild(passwordSpan);
      alert(
        "Congratulations, you have completed the exercise. Find your password at the bottom right side of the screen."
      );
    } else {
      alert(
        "You Have Completed the quiz, but you did not pass. Read the explanations on the questions your got wrong, hit Refresh on your browser, and try again!"
      );
    }
  }
}

// ------------------------------ Extra Functionality for the Array exercise ------------------------------ //
const button = document.querySelector("button");
const message = document.querySelector(".message");
const icon = document.querySelector(".icon");
const correctArray = [13, "Javascript", true, "BloomTech", false, 42];
button.addEventListener("click", () => {
  if (finalArray !== undefined) {
    let numCorrect = 0;
    finalArray.forEach((item, index) => {
      if (item === correctArray[index]) {
        numCorrect += 1;
      }
    });
    if (numCorrect == 6) {
      icon.innerText = "✅";
      message.innerText =
        "Congratualtions You Got the Items in the Correct Order!";
    } else {
      icon.innerText = "❌";
      message.innerText = `Not Quite! You Got ${numCorrect} in the right place! Keep trying!`;
    }
  } else {
    icon.innerText = "❌";
    message.innerText = `Not Quite! You Need to Create Your Array First!`;
  }
  message.style.visibility = "visible";
});
