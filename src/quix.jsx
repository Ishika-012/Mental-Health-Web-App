import React, { useState } from 'react';
import background from './asset/background1.jpg';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import './Quiz.css';
ChartJS.register(ArcElement, Tooltip, Legend);
const quizData = [
  { question: "How often do you feel anxious?", a: { text: "Rarely", weight: 1 }, b: { text: "Sometimes", weight: 2 }, c: { text: "Often", weight: 3 }, d: { text: "Always", weight: 4 } },
  { question: "How do you feel when you wake up in the morning?", a: { text: "Refreshed", weight: 1 }, b: { text: "Neutral", weight: 2 }, c: { text: "Tired", weight: 3 }, d: { text: "Exhausted", weight: 4 } },
  { question: "How much sleep do you get on average? 💤", a: { text: "More than 8 hours", weight: 1 }, b: { text: "6-8 hours", weight: 2 }, c: { text: "4-6 hours", weight: 3 }, d: { text: "Less than 4 hours", weight: 4 } },
  { question: "How often do you feel overwhelmed? 😫", a: { text: "Never", weight: 1 }, b: { text: "Occasionally", weight: 2 }, c: { text: "Frequently", weight: 3 }, d: { text: "Always", weight: 4 } },
  { question: "How do you usually feel during the day? 💪", a: { text: "Energized", weight: 1 }, b: { text: "Okay", weight: 2 }, c: { text: "Lethargic", weight: 3 }, d: { text: "Exhausted", weight: 4 } },
  { question: "How do you cope with stress? 😥", a: { text: "Very well", weight: 1 }, b: { text: "Fairly well", weight: 2 }, c: { text: "Struggle at times", weight: 3 }, d: { text: "Not well", weight: 4 } },
  { question: "How is your appetite? 🍽️", a: { text: "Very good", weight: 1 }, b: { text: "Normal", weight: 2 }, c: { text: "Poor", weight: 3 }, d: { text: "None", weight: 4 } },
  { question: "How often do you feel irritable? 😠", a: { text: "Rarely", weight: 1 }, b: { text: "Sometimes", weight: 2 }, c: { text: "Often", weight: 3 }, d: { text: "Always", weight: 4 } },
  { question: "How well do you concentrate on tasks? 🧠", a: { text: "Very well", weight: 1 }, b: { text: "Fairly well", weight: 2 }, c: { text: "Struggle at times", weight: 3 }, d: { text: "Poorly", weight: 4 } },
  { question: "How connected do you feel to others? 👥", a: { text: "Very connected", weight: 1 }, b: { text: "Somewhat connected", weight: 2 }, c: { text: "Disconnected at times", weight: 3 }, d: { text: "Very disconnected", weight: 4 } }

];

const Quiz = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState(Array(quizData.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [chartData, setChartData] = useState([]);

  const currentQuizData = quizData[currentQuiz];

  const handleAnswerChange = (id, weight) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuiz] = { id, weight };
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    const finalScore = answers.reduce((acc, answer) => acc + (answer ? answer.weight : 0), 0);
    setScore(finalScore);
    setShowResults(true);

    // Set chart data based on final score
    if (finalScore <= 15) setChartData([25, 25, 25, 25]);
    else if (finalScore <= 30) setChartData([30, 20, 20, 30]);
    else setChartData([20, 20, 30, 30]);
  };

  const handlePrev = () => setCurrentQuiz(currentQuiz - 1);
  const handleNext = () => setCurrentQuiz(currentQuiz + 1);

  const renderMessage = () => {
    if (score <= 15) return "😊 You seem to be managing well, which is wonderful!";
    if (score <= 30) return "😌 You might be experiencing some stress, which is common in today’s fast-paced world.";
    return (
    <div>
      <div>"😥 You may be facing significant challenges. It's important to recognize when you're struggling and seek support.";</div>
      <div id="dietChart">
          <Pie data={pieData} /></div>
      <h3>Virtual Counsultation</h3>
	     <p>If you want, you can fix a virtual session with our specialist by filling out the <a href="https://docs.google.com/forms/d/e/1FAIpQLScF98TUcD2vTb4IXvT3kHIPxGQQwxVpHbxV-C59LPOcgjYAHw/viewform?usp=pp_url">form</a>. 
	     We will confirm your session with the email provided.</p>
    </div>
    )
  };

  const pieData = {
    labels: ['Fruits', 'Vegetables', 'Whole Grains', 'Proteins'],
    datasets: [
      {
        data: chartData,
        backgroundColor: ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99'],
      },
    ],
  };

  return (
  <div id="quiz">
    <div className="quiz-container">
      {showResults ? (
        <div>
          <p>{renderMessage()}</p>
          <button className="centered" onClick={() => window.location.reload()}>Go Back!</button>
        </div>
      ) : (
        <>
          <h2>{currentQuizData.question}</h2>
          <ul className="answer-list">
            {['a', 'b', 'c', 'd'].map((option) => (
              <li key={option}>
                <input
                  type="radio"
                  name="answer"
                  id={option}
                  onChange={() => handleAnswerChange(option, currentQuizData[option].weight)}
                  checked={answers[currentQuiz]?.id === option}
                />
                <label htmlFor={option}>{currentQuizData[option].text}</label>
              </li>
            ))}
          </ul>
          <div className="button-container">
            <button id="prev" onClick={handlePrev} disabled={currentQuiz === 0}>Previous</button>
            <button id="next" onClick={handleNext} disabled={currentQuiz === quizData.length - 1}>Next</button>
            <button id="submit" onClick={handleSubmit}>Submit</button>
          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default Quiz;