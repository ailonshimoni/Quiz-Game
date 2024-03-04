// DOM
const question = document.getElementById("question")
const questions = ["Which operating system is developed by Apple Inc.?"
                   ,"Which operating system is known for its open-source nature and versatility?"
                   , "Which operating system is primarily used for servers and supercomputers due to its stability and scalability?"
                    , "Which operating system is developed by Microsoft Corporation and widely used on personal computers?"];

const answers = ["macOS", "Linux", "Linux", "Windows"];

// Take Random Question From The List
const randomNumber = Math.floor(Math.random() * 3);
const randomQuestion = questions[randomNumber];

function Game(){
    
    // The Answers To The Questions
    const firstQuestion = ["Windows", "Linux", "macOS", "Android"];
    const secondQuestion =  ["Windows", "iOS", "Linux", "Android"];
    const thridQuestion =  ["macOS", "Windows", "Linux", "Android"];
    const fourthQuestion = ["macOS", "iOS", "Windows", "Android"];
    
    // Put Answers Inside The Buttons 
    let count = 0;
    question.textContent = randomQuestion;
    if(randomQuestion == questions[0]){
        while(count != 4){
            let getButton = document.getElementById(`button${count}`);
            getButton.textContent = firstQuestion[count];
            count++;
        }
    }
    if(randomQuestion == questions[1]){
        while(count != 4){
            let getButton = document.getElementById(`button${count}`);
            getButton.textContent = secondQuestion[count];
            count++;
        }
    }
    if(randomQuestion == questions[2]){
        while(count != 4){
            let getButton = document.getElementById(`button${count}`);
            getButton.textContent = thridQuestion[count];
            count++;
        }
    }
    if(randomQuestion == questions[3]){
        while(count != 4){
            let getButton = document.getElementById(`button${count}`);
            getButton.textContent = fourthQuestion[count];
            count++;
        }
    }

   
}

function check(event){
    buttonClick = event.target.textContent;
    if(randomQuestion == questions[0] && buttonClick == answers[0])
        return true;
    else if (randomQuestion == questions[1] && buttonClick == answers[1])
        return true;
    else if (randomQuestion == questions[2] && buttonClick == answers[2])
        return true;
    else if (randomQuestion == questions[3] && buttonClick == answers[3])
        return true;
    else
        return false;
}

function buttonClickHandler(event) {
    buttonClick = event.target;
    // if(check(event) == false)
    //    for(let i = 0; i < 4; i++){
    //         const getButton = document.getElementById(`button${i}`)
    //         console.log(getButton.textContent)
    //         if(getButton.textContent == buttonClick)
    //             getButton.style.backgroundColor = 'green';
    //     }

    if(check(event) == true){
  
       
        for(let i = 0; i < 4; i++){
            const getButton = document.getElementById(`button${i}`)
            if(getButton.textContent == buttonClick)
                getButton.style.backgroundColor = "green";
            else
                getButton.style.backgroundColor = "red";
            
        }
    }

    // else{

        
    // }
}

for(let i = 0; i < 4; i++){
    document.getElementById(`button${i}`).addEventListener("click", buttonClickHandler)
}

Game()