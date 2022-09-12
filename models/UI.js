export class UI{
    constructor(){}

    showQuestion(text){
        const questionTitle = document.getElementById('sentence');
        questionTitle.innerHTML = text;
    }

    showOptions(choices, callback){
            const contentChoices = document.getElementById('choices');
            contentChoices.innerHTML = '';

            for(let i = 0; i<choices.length; i++){
                const button = document.createElement('button');
                button.innerText = choices[i];
                button.className = "button";
                button.addEventListener('click', () => callback(choices[i]));
                contentChoices.appendChild(button);
            }
    }
    

    showProgress(index,total){
        const progress = document.getElementById('progress');
        progress.innerHTML = `Pregunta ${index} de ${total}`;
    }
}