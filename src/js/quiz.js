class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.score = 0;
    }

    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    checkAnswer(answer) {
        if (this.getCurrentQuestion().correct === answer) {
            this.score++;
        }
        this.currentQuestionIndex++;
    }

    isQuizOver() {
        return this.currentQuestionIndex >= this.questions.length;
    }
}

class UI {
    static showQuestion(question) {
        const quizDiv = document.getElementById("quiz");
        quizDiv.innerHTML = `
            <div class="question">${question.text}</div>
            <div class="options">
                ${question.options
                    .map(
                        (option, index) => `
                    <label>
                        <input type="radio" name="answer" value="${index}">
                        ${option}
                    </label>
                `
                    )
                    .join("")}
            </div>
        `;
    }

    static showResult(score, total) {
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `Você acertou ${score} de ${total} perguntas!`;
    }

    static showEndScreen() {
        const quizDiv = document.getElementById("quiz");
        quizDiv.innerHTML = `<h2>Quiz Finalizado!</h2>`;
    }

    static getSelectedOption() {
        const options = document.querySelectorAll("input[name='answer']");
        for (const option of options) {
            if (option.checked) {
                return parseInt(option.value);
            }
        }
        return null;
    }
}

// Perguntas do Quiz
const questions = [
    {
        text: "Quem são os Xakriabá?",
        options: [
            "Um grupo indígena brasileiro localizado em Minas Gerais.",
            "Um povo africano que migrou para o Brasil.",
            "Habitantes das margens do Rio Amazonas.",
            "Um grupo fictício de uma lenda indígena.",
        ],
        correct: 0,
    },
    {
        text: "Qual é o principal território habitado pelo povo Xakriabá?",
        options: [
            "Sertão do Araguaia.",
            "Serra da Capivara.",
            "Sertão do São Francisco, em Minas Gerais.",
            "Região do Pantanal.",
        ],
        correct: 2,
    },
    {
        text: "O que significa o termo 'afro-indígena'?",
        options: [
            "Uma pessoa que tem descendência africana e indígena.",
            "Um estilo musical que mistura culturas indígenas e africanas.",
            "Um evento que celebra apenas culturas indígenas.",
            "Um termo usado para indicar conflitos históricos.",
        ],
        correct: 0,
    },
    {
        text: "Qual é uma prática cultural marcante do povo Xakriabá?",
        options: [
            "A dança do frevo.",
            "Os rituais sagrados ligados à natureza.",
            "A produção de artefatos em bronze.",
            "A culinária baseada no cacau.",
        ],
        correct: 1,
    },
    {
        text: "Qual é a importância da cultura afro-indígena no Brasil?",
        options: [
            "Representa a luta e a resistência dos povos marginalizados.",
            "É uma parte insignificante da história brasileira.",
            "Está ligada apenas às festas populares.",
            "Só influenciou a culinária brasileira.",
        ],
        correct: 0,
    },
];

// Inicializa Quiz e UI
const quiz = new Quiz(questions);

document.addEventListener("DOMContentLoaded", () => {
    UI.showQuestion(quiz.getCurrentQuestion());

    document.getElementById("submit").addEventListener("click", () => {
        const selectedOption = UI.getSelectedOption();

        if (selectedOption === null) {
            alert("Por favor, selecione uma resposta.");
            return;
        }

        quiz.checkAnswer(selectedOption);

        if (quiz.isQuizOver()) {
            UI.showEndScreen();
            UI.showResult(quiz.score, quiz.questions.length);
        } else {
            UI.showQuestion(quiz.getCurrentQuestion());
        }
    });
});
