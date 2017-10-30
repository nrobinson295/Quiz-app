$(document).ready(function () {

    var counter = 0;
    var currentQuestion = 0;
    var quiz = {
        questions: [
            {
                name: '.intro',
                answer: null
            },
            {
                name: '.one',
                answer: 'A'
            },
            {
                name: '.two',
                answer: 'C'
            },
            {
                name: '.three',
                answer: 'D'
            },
            {
                name: '.four',
                answer: 'B'
            },
            {
                name: '.five',
                answer: 'D'
            },
            {
                name: '.final',
                answer: null
            }
        ]

    }

    function render() {
        $('.question').hide();
        $('.intro').hide();
        $('.final').hide();
        $('.tracker').hide();
        $('.feedback').html('');
        $(quiz.questions[currentQuestion].name).show();
    }

    function nextQuestion() {
        currentQuestion++;
        render();
    }
    function questionCounter() {
        $('.tracker').show();
        counter += 1;

    }
    function checkAnswer(chosen){
        if(chosen === quiz.questions[currentQuestion].answer){
            $('.feedback').html('Correct! you guessed the right answer');
            //show correct
        } else{
            $('.feedback').html('Incorrect, the correct answer was ' + quiz.questions[currentQuestion].answer);
            //show incorrect
        }

    }

    $('.startQuiz').click(function() {
        nextQuestion();
        $('.startQuiz').html('Next');
    })
    $('.answer').click(function(){
        var chosen = $(this).attr('answer');
        checkAnswer(chosen);
    })
    render();

    // on .click() on the start button the first question will appear. .show() and .hide() will be what i need to use.


    //on each question user will need to be able to select an answer option. i will also need to put in a confirm answer button.


    //after user confirms answer it will show the users chosen answer and what the correct answer is if the user was incorrect. if user was correct it will say "correct"


    //user progression on the right side of questions will show the user what question they are on ie. X out of 5.


    // after the final question i will show the user "congrats you have finished the quiz" it will also show how many questions the user got right out of 5. it will also show a % score.


    // on the final page user will have an option button to restart the quiz.


});