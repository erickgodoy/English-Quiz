import { questions } from "./data/questions.js";
import { quiz } from "./models/quiz.js";
import {UI} from "./models/UI.js";

function main(){
    const Quiz = new quiz(questions);
    const ui = new UI();
    ui.showQuestion(Quiz.getquestionIndex().sentence);
    ui.showOptions(Quiz.getquestionIndex().choices);

    ui.showProgress(Quiz.questionIndex + 1,Quiz.questions.length)
}

main();