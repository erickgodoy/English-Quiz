import { questions } from "./data/questions.js";
import { quiz } from "./models/quiz.js";
import {UI} from "./models/UI.js";

function renderApp(Quiz,ui){
    ui.showQuestion(Quiz.getquestionIndex().sentence);
    ui.showProgress(Quiz.questionIndex + 1,Quiz.questions.length);
    ui.showOptions(Quiz.getquestionIndex().choices,(optionSelected) => {
        Quiz.guess(optionSelected);
        if(Quiz.isEnded()){
            const containerTest = document.getElementById('test');
            containerTest.innerHTML = `<h3>Puntaje Obtenido: ${Quiz.score}</h3>`;
        }else{
            renderApp(Quiz,ui);    
        }
    });


}

function main(){
    const Quiz = new quiz(questions);
    const ui = new UI();

    renderApp(Quiz,ui);
}

main();