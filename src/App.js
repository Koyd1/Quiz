import './index.scss';
import React, {useState} from "react";

const questions = [
  {
    title: 'React - это ... ?',
    variants: [
        'Фреймворк',
        'Библиотека',
        'Приложение'
    ],
    correct: 1,
  },
  {
    title: 'Компонент - это ...  ',
    variants: [
        'Приложение',
        'Часть приложения или страницы',
        'То, что я не знаю что такое'],
    correct: 1,
  },
    {
        title: 'Какова основная профессия Теда Мосби, главного героя фильма “Как я встретил вашу маму”?',
        variants: [
            'Адвокат',
            'Банкир',
            'Архитектор',
            'Врач',
        ],
        correct: 2,
    },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
    {
        title: 'В чём основоное различие меежду PROPS и СОСТОЯНИЕМ?',
        variants: [
            'Состояние изменчиво (изменяется в зависимости от действий пользователя), а свойства - нет.',
            'Свойство изменчиво (изменяется в зависимости от действий пользователя), а состояние - нет.',
            'Сдаюсь'],
        correct: 0,
    },
    {
        title: 'Какой вкус у Куантро?',
        variants: [
            'Базилика',
            'Лимона',
            'Ванили',
            'Апельсина'
        ],
        correct: 3,
    },
    {
        title: 'Кого поцеловала Мадонна на Video Music Awards в 2003 году?',
        variants: [
            'Дженнифер Лопес и Шакира',
            'Бритни Спирс и Кристину Агилеру',
            'Бритни Спирс и Джанет Джексон',
            'Кристину Агилеру и Кайли Миноуг'],
        correct: 1,
    },
    {
        title: 'Сколько весит костюм Чубакки?',
        variants: [
            '7.7 кг',
            '3.6 кг',
            '2.7 кг',
            '6.8 кг'],
        correct: 1,
    },
    {
        title: 'Сколько костей в теле акулы?',
        variants: [
            '329',
            '76',
            '0',
            '248',
            '115',
        ],
        correct: 2,
    },
    {
        title: 'Кто был главой государства в Японии во время второй мировой войны?',
        variants: [
            'Император Муцухито',
            'Император Акихито',
            'Император Хирохито',
            'Император Ёсихито '],
        correct: 2,
    },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='ups'/>
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
        <a href="/"><button>Попробовать снова</button></a>

    </div>
  );
}


function Game({step ,question, onClickVariant}) {
    const percentage = Math.round(step / questions.length * 100)
    console.log(percentage)
  return (
    <div>
      <div className="progress">
        <div style={{ width: `${ percentage }%`} } className="progress__inner"></div>
      </div>
      <h1>{question.title} </h1>
      <ul>
          {
              question.variants.map((text, index) =>
                  <li onClick={() => onClickVariant(index)} key={text}>{text}</li>)
          }
      </ul>
    </div>
  );
}

function App() {
    const [correct, setCorrect] = useState(0);
    const [step, setStep] = useState(0);
    const question = questions[step];
    const onClickVariant = (index) => {
        setStep(step + 1);

        if (index === question.correct) {
            setCorrect(correct + 1)
        }
    };

  return (
      <div>
          <div>
              <div className="nameH">
              <h1>All or Nothing</h1>
              </div>
          </div>
    <div className="App">
        {
            step !== questions.length
                ? (<Game step={step}  question={question} onClickVariant={onClickVariant}/>)
                : (<Result correct={correct} />)
        }
    </div>
      </div>
  );
}

export default App;
