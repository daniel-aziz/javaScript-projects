const quizData = [
    {
        question: "What is the most used programing language used in 19`?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "Who is the President of USA?",
        a: "Donald Trump",
        b: "Barak Obama",
        c: "George Bush",
        d: "Joe Biden",
        correct: "d"
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
    }
]

const questionElem = document.getElementById('question')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')


console.table(quizData)

let currentQuestionIndex = 0;
loadQuiz();

function loadQuiz() {
    const currentQuestion = quizData[currentQuestionIndex]
    questionElem.innerText = currentQuestion.question;
    a_text.innerText = currentQuestion.a;
    b_text.innerText = currentQuestion.b;
    c_text.innerText = currentQuestion.c;
    d_text.innerText = currentQuestion.d;
}

submitBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) loadQuiz();
    else { 
        // TODO: Show Resultes. 
        alert('You Finished!') 
    }
})

