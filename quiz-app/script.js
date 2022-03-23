const quizData = [
    {
        question: "What is the most used programming language in 2021?",
        a: "Java",
        b: "C#",
        c: "Python",
        d: "JavaScript",
        correct: "c",
    },
    {
        question: "Who is the President of the USA?",
        a: "Gorge Bush",
        b: "Donald Trump",
        c: "Barak Obama",
        d: "Joe Biden",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "How many continents are there?",
        a: "4",
        b: "7",
        c: "5",
        d: "We are all connected",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz');
const questionElem = document.getElementById('question')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')

let currentQuestionIndex = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuestion = quizData[currentQuestionIndex];
    questionElem.innerText = currentQuestion.question;
    a_text.innerText = currentQuestion.a;
    b_text.innerText = currentQuestion.b;
    c_text.innerText = currentQuestion.c;
    d_text.innerText = currentQuestion.d;
}

function getSelected() {
    const answersElem = document.querySelectorAll('.answer');

    let answer = undefined;

    answersElem.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    const answersElem = document.querySelectorAll('.answer');
    answersElem.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const userAnswer = getSelected();

    if (userAnswer) {
        if (userAnswer === quizData[currentQuestionIndex].correct) {
            score++;
        }

        currentQuestionIndex++;
        
        if (currentQuestionIndex < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `
            <h2>
            You answered correctly at ${score}/${quizData.length} 
            questions!  
            </h2>
            `
            submitBtn.innerHTML = `
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
    else {
        
    }



})

