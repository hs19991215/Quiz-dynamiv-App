const quizData =  [
    {
        question:" 1.If you type the following code in the console window, what result will you get? 3 > 2 > 1 === false; ",

        a:"True ",
        b:"False ",
        c:"undefined ",
        d:"Syntax Error ",
       
        correct:"a",
    },


    {
        question:" 2. JavaScript is a ___ -side programming language.  ",

        a:"Client",
        b:"Server",
        c:"Both",
        d:"None",

        correct:"c",

    },

    {
        question:"  3. Which of the following will write the message “Hello DataFlair!” in an alert box?",

        a:"alertBox(“Hello DataFlair!”);",
        b:"alert(Hello DataFlair!);</ ",
        c:"msgAlert(“Hello DataFlair!”); ",
        d:"alert(“Hello DataFlair!”); ",

        correct:"d"

    },

    {
        question:"4.How do you find the minimum of x and y using JavaScript?",

        a:"min(x,y);",
        b:"Math.min(x,y)",
        c:"Math.min(xy) ",
        d:"min(xy);",

        correct:"b"

    },

    {
        question:"5. Which of the following statements will throw an error?",

        a:"var fun = function bar( ){ }",
        b:"var fun = function bar{ }",
        c:"Both A & B ",
        d:"min(xy);",

        correct:"a"

    }
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})