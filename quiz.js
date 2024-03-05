// DOM
const question = document.getElementById("question");
const page = document.getElementById("page");
const hide = document.getElementById("hide");
const endContent = document.getElementById("endContent");
const startGame = document.getElementById("startGame");
let questionCountH3 = document.getElementById("count");


let trueQuestions = 0;
let falseQuestions = 0;
let questions = ["What is the capital city of Australia?"
                   ,'Who wrote the famous novel "To Kill a Mockingbird"?'
                   , 'Which planet is known as the "Red Planet"?'
                    , "What is the chemical symbol for gold?"
                    , "Who painted the Mona Lisa?"
                    , "What is the tallest mountain in the world?"
                    , "What is the national animal of China?"
                    , "What is the largest ocean on Earth?"
                    , 'Who wrote the play "Romeo and Juliet"?'
                    , "What is the capital city of Brazil?"
                    ];



// Take Random Question From The List
let randomNumber;
let randomQuestion;
let questionsCount = 0;
function randomFunc(){
   
    randomNumber = Math.floor(Math.random() * questions.length);
    randomQuestion = questions[randomNumber];
    question.textContent = randomQuestion;
    Game()
}
// The Choices for The Questions
let choices = [
    ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    ["F. Scott Fitzgerald", "Harper Lee", "Ernest Hemingway", "Mark Twain"],
    ["Venus", "Mars", "Jupiter", "Saturn"],
    ["Go", "Gl", "Au", "Ag"],
    ["Michelangelo","Leonardo da Vinci","Vincent van Gogh","Pablo Picasso"],
    ["Mount Kilimanjaro","Mount Everest","Mount McKinley","Mount Fuji"],
    ["Tiger","Panda","Dragon","Lion"],
    ["Atlantic Ocean","Indian Ocean","Arctic Ocean","Pacific Ocean"],
    ["William Shakespeare","Charles Dickens","Jane Austen","George Bernard Shaw"],
    ["Rio de Janeiro","Brasília","São Paulo","Salvador"],
  ];

// The Answers To The Questions
let answers = ["Canberra", 
                "Harper Lee", 
                "Mars", 
                "Au",
                "Leonardo da Vinci",
                "Mount Everest",
                "Panda",
                "Pacific Ocean",
                "William Shakespeare",
                "Brasília",]



let questionNow;

let correctAnswer;


let count = 0;
function Game(){
    
  
    
   
 

     // Put Answers Inside The Buttons 
    for(let i = 0; i < questions.length; i++){
        if(randomQuestion == questions[i]){
            questionNow = i;
            correctAnswer = answers[questionNow]
            while(count != 4){
                let getButton = document.getElementById(`button${count}`);
                getButton.textContent = choices[i][count];
                count++;
            }
        }
    }
   
}

function check(event){
    buttonClick = event.target.textContent;
    for(let i = 0; i < questions.length; i++){
        if(randomQuestion == questions[i] && buttonClick == answers[i])
            return true;         
    }
    return false;
}

function buttonClickHandler(event) {
    if(document.getElementById('button0').style.backgroundColor != "green" && document.getElementById("button0").style.backgroundColor != "red"){
    buttonClick = event.target;
    buttonClick = event.target.textContent;

    questionsCount++;
    questionCountH3.textContent = `Count: ${questionsCount} / 10`;
    if(check(event) == true){
        trueQuestions++;
        for(let i = 0; i < 4; i++){
            const getButton = document.getElementById(`button${i}`)
            if(getButton.textContent == buttonClick)
                getButton.style.backgroundColor = "green";
            else
                getButton.style.backgroundColor = "red";
            
        }
    }

    else{
        falseQuestions++;
        for(let i = 0; i < 4; i++){
            const getButton = document.getElementById(`button${i}`)
            getButton.style.backgroundColor = "red"
            if(getButton.textContent == correctAnswer){
                getButton.style.backgroundColor = "green"
            }
            
        }
        
    }
    setTimeout(moveQuestion, 1000)
    }
 
}

function moveQuestion(){

   
    questions.splice(questionNow,1);
    answers.splice(questionNow,1);
    choices.splice(questionNow,1);

    count = 0;

    for(let i = 0; i < 4; i++){
        const getButton = document.getElementById(`button${i}`)
        getButton.style.backgroundColor = "white";
    }
    if(questions.length != 0)
        randomFunc();
    else
        gameOver();
}

function gameOver(){

    // Delete all The Things In The Page
    page.style.display = "none"
    for(let i = 0; i < 4; i++){
        document.getElementById(`button${i}`).style.display = "none"
    }

    // Show The Game Over Menu
    let show = document.getElementById("show");
    show.classList.remove('hidden')

    // Show The Player Results
    const results = document.getElementById("results");
    results.textContent = `True: ${trueQuestions} | False: ${falseQuestions}`;


 
}

for(let i = 0; i < 4; i++){
    document.getElementById(`button${i}`).addEventListener("click", buttonClickHandler)
}


function restartGame(){

    questions =  ["What is the capital city of Australia?"
                   ,'Who wrote the famous novel "To Kill a Mockingbird"?'
                   , 'Which planet is known as the "Red Planet"?'
                    , "What is the chemical symbol for gold?"
                    , "Who painted the Mona Lisa?"
                    , "What is the tallest mountain in the world?"
                    , "What is the national animal of China?"
                    , "What is the largest ocean on Earth?"
                    , 'Who wrote the play "Romeo and Juliet"?'
                    , "What is the capital city of Brazil?"
                    ];
    answers = ["Canberra", 
                    "Harper Lee", 
                    "Mars", 
                    "Au",
                    "Leonardo da Vinci",
                    "Mount Everest",
                    "Panda",
                    "Pacific Ocean",
                    "William Shakespeare",
                    "Brasília",]

    choices = [
            ["Sydney", "Melbourne", "Canberra", "Brisbane"],
            ["F. Scott Fitzgerald", "Harper Lee", "Ernest Hemingway", "Mark Twain"],
            ["Venus", "Mars", "Jupiter", "Saturn"],
            ["Go", "Gl", "Au", "Ag"],
            ["Michelangelo","Leonardo da Vinci","Vincent van Gogh","Pablo Picasso"],
            ["Mount Kilimanjaro","Mount Everest","Mount McKinley","Mount Fuji"],
            ["Tiger","Panda","Dragon","Lion"],
            ["Atlantic Ocean","Indian Ocean","Arctic Ocean","Pacific Ocean"],
            ["William Shakespeare","Charles Dickens","Jane Austen","George Bernard Shaw"],
            ["Rio de Janeiro","Brasília","São Paulo","Salvador"],
            ];
    questionsCount = 0;
    falseQuestions = 0;
    trueQuestions = 0;
    count  = 0;
    let show = document.getElementById("show");
    show.classList.add('hidden')

    page.style.display = "block"
    for(let i = 0; i < 4; i++){
        document.getElementById(`button${i}`).style.display = "block"
    }
    questionCountH3.textContent = `Count: ${questionsCount} / 10`;
    randomFunc();
}


function no(){
    show.classList.add('hidden')
    endContent.classList.remove('hidden');
}

function start(){
    startGame.classList.add("hidden")
    page.classList.remove("hidden")
    randomFunc()
}

