//@ts-check
import { question }  from "./model.js";

export class quiz{
    questionIndex = 0;
    score = 0;
    
    /**
     * 
     * @param {question[]} question set of questions
     */
    constructor(question){
        this.questions = question;
    }

    /**
     * 
     * @returns {boolean} true if the quiz is over
     */
    idEnded(){
        return this.questionIndex === this.questions.length;
    }

    /**
     * 
     * @param {string} answer some text
     */
    guess(answer){
        if(this.getquestionIndex().correctAnswer(answer)){
            this.score++;
        }

        this.questionIndex++;
    }

    /**
     * 
     * @returns {question} index of a question
     */
    getquestionIndex(){
        return this.questions[this.questionIndex];
    }

}