const questions = [
  {
    id: 1,
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "string", "float"],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "Which method is used to convert JSON to JavaScript object?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.object()", "JSON.convert()"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Which data type is NOT primitive?",
    options: ["String", "Number", "Object", "Boolean"],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Which symbol is used for single-line comments?",
    options: ["<!-- -->", "/* */", "//", "#"],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Which method adds an element at the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "Which method removes the last element from an array?",
    options: ["shift()", "pop()", "splice()", "slice()"],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Which keyword is used to declare a constant?",
    options: ["var", "let", "const", "static"],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "What does NaN stand for?",
    options: ["No any Number", "Not a Name", "Not a Number", "New and New"],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "Which operator is used to compare both value and type?",
    options: ["==", "!=", "===", "="],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "Which function is used to print output in console?",
    options: ["print()", "log()", "console.log()", "output()"],
    correctAnswer: 2
  },
  {
    id: 11,
    question: "Which loop executes at least once?",
    options: ["for", "while", "do...while", "foreach"],
    correctAnswer: 2
  },
  {
    id: 12,
    question: "Which method creates a new array?",
    options: ["forEach()", "map()", "push()", "pop()"],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "Which keyword is used to define a function?",
    options: ["func", "define", "function", "method"],
    correctAnswer: 2
  },
  {
    id: 14,
    question: "Which object is used to work with dates?",
    options: ["Time", "Date", "Clock", "Calendar"],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "Which method converts array to string?",
    options: ["join()", "map()", "filter()", "reduce()"],
    correctAnswer: 0
  },
  {
    id: 16,
    question: "Which statement stops loop execution?",
    options: ["continue", "stop", "break", "exit"],
    correctAnswer: 2
  },
  {
    id: 17,
    question: "Which method selects an element by ID?",
    options: [
      "document.querySelectorAll()",
      "document.getElementsByClassName()",
      "document.getElementById()",
      "document.getElementsByTagName()"
    ],
    correctAnswer: 2
  },
  {
    id: 18,
    question: "Which keyword refers to current object?",
    options: ["this", "self", "object", "current"],
    correctAnswer: 0
  },
  {
    id: 19,
    question: "Which array method filters elements?",
    options: ["map()", "filter()", "reduce()", "forEach()"],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "Which function delays execution?",
    options: ["setTimeout()", "setInterval()", "delay()", "wait()"],
    correctAnswer: 0
  },
  {
    id: 21,
    question: "Which keyword is used for inheritance in ES6?",
    options: ["extends", "inherits", "super", "class"],
    correctAnswer: 0
  },
  {
    id: 22,
    question: "Which method stops setInterval?",
    options: ["stopInterval()", "clearInterval()", "removeInterval()", "endInterval()"],
    correctAnswer: 1
  },
  {
    id: 23,
    question: "Which array method reduces array to single value?",
    options: ["map()", "filter()", "reduce()", "forEach()"],
    correctAnswer: 2
  },
  {
    id: 24,
    question: "Which keyword creates a class?",
    options: ["object", "function", "class", "constructor"],
    correctAnswer: 2
  },
  {
    id: 25,
    question: "Which storage persists even after browser close?",
    options: ["sessionStorage", "cookies", "localStorage", "cache"],
    correctAnswer: 2
  }
];


const bgMusic = new Audio('../assets/background-music.mp3')
bgMusic.loop = true
bgMusic.volume = 0.005

let isMusicPlay = false
const musicIcon = document.querySelector('.music_icon')

musicIcon.addEventListener('click', () => {
  isMusicPlay = !isMusicPlay
  if (isMusicPlay) {
    musicIcon.innerHTML = '<i class="fa-solid fa-volume-high"></i>'
    bgMusic.play()
  } else {
    musicIcon.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>'
    bgMusic.pause()
  }
})

const correctAnsMusic = new Audio('../assets/correct.wav')
const wrongAnsMusic = new Audio('../assets/wrong.wav')



let questionCountIndex = JSON.parse(localStorage.getItem('questionIndex')) || 0
let score = JSON.parse(localStorage.getItem('score')) || 0;


const timerEl = document.querySelector('.timer');
const nextBtn = document.querySelector('.next_question button');

let timer = 30;
let timerId;

function startTimer() {
  // agar pehle se chal raha ho to band karo
  clearInterval(timerId);

  timer = 30; // reset timer
  printTimer(); // first render

  timerId = setInterval(() => {
    if (timer > 16) {
      document.body.style.backgroundColor = '#CCE2C2';
      nextBtn.style.color = '#01AB08';
      timerEl.style.backgroundColor = '#01AB08';
    }
    else if (timer > 6) {
      document.body.style.backgroundColor = '#E4E5C7';
      nextBtn.style.color = 'rgba(197, 177, 0, 0.43)';
      timerEl.style.backgroundColor = 'rgba(197, 177, 0, 0.43)';
    }
    else if (timer > 1) {
      document.body.style.backgroundColor = '#DBADAD';
      nextBtn.style.color = 'rgba(197, 13, 0, 0.43)';
      timerEl.style.backgroundColor = 'rgba(197, 13, 0, 0.43)';
    }
    else {
      clearInterval(timerId);
      window.location.href = '../result_page/index.html';
      localStorage.setItem('questionIndex',0)
    }

    printTimer();
  }, 1000);
}

startTimer()

function printTimer() {
  --timer
  timerEl.textContent = `00:${timer.toString().padStart(2, 0)}`
}


const questionOpt = document.querySelector('.questions_opt ul')

function render(list) {
  questionOpt.innerHTML = list?.options?.map((option, index) => (
    `
    <li class="questions_opt_li" onclick="checkAnswerState(${index})">
      <span class="text">${option}</span>
    </li> 
  `
  )).join("");
}

render(questions[questionCountIndex])

// render question

const userQuestion = document.querySelector('.question p')
userQuestion.textContent = questions[questionCountIndex].question


// render question count

const questionCount = document.querySelector('.question_count')
questionCount.textContent = `${(questionCountIndex + 1).toString().padStart(2, 0)}/25`


function ifAnswerIsCorrect(index) {
  const li = questionOpt.children[index]
  li.classList.add('correct_answer')
  li.innerHTML += `
      <span class="correct_answer_icon">
         <i class="fa-solid fa-circle-check"></i>
      </span>
    `
}


function ifAnswerIsWrong(index) {
  const li = questionOpt.children[index]
  li.classList.add('wrong_answer')
  li.innerHTML += `
      <div class="wrong_answer_div">
          <span>You chose</span>
          <i class="fa-solid fa-circle-xmark"></i>
      </div>
    `
}

let answered = false

function checkAnswerState(index) {

  if (answered) {
    alert("Move to next Question")
    return
  }
  answered = true

  if (questions[questionCountIndex].correctAnswer == index) {
    ifAnswerIsCorrect(index)
    correctAnsMusic.play()
    ++score
    localStorage.setItem('score',JSON.stringify(score))
  } else {
    ifAnswerIsWrong(index)
    ifAnswerIsCorrect(questions[questionCountIndex].correctAnswer)
    wrongAnsMusic.play()
  }
}

function nextQuestion() {
  if (!answered) {
    alert('Select Answer')
    return
  }
  timer = 30
  answered = false;
  localStorage.setItem('questionIndex',JSON.parse(questionCountIndex + 1))

  startTimer()
  if (questionCountIndex < questions.length - 1) {
    questionCountIndex++
    render(questions[questionCountIndex])
    userQuestion.textContent = questions[questionCountIndex]?.question
    questionCount.textContent = `${(questionCountIndex + 1).toString().padStart(2, 0)}/25`
  } else {
    window.location.href = '../result_page/index.html'
    localStorage.setItem('questionIndex',0)
  }
}