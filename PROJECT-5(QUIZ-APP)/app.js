const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers : [
            
                { text: "Shark", correct: false},
                { text: "Blue Whale", correct: true},
                { text: "Dog", correct: false},
                { text: "Giraffe", correct: false},
        ]
    },

    {
        question: "Who was the First Prime Minsiter of India?",
        answers : [
            
                { text: "Shubas Chandra Bose", correct: false},
                { text: "Dr.BR.Ambedkar", correct: true},
                { text: "Pandit Jawaharlal Nehru", correct: true},
                { text: "Mohammed Jinnah", correct: false},
        ]
    },

    {
        question: "what is 1+1=?",
        answers : [
            
                { text: "two", correct: true},
                { text: "three", correct: false},
                { text: "four", correct: false},
                { text: "five", correct: false},
        ]
    },

    {
        question: "Which Year did we get Independance?",
        answers : [
            
                { text: "1999", correct: false},
                { text: "2023", correct: false},
                { text: "1947", correct: true},
                { text: "1948", correct: false},
        ]
    },

    {
        question: "Fastest Car in the world?",
        answers : [
                { text: "Lamborgini", correct: false},
                { text: "Mercedes", correct: false},
                { text: "koneigsen", correct: true},
                { text: "Toyota", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.querySelector("#next-btn");
// const getButton = document.getElementsByClassName("btn");

let currentQuestionIndex = 0;
let score = 0;

function StartQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answers =>{
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButton.appendChild(button); 
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click",selectAnswer);
    }); 
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    // Update classes based on correctness
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // Disable all answer buttons
    Array.from(answerButton.children).forEach(button => {
        button.disabled = true;
    });

    // Make the "next" button visible
    nextButton.style.display = "block";
}


// document.addEventListener("DOMContentLoaded", function() {
//     /Your code here
// });

// function selectAnswer(e){
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === "true";
//     if(isCorrect){
//         selectedBtn.classList.add("correct");
//         score++;
//     }
//     else{
//         selectedBtn.classList.add("incorrect");
//     }

//     Array.from(answerButton.children).forEach(button => {
//             if(button.dataset.correct === "true"){
//                 button.classList.add("correct");
//             }
//             button.disabled = true;
//     });

//     nextButton.style.display = "block";
//     // console.log("Hello reached!!");
// }

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = 'play Again';
    nextButton.style.display = 'block';
}

// function showScore(){
//     resetState();
//     questions.innerHTML = `you scored ${score} out of ${questions.length}!`;
// }

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
    {
        showQuestion();
    }
    else
    {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        StartQuiz();
    }
});

// function resetState(){
//     getButton.innerHTML.display = none;
// }

StartQuiz();


