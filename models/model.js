class test{
    constructor(sentence, choices, answer){
        this.sentence = sentence;
        this.choices = choices;
        this.answer = answer;
    }

    correctAnswer(answer){
        return answer === this.answer;
    }
    
}