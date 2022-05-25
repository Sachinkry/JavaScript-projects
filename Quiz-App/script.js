const quizData = [
    {
        question: 'How old is Elon Musk?',
        a: '30',
        b: '37',
        c: '46',
        d: '50',
        correct: 'd'
    }, {
        question: 'Which programming language is used for writing smart contracts?',
        a: 'JavaScript',
        b: 'Python',
        c: 'Solidity',
        d: 'C++',
        correct: 'c'
    }, {
        question: 'Who is the prime minister of India?',
        a: 'Pappu',
        b: 'Arvind Kejriwal',
        c: 'Narendra Modi',
        d: 'Ashneer Grover',
        correct: 'Narendra Modi'
    }, {
        question: 'Which company makes iPhones?',
        a: 'OnePlus',
        b: 'Apple',
        c: 'Redmi',
        d: 'Sumsung',
        correct: 'Apple'
    }
]

const scoreEl = document.getElementById('quiz-score');
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_textEl = document.getElementById('a_text');
const b_textEl = document.getElementById('b_text');
const c_textEl = document.getElementById('c_text');
const d_textEl = document.getElementById('d_text');

const submitBtnEl = document.getElementById('submitBtn');


// 1. load the questions
// 2. check if one of the checkboxes is checked then trigger submit button  
// 3. render the next question


let quizDataIndex = 0;
let score = 0;

function loadQuiz() {
    deselectAnswers();
    
    const quizDataValue = quizData[quizDataIndex];

    questionEl.innerText = quizDataValue.question;
    a_textEl.innerText = quizDataValue.a;
    b_textEl.innerText = quizDataValue.b;
    c_textEl.innerText = quizDataValue.c;
    d_textEl.innerText = quizDataValue.d;
}
loadQuiz();

function isChecked(){
    return document.querySelector('input:checked')
}


submitBtnEl.addEventListener('click', () => {

    seeScore();
    
    if(isChecked()) {
        
        quizDataIndex++;

        if(quizDataIndex < quizData.length){
            loadQuiz();
        }else {
            quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            
            <button class="btn" onclick="location.reload()">Reload</button>`
            score = 0;
        }
    }
})


// retrieve the answer and check if it's correct and show the score
function seeScore() {

    let answer = undefined;
    
    answerEls.forEach((option) => {

        if(option.checked){
            answer = option.id; 
        }
    });

    if(answer) {
        if(answer === quizDataValue.correct){
            score++;
        }
    }
    
    
}


function deselectAnswers() {
    answerEls.forEach((option) => {
        option.checked = false;
    });
}










































// let currentQuiz = 0;

// loadQuiz();

// // load quiz
// function loadQuiz() {

//     // deSelectBoxes();

//     const currentQuizData = quizData[currentQuiz];

//     questionEl.innerText = currentQuizData.question;
//     a_textEl.innerText = currentQuizData.a;
//     b_textEl.innerText = currentQuizData.b;
//     c_textEl.innerText = currentQuizData.c;
//     d_textEl.innerText = currentQuizData.d;

// }


// const submitBtnEl = document.getElementById('submitBtn');

// submitBtn.addEventListener("click", () => {
//     // check to see the answer
//     const answer = getSelected();

//     if (answer) {
//         if (answer === quizData[currentQuiz].correct) {
//             score++;
//         }

//         currentQuiz++;
//         if (currentQuiz < quizData.length) {
//             loadQuiz();
//         } else {
//             quiz.innerHTML = `
//                 <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
//                 <button onclick="location.reload()">Reload</button>
//             `;
//         }
//     }
// });
// function deSelectBoxes() {
//     answerEls.forEach((answerEl) => {
//         answerEl.checked = false;
//     });

// }




// function getSelected() {
//     let answer = undefined;

//     answerEls.forEach((answerEl) => {
//         if (answerEl.checked) {
//             answer = answerEl.id;
//         }
//     });

//     return answer;
// }
