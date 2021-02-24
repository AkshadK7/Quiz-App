import React, { useState } from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from './img/logo.png';

export default function App() {
	const questions = [
		{
			questionText: "What is the Google's AI Library called?",
			answerOptions: [
				{ answerText: 'Pytorch', isCorrect: false },
				{ answerText: 'Keras', isCorrect: false },
				{ answerText: 'Tensorflow', isCorrect: true },
				{ answerText: 'GraphQL', isCorrect: false },
			],
		},
		{
			questionText: 'Who is Full Form of DSC?',
			answerOptions: [
				{ answerText: 'Developer Student Community', isCorrect: false },
				{ answerText: 'Developer Students Clubs', isCorrect: false },
				{ answerText: 'Developer Students Community', isCorrect: false },
				{ answerText: 'Developers Student Clubs', isCorrect: true },
			],
		},
		{
			questionText: 'The CEO of Alphabet inc is?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Sundar Pichai', isCorrect: false },
				{ answerText: 'Mark Twain', isCorrect: false },
				{ answerText: 'Warren Buffet', isCorrect: false },
			],
		},
		{
			questionText: 'How old is Google?',
			answerOptions: [
				{ answerText: '17', isCorrect: false },
				{ answerText: '20', isCorrect: false },
				{ answerText: '26', isCorrect: false },
				{ answerText: '22', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const useStyles = makeStyles((theme) => ({
		root: {
		  flexGrow: 1,
		},
		menuButton: {
		  marginRight: theme.spacing(2),
		},
		title: {
		  flexGrow: 1,
		},
	  }));
	
	  const classes = useStyles();



	return (

		<div>
		<div className='app'>

			<AppBar>
				<Toolbar>
				<img src={logo} style={{width:200, marginTop: -7}} />
				</Toolbar>
      		</AppBar>

		<div>

			{showScore ? (
				<div className='score-section'>
					Final Score: {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}

		</div>
	 	 
	</div>
	
</div>

	);
}



// API Key = https://opentdb.com/api.php?amount=4&category=18&difficulty=medium&type=multiple