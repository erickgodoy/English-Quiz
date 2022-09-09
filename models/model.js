class test{

    /**
     * 
     * @param {string} sentence this is the text of the question
     * @param {string[]} choices this are the choices of the question
     * @param {string} answer this is the correct answer of the question
     */

    constructor(sentence, choices, answer){
        this.sentence = sentence;
        this.choices = choices;
        this.answer = answer;
    }

    /**
     * 
     * @param {string} answer choice selected for the question
     * @returns boolean  if the answer is correct
     */

    correctAnswer(answer){
        return answer === this.answer;
    }
    
}