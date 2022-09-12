export class UI{
    constructor(){}

    showQuestion(text){
        const questionTitle = document.getElementById('sentence');
        questionTitle.innerHTML = text;
    }

    showOptions(choices){
        const contentChoices = document.getElementById('choices');
        for(let i = 0; i<choices.length; i++){
            const button = document.createElement('button');
            button.innerText = choices[i];
            button.className = "button";
            
            contentChoices.appendChild(button);
        }
    }

    showProgress(index,total){
        const progress = document.getElementById('progress');
        progress.innerHTML = `Pregunta ${index} de ${total}`;
    }
}