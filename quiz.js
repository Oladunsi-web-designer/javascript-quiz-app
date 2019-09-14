const quizInfo = [
    {
        question: 'What is the capital of Nigeria',
        answer: 'Abuja',
        optionOne: 'Lagos',
        optionTwo: 'Calabar',
        optionThree: 'Lokoja',
        optionFour: 'Abuja'
    },
    {
        question: 'Who is the President Of America',
        answer: 'Donald Trump',
        optionOne: 'Donald Trump',
        optionTwo: 'Mark Spence',
        optionThree: 'Adam Smith',
        optionFour: 'Muhammadu Buhari'
                      
    },
    {
        question: 'When did Nigeria first become a Republic',
        answer: '1963',
        optionOne: '1966',
        optionTwo: '1979',
        optionThree: '1963',
        optionFour: '1960'
    },
    {
        question: 'When did Nnamdi Azikwe die',
        answer: '1996',
        optionOne: '1990',
        optionTwo: '1996',
        optionThree: '1986',
        optionFour: '1976'
    },
    {
        question: 'In which state is the yankari game reserve located',
        answer: 'Bauchi State',
        optionOne: 'Bauchi State',
        optionTwo: 'Lagos State',
        optionThree: 'Ogun State',
        optionFour: 'Kaduna State'
    },
    {
        question: 'Which state\'s slogan is THE BIG HEART',
        answer: 'Delta State',
        optionOne: 'Lagos State',
        optionTwo: 'Bornu State',
        optionThree: 'Delta State',
        optionFour: 'Imo State'
    },
    {
        question: 'Who invented the telephone',
        answer: 'Graham Bell',
        optionOne: 'Isaac Newton',
        optionTwo: 'Thomas Edison',
        optionThree: 'Albert Einsten',
        optionFour: 'Graham Bell'
    },];

const question = quizIterator(quizInfo);

//Call first profile

nextQuestion();

let actualScore = 0;


//Next question

const addScore = (button) => {
    if(button.classList.contains("correct")){
         actualScore++;
        let val = actualScore;
        let score = document.getElementById("score");
        score.innerHTML = `${actualScore}`;
    }
}


function totalScore(){
    let main = document.getElementById('main');
    main.innerHTML = `<h1 class='result'>You Are Done Congrats <br> Your Score Is : <br> ${actualScore}</h1>`;
}


function nextQuestion(){
    
    const currQuestion = question.next().value;
    
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3');
    let btn4 = document.getElementById('btn4');
    let heading = document.getElementById('question');
    
    
    if(currQuestion !== undefined){
    
        heading.innerHTML = currQuestion.question;
        btn1.innerHTML = currQuestion.optionOne;
        btn2.innerHTML = currQuestion.optionTwo;
        btn3.innerHTML = currQuestion.optionThree;
        btn4.innerHTML = currQuestion.optionFour;
        
    }else{    
       totalScore();
    }
}

//Iterator function
function quizIterator(question){
    let nextQuest = 0;
    
    return {
        next: function(){
            return nextQuest < question.length ?
            {value: question[nextQuest++], done: false} :
            {done: true}
        }
    };
    
    
}

// Validating Answers

let opts = document.querySelectorAll('.btn');

let optArr = Array.from(opts);

console.log(optArr);

optArr.forEach(function(opts, index, optArr) {
    optArr[index].addEventListener('click', () => {
          const realAns = quizInfo.map(function(pick){
             return pick.answer;
            });
        
        let but = optArr[index].textContent;
        
        let viewAns = realAns.includes(but);
        
        if(viewAns){
             optArr[index].classList.add("correct");
            setTimeout(() => {
                optArr[index].classList.remove("correct");
                nextQuestion();
            }, 500);
        }else{
            optArr[index].classList.add("wrong");
            setTimeout(() => {
                optArr[index].classList.remove("wrong");
                nextQuestion();
            }, 500);
        }
        addScore(optArr[index]);
        
    });
});

