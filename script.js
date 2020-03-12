// BELOW: Example quiz code from https://www.mikedane.com/web-development/javascript/building-a-quiz/
// I really like the questions setup as objects like this.
// May need to change these from prompts.
var questions = [
    {
          question: "Commonly used data types do NOT include: \n(a) Booleans \n(b) Strings \n(c) Alerts \n(d) Numbers",
          answer: "c"
    },
    {
         question: "The condition in an if / else statement is enclosed in: \n(a) Quotes \n(b) Curly brackets \n(c) Parentheses \n(d) Square brackets",
         answer: "c"
    },
    {
         question: "Arrays in JavaScript can be used to store: \n(a) Numbers \n(b) Strings \n(c) Booleans \n(d) All of the above",
         answer: "d"
    }
];
var score = 0;

for(var i = 0; i < questions.length; i++){
    var response = window.prompt(questions[i].question);
    if(response == questions[i].answer){
         score++;
         alert("Correct!");
    } else {
         alert("WRONG!");
    }
}
alert("you got " + score + "/" + questions.length);








// QUESTIONS:
// Is responsiveness required? YES
// 

// REQS to start with:
// Nav bar
// --> will need timer
// --> will need link to high scores. BONUS: On click, have a confirm to ask if they want to abandon their quiz.

// ALL REQS SIMPLIFIED:
// Timer
// DOM changes from question to question
// Incorrect answer lessens remaining time
// Save high score with initials
// Scores will be saved & compared. Almost for sure need to rank them.
// --> Save scores as an array of objects, with initials & scores associated to each other.

// IDEAS:
// Have a form to start that logs their name. Maybe store this to localStorage.
// We'll use their name later for the high score.
// HOWEVER - we could just ask for their name at the end of the quiz. 

// BONUS: 
// Maybe store quiz progress in localStorage in case the browser aborts.
// Before pulling this information, ask the user if they are userName from localStorage. If the same person, ask if they'd like to
// start from where they left off.
// --> Example of form to capture name: https://getbootstrap.com/docs/4.4/examples/floating-labels/
// Highscore idea: Record multiple high scores. Use localStorage to record them, then sort & display based on where they scored.
// --> I'll need to load an algorithim for sorting based on score.

// **** BASIC REQS FOR ASSIGNMENT: ****

// # 04 Web APIs: Code Quiz
// As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment,
// which is typically a combination of multiple-choice questions and interactive challenges. Build a timed code
// quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML
// and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be
// responsive, ensuring that it adapts to multiple screen sizes.

// ## User Story

// AS A coding bootcamp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers


// ## Acceptance Criteria
// ### Main Goal ###
// *Create a coding quiz web app*
// GIVEN I am taking a code quiz

// WHEN I click the start button
// THEN a timer starts and I am presented with a question

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and score

// ```
// The following animation demonstrates the application functionality:

// ![code quiz](./Assets/04-web-apis-homework-demo.gif)

// ### Review
// You are required to submit the following for review:
// * The URL of the functional, deployed application. = https://samsherrill.github.io/4th-homework/
// * The URL of the GitHub repository. Give the repository a unique name CREATED
// and include a README describing the project. README NEEDS FINISHING
